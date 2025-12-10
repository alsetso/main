import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  // Skip middleware if Supabase is not configured
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return NextResponse.next({
      request,
    });
  }

  // Check for oversized cookies (HTTP 431 prevention)
  // Calculate total cookie size to prevent "Request Header Fields Too Large" errors
  const allCookies = request.cookies.getAll();
  const totalCookieSize = allCookies.reduce((total, cookie) => {
    return total + cookie.name.length + (cookie.value?.length || 0);
  }, 0);

  // If cookies are too large (>12KB), clear ALL Supabase cookies and start fresh
  // This prevents HTTP 431 errors
  const MAX_COOKIE_SIZE = 12288; // 12KB limit (increased from 8KB)
  if (totalCookieSize > MAX_COOKIE_SIZE) {
    const response = NextResponse.next({
      request,
    });
    
    // Clear ALL Supabase-related cookies (more aggressive cleanup)
    allCookies.forEach((cookie) => {
      // Match any cookie that starts with sb- (Supabase prefix)
      if (cookie.name.startsWith('sb-')) {
        response.cookies.delete(cookie.name);
      }
    });
    
    return response;
  }

  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value));
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // Refresh session if expired - required for Server Components
  await supabase.auth.getUser();

  return supabaseResponse;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};

