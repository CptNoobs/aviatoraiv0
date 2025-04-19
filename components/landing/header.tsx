import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          Your App
        </Link>
        <nav className="ml-auto flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            Log in
          </Link>
          <Link
            href="/register"
            className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-white hover:bg-primary/90"
          >
            Sign up
          </Link>
        </nav>
      </div>
    </header>
  )
}
