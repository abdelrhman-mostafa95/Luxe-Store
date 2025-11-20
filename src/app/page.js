import ProductCard from '@/components/ProductCard';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Newsletter from '@/components/Newsletter';
import { getProducts } from '@/lib/db';
import styles from './page.module.css';

export default async function Home() {
  const products = await getProducts();

  return (
    <div className={styles.page}>
      <Hero />

      <Features />

      <section id="products" className={styles.productsSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Featured Collection</h2>
          <p className={styles.sectionSubtitle}>Handpicked for the discerning individual.</p>
        </div>

        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
