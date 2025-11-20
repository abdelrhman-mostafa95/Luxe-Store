'use client';

import Link from 'next/link';
import { ShoppingBag, User } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import styles from './Navbar.module.css';

export default function Navbar() {
    const { totalItems, setIsOpen } = useCart();

    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo}>
                    LuxeStore
                </Link>

                <div className={styles.actions}>
                    <Link href="/admin" className={styles.iconBtn} title="Admin Dashboard">
                        <User size={20} />
                    </Link>
                    <button
                        className={styles.cartBtn}
                        onClick={() => setIsOpen(true)}
                    >
                        <ShoppingBag size={20} />
                        {totalItems > 0 && <span className={styles.badge}>{totalItems}</span>}
                    </button>
                </div>
            </div>
        </nav>
    );
}
