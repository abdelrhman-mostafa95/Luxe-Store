'use client';

import Image from 'next/image';
import { Plus } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
    const { addToCart } = useCart();

    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <div className={styles.content}>
                <div className={styles.info}>
                    <p className={styles.category}>{product.category}</p>
                    <h3 className={styles.name}>{product.name}</h3>
                    <p className={styles.price}>${product.price.toFixed(2)}</p>
                </div>
                <button
                    className={styles.addBtn}
                    onClick={() => addToCart(product)}
                    aria-label="Add to cart"
                >
                    <Plus size={20} />
                </button>
            </div>
        </div>
    );
}
