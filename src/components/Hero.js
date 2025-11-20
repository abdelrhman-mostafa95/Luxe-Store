'use client';

import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Elevate Your <span className={styles.highlight}>Lifestyle</span>
                </h1>
                <p className={styles.subtitle}>
                    Discover a curated collection of premium essentials designed for the modern professional. Quality, style, and function in perfect harmony.
                </p>
                <div className={styles.actions}>
                    <Link href="#products" className="btn btn-primary">
                        Shop Collection
                    </Link>
                    <Link href="#about" className="btn btn-outline">
                        Learn More
                    </Link>
                </div>
            </div>
            <div className={styles.background} />
        </section>
    );
}
