import { cookies } from 'next/headers';

const ADMIN_COOKIE_NAME = 'admin_session';
const ADMIN_SECRET = 'super_secret_admin_token'; // In real app, use env var

export async function isAdmin() {
    const cookieStore = await cookies();
    const session = cookieStore.get(ADMIN_COOKIE_NAME);
    return session?.value === ADMIN_SECRET;
}

export async function loginAdmin() {
    const cookieStore = await cookies();
    // Set cookie for 1 day
    cookieStore.set(ADMIN_COOKIE_NAME, ADMIN_SECRET, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24,
        path: '/',
    });
}

export async function logoutAdmin() {
    const cookieStore = await cookies();
    cookieStore.delete(ADMIN_COOKIE_NAME);
}
