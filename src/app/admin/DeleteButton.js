'use client';

import { Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

export default function DeleteButton({ id }) {
    const router = useRouter();

    async function handleDelete() {
        if (!confirm('Are you sure you want to delete this product?')) return;

        try {
            const res = await fetch(`/api/products/${id}`, {
                method: 'DELETE',
            });

            if (res.ok) {
                router.refresh();
            } else {
                alert('Failed to delete');
            }
        } catch (error) {
            console.error(error);
            alert('Error deleting product');
        }
    }

    return (
        <button
            type="button"
            onClick={(e) => {
                e.stopPropagation();
                handleDelete();
            }}
            className={`${styles.iconBtn} ${styles.deleteBtn}`}
        >
            <Trash2 size={18} />
        </button>
    );
}
