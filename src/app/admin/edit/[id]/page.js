import { getProductById, updateProduct } from '@/lib/db';
import { redirect } from 'next/navigation';
import styles from '../../add/page.module.css'; // Reuse styles

export default async function EditProduct({ params }) {
    const { id } = await params;
    const product = await getProductById(id);

    if (!product) {
        return <div>Product not found</div>;
    }

    async function update(formData) {
        'use server';

        const updates = {
            name: formData.get('name'),
            price: parseFloat(formData.get('price')),
            category: formData.get('category'),
            description: formData.get('description'),
            image: formData.get('image'),
        };

        await updateProduct(id, updates);
        redirect('/admin');
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Edit Product</h1>
            <form action={update} className={styles.form}>
                <div className={styles.grid}>
                    <div className={styles.field}>
                        <label htmlFor="name">Product Name</label>
                        <input type="text" name="name" id="name" defaultValue={product.name} className="input" required />
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="price">Price ($)</label>
                        <input type="number" name="price" id="price" step="0.01" defaultValue={product.price} className="input" required />
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="category">Category</label>
                        <input type="text" name="category" id="category" defaultValue={product.category} className="input" required />
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="image">Image URL</label>
                        <input type="url" name="image" id="image" defaultValue={product.image} className="input" />
                    </div>
                </div>

                <div className={styles.field}>
                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description" rows="4" defaultValue={product.description} className="input" required></textarea>
                </div>

                <div className={styles.actions}>
                    <button type="submit" className="btn btn-primary">Update Product</button>
                </div>
            </form>
        </div>
    );
}
