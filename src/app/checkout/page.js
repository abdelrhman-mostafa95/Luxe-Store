'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from './page.module.css';

export default function CheckoutPage() {
    const { cart, totalPrice, clearCart } = useCart();
    const router = useRouter();
    const [isProcessing, setIsProcessing] = useState(false);

    if (cart.length === 0) {
        return (
            <div className={styles.emptyContainer}>
                <h1>Your cart is empty</h1>
                <Link href="/" className="btn btn-primary">Continue Shopping</Link>
            </div>
        );
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setIsProcessing(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));

        clearCart();
        router.push('/checkout/success');
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Checkout</h1>

            <div className={styles.grid}>
                <div className={styles.formSection}>
                    <h2>Shipping Details</h2>
                    <form id="checkout-form" onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.row}>
                            <div className={styles.field}>
                                <label>First Name</label>
                                <input type="text" className="input" required />
                            </div>
                            <div className={styles.field}>
                                <label>Last Name</label>
                                <input type="text" className="input" required />
                            </div>
                        </div>

                        <div className={styles.field}>
                            <label>Address</label>
                            <input type="text" className="input" required />
                        </div>

                        <div className={styles.row}>
                            <div className={styles.field}>
                                <label>City</label>
                                <input type="text" className="input" required />
                            </div>
                            <div className={styles.field}>
                                <label>Postal Code</label>
                                <input type="text" className="input" required />
                            </div>
                        </div>

                        <div className={styles.field}>
                            <label>Country</label>
                            <select className="input" required>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="UK">United Kingdom</option>
                            </select>
                        </div>
                    </form>
                </div>

                <div className={styles.summarySection}>
                    <div className={styles.summaryCard}>
                        <h2>Order Summary</h2>
                        <div className={styles.items}>
                            {cart.map((item) => (
                                <div key={item.id} className={styles.item}>
                                    <span>{item.name} x {item.quantity}</span>
                                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                            ))}
                        </div>
                        <div className={styles.total}>
                            <span>Total</span>
                            <span>${totalPrice.toFixed(2)}</span>
                        </div>
                        <button
                            type="submit"
                            form="checkout-form"
                            className="btn btn-primary"
                            style={{ width: '100%', marginTop: '1rem' }}
                            disabled={isProcessing}
                        >
                            {isProcessing ? 'Processing...' : 'Place Order'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
