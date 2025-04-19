export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          user_id: string
          full_name: string
          role: "student" | "instructor" | "pro" | "dispatch" | "admin"
          avatar_url: string | null
          dashboard_preferences: Json | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          full_name: string
          role: "student" | "instructor" | "pro" | "dispatch" | "admin"
          avatar_url?: string | null
          dashboard_preferences?: Json | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          full_name?: string
          role?: "student" | "instructor" | "pro" | "dispatch" | "admin"
          avatar_url?: string | null
          dashboard_preferences?: Json | null
          created_at?: string
          updated_at?: string
        }
      }
      waitlist: {
        Row: {
          id: string
          name: string
          email: string
          role: "student" | "pro" | "instructor"
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          role: "student" | "pro" | "instructor"
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          role?: "student" | "pro" | "instructor"
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}

export type Profile = Database["public"]["Tables"]["profiles"]["Row"]
export type Waitlist = Database["public"]["Tables"]["waitlist"]["Row"]
