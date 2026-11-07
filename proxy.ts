import {NextResponse, type NextRequest} from 'next/server';

export function proxy(request: NextRequest) {
  const hasSession = request.cookies.has('refreshToken');
  if (!hasSession) {
    return NextResponse.redirect(new URL('/log-in', request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/cart/:path*', '/order/:path*', '/profile/:path*'],
};
