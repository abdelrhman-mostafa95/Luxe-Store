import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import styles from '../page.module.css'; // Reuse checkout styles for container

export default function SuccessPage() {
    return (
        <div className={styles.emptyContainer}>
            <CheckCircle size={64} color="var(--success)" />
            <h1>Order Placed Successfully!</h1>
            <p style={{ color: '#888' }}>Thank you for your purchase. You will receive an email confirmation shortly.</p>
            <Link href="/" className="btn btn-primary">Return Home</Link>
        </div>
    );
}
