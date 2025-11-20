import { addProduct } from '@/lib/db';
import { redirect } from 'next/navigation';
import styles from './page.module.css';

export default function AddProduct() {
    async function create(formData) {
        'use server';

        const product = {
            name: formData.get('name'),
            price: parseFloat(formData.get('price')),
            category: formData.get('category'),
            description: formData.get('description'),
            image: formData.get('image') || 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
        };

        await addProduct(product);
        redirect('/admin');
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Add New Product</h1>
            <form action={create} className={styles.form}>
                <div className={styles.grid}>
                    <div className={styles.field}>
                        <label htmlFor="name">Product Name</label>
                        <input type="text" name="name" id="name" className="input" required />
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="price">Price ($)</label>
                        <input type="number" name="price" id="price" step="0.01" className="input" required />
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="category">Category</label>
                        <input type="text" name="category" id="category" className="input" required />
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="image">Image URL</label>
                        <input type="url" name="image" id="image" className="input" placeholder="https://..." />
                    </div>
                </div>

                <div className={styles.field}>
                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description" rows="4" className="input" required></textarea>
                </div>

                <div className={styles.actions}>
                    <button type="submit" className="btn btn-primary">Create Product</button>
                </div>
            </form>
        </div>
    );
}
