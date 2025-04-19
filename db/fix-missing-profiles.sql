-- This script will create profiles for any users that don't have one

-- First, get all users without profiles
WITH users_without_profiles AS (
  SELECT id, email
  FROM auth.users u
  LEFT JOIN profiles p ON u.id = p.user_id
  WHERE p.id IS NULL
)
-- Then insert profiles for those users
INSERT INTO profiles (user_id, full_name, role)
SELECT 
  id, 
  email, 
  'student' -- Default role
FROM users_without_profiles;

-- Output the count of fixed profiles
SELECT 'Fixed profiles for ' || COUNT(*) || ' users' as result
FROM profiles;
