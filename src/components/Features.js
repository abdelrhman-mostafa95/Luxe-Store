import { Truck, ShieldCheck, Clock } from 'lucide-react';
import styles from './Features.module.css';

const features = [
    {
        icon: <Truck size={32} />,
        title: "Fast Shipping",
        description: "Free express delivery on all orders over $100. We ship worldwide with premium carriers."
    },
    {
        icon: <ShieldCheck size={32} />,
        title: "Secure Warranty",
        description: "Every product comes with a 2-year comprehensive warranty and 30-day money-back guarantee."
    },
    {
        icon: <Clock size={32} />,
        title: "24/7 Support",
        description: "Our dedicated concierge team is available around the clock to assist with any inquiries."
    }
];

export default function Features() {
    return (
        <section className={styles.features} id="about">
            <div className={styles.grid}>
                {features.map((feature, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.icon}>{feature.icon}</div>
                        <h3 className={styles.title}>{feature.title}</h3>
                        <p className={styles.description}>{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
