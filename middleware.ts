import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Continue with the request as normal - we'll handle authentication in the individual pages
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    // Skip all static files
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}; 