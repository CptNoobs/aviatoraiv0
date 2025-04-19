-- Create profiles table if it doesn't exist
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('student', 'pro', 'instructor', 'dispatch')),
  avatar_url TEXT,
  dashboard_preferences JSONB DEFAULT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on user_id for faster lookups
CREATE INDEX IF NOT EXISTS profiles_user_id_idx ON profiles(user_id);

-- Add row level security policies
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Drop existing policies to recreate them
DROP POLICY IF EXISTS "Users can read own profile" ON profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON profiles;
DROP POLICY IF EXISTS "Users can insert own profile" ON profiles;

-- Users can read their own profile
CREATE POLICY "Users can read own profile" 
ON profiles FOR SELECT 
USING (auth.uid() = user_id);

-- Users can update their own profile
CREATE POLICY "Users can update own profile" 
ON profiles FOR UPDATE 
USING (auth.uid() = user_id);

-- Users can insert their own profile
CREATE POLICY "Users can insert own profile" 
ON profiles FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Create a function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user() 
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (user_id, full_name, role)
  VALUES (
    new.id, 
    coalesce(new.raw_user_meta_data->>'full_name', new.email), 
    coalesce(new.raw_user_meta_data->>'role', 'student')
  );
  RETURN new;
EXCEPTION
  WHEN unique_violation THEN
    -- If profile already exists, just return the new user
    RETURN new;
  WHEN OTHERS THEN
    -- Log other errors but don't fail the user creation
    RAISE LOG 'Error creating profile for user %: %', new.id, SQLERRM;
    RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create a trigger to call the function on new user signup
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
AFTER INSERT ON auth.users
FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create a script to fix existing users without profiles
DO $$
DECLARE
  user_record RECORD;
BEGIN
  FOR user_record IN 
    SELECT id, email FROM auth.users WHERE id NOT IN (SELECT user_id FROM profiles)
  LOOP
    BEGIN
      INSERT INTO profiles (user_id, full_name, role)
      VALUES (
        user_record.id,
        user_record.email,
        'student'
      );
      RAISE NOTICE 'Created profile for user %', user_record.id;
    EXCEPTION
      WHEN unique_violation THEN
        RAISE NOTICE 'Profile already exists for user %', user_record.id;
      WHEN OTHERS THEN
        RAISE NOTICE 'Error creating profile for user %: %', user_record.id, SQLERRM;
    END;
  END LOOP;
END;
$$;
