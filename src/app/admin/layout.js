import Link from 'next/link';
import { LayoutDashboard, Package, LogOut } from 'lucide-react';
import { logoutAdmin } from '@/lib/auth';
import { redirect } from 'next/navigation';
import styles from './layout.module.css';

export default function AdminLayout({ children }) {
    async function logout() {
        'use server';
        await logoutAdmin();
        redirect('/admin/login');
    }

    return (
        <div className={styles.layout}>
            <aside className={styles.sidebar}>
                <div className={styles.logo}>Admin Panel</div>
                <nav className={styles.nav}>
                    <Link href="/admin" className={styles.link}>
                        <LayoutDashboard size={20} />
                        Dashboard
                    </Link>
                    <Link href="/admin" className={styles.link}>
                        <Package size={20} />
                        Products
                    </Link>
                </nav>
                <div className={styles.footer}>
                    <form action={logout}>
                        <button type="submit" className={styles.logoutBtn}>
                            <LogOut size={20} />
                            Logout
                        </button>
                    </form>
                </div>
            </aside>
            <main className={styles.main}>
                {children}
            </main>
        </div>
    );
}
