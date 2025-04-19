import { createServerSupabaseClient } from "@/lib/supabase/server"

export default async function DebugPage() {
  let supabaseStatus = "Not initialized"
  let error = null

  try {
    const supabase = createServerSupabaseClient()
    const { data, error: supabaseError } = await supabase.from("profiles").select("*").limit(1)

    if (supabaseError) {
      supabaseStatus = "Error connecting to Supabase"
      error = supabaseError.message
    } else {
      supabaseStatus = "Connected to Supabase successfully"
    }
  } catch (e: any) {
    supabaseStatus = "Exception when connecting to Supabase"
    error = e.message
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Debug Page</h1>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Environment Variables</h2>
        <div className="grid grid-cols-1 gap-4">
          <div className="p-4 bg-gray-100 rounded">
            <p className="font-medium">NEXT_PUBLIC_SUPABASE_URL:</p>
            <p className="text-sm mt-1">
              {process.env.NEXT_PUBLIC_SUPABASE_URL
                ? `${process.env.NEXT_PUBLIC_SUPABASE_URL.substring(0, 10)}...`
                : "Not set"}
            </p>
          </div>

          <div className="p-4 bg-gray-100 rounded">
            <p className="font-medium">NEXT_PUBLIC_SUPABASE_ANON_KEY:</p>
            <p className="text-sm mt-1">
              {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
                ? `${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY.substring(0, 10)}...`
                : "Not set"}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Supabase Connection</h2>
        <div className="p-4 bg-gray-100 rounded">
          <p className="font-medium">Status:</p>
          <p
            className={`text-sm mt-1 ${supabaseStatus.includes("Error") || supabaseStatus.includes("Exception") ? "text-red-500" : "text-green-500"}`}
          >
            {supabaseStatus}
          </p>
          {error && (
            <div className="mt-2">
              <p className="font-medium">Error:</p>
              <p className="text-sm mt-1 text-red-500">{error}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
