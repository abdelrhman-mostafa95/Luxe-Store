'use client';

import styles from './Newsletter.module.css';

export default function Newsletter() {
    return (
        <section className={styles.newsletter}>
            <div className={styles.content}>
                <h2 className={styles.title}>Join the Inner Circle</h2>
                <p className={styles.description}>
                    Subscribe to our newsletter for exclusive access to new drops and member-only offers.
                </p>
                <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className={styles.input}
                        required
                    />
                    <button type="submit" className="btn btn-primary">
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    );
}
