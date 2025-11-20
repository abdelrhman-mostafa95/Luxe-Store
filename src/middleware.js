import { NextResponse } from 'next/server';

export function middleware(request) {
    const isAdminRoute = request.nextUrl.pathname.startsWith('/admin');
    const isLoginRoute = request.nextUrl.pathname === '/admin/login';

    // Simple check for admin cookie
    const adminSession = request.cookies.get('admin_session');
    const isAuthenticated = adminSession?.value === 'super_secret_admin_token';

    if (isAdminRoute && !isLoginRoute && !isAuthenticated) {
        return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    if (isLoginRoute && isAuthenticated) {
        return NextResponse.redirect(new URL('/admin', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/admin/:path*',
};
