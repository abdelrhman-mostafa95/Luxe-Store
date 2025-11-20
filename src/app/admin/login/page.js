import { loginAdmin } from '@/lib/auth';
import { redirect } from 'next/navigation';
import styles from './page.module.css';

export default function AdminLogin() {
    async function login(formData) {
        'use server';
        const password = formData.get('password');
        if (password === 'admin') { // Simple hardcoded check
            await loginAdmin();
            redirect('/admin');
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>Admin Access</h1>
                <form action={login} className={styles.form}>
                    <div className={styles.field}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="input"
                            placeholder="Enter admin password"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Login to Dashboard
                    </button>
                </form>
                <p className={styles.hint}>Hint: password is 'admin'</p>
            </div>
        </div>
    );
}
