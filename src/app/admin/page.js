import Link from 'next/link';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import { getProducts } from '@/lib/db';
import DeleteButton from './DeleteButton'; // Client component for interactivity
import styles from './page.module.css';

export default async function AdminDashboard() {
    const products = await getProducts();

    return (
        <div className={styles.dashboard}>
            <div className={styles.header}>
                <h1>Products</h1>
                <Link href="/admin/add" className="btn btn-primary">
                    <Plus size={20} />
                    Add Product
                </Link>
            </div>

            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>
                                    <span className={styles.badge}>{product.category}</span>
                                </td>
                                <td>${product.price.toFixed(2)}</td>
                                <td>
                                    <div className={styles.actions}>
                                        <Link href={`/admin/edit/${product.id}`} className={styles.iconBtn}>
                                            <Pencil size={18} />
                                        </Link>
                                        <DeleteButton id={product.id} />
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {products.length === 0 && (
                            <tr>
                                <td colSpan="4" className={styles.empty}>No products found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
