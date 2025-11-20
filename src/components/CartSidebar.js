'use client';

import Link from 'next/link';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import styles from './CartSidebar.module.css';

export default function CartSidebar() {
    const { cart, isOpen, setIsOpen, updateQuantity, removeFromCart, totalPrice } = useCart();

    if (!isOpen) return null;

    return (
        <>
            <div className={styles.overlay} onClick={() => setIsOpen(false)} />
            <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
                <div className={styles.header}>
                    <h2>Your Cart</h2>
                    <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
                        <X size={24} />
                    </button>
                </div>

                <div className={styles.content}>
                    {cart.length === 0 ? (
                        <div className={styles.empty}>
                            <p>Your cart is empty</p>
                        </div>
                    ) : (
                        <div className={styles.items}>
                            {cart.map((item) => (
                                <div key={item.id} className={styles.item}>
                                    <div className={styles.itemInfo}>
                                        <h3>{item.name}</h3>
                                        <p className={styles.price}>${item.price.toFixed(2)}</p>
                                    </div>
                                    <div className={styles.controls}>
                                        <div className={styles.quantity}>
                                            <button onClick={() => updateQuantity(item.id, -1)}>
                                                <Minus size={16} />
                                            </button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item.id, 1)}>
                                                <Plus size={16} />
                                            </button>
                                        </div>
                                        <button
                                            className={styles.removeBtn}
                                            onClick={() => removeFromCart(item.id)}
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className={styles.footer}>
                    <div className={styles.total}>
                        <span>Total</span>
                        <span>${totalPrice.toFixed(2)}</span>
                    </div>
                    <Link
                        href="/checkout"
                        className="btn btn-primary"
                        style={{ width: '100%', textAlign: 'center' }}
                        onClick={() => setIsOpen(false)}
                    >
                        Checkout
                    </Link>
                </div>
            </div>
        </>
    );
}
