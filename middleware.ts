import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check for auth cookie instead of creating a Supabase client
  const hasAuthCookie = request.cookies.has("sb-access-token") || request.cookies.has("sb-refresh-token")

  // Auth routes - redirect to dashboard if logged in
  if (pathname.startsWith("/login") || pathname.startsWith("/register") || pathname.startsWith("/reset-password")) {
    if (hasAuthCookie) {
      return NextResponse.redirect(new URL("/dashboard", request.url))
    }
    return NextResponse.next()
  }

  // Protected routes - redirect to login if not logged in
  if (pathname.startsWith("/dashboard") || pathname.startsWith("/academy") || pathname.startsWith("/settings")) {
    if (!hasAuthCookie) {
      return NextResponse.redirect(new URL("/login", request.url))
    }
    return NextResponse.next()
  }

  // Public routes
  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*", "/academy/:path*", "/settings/:path*", "/login", "/register", "/reset-password"],
}
