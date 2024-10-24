"use client"

import styles from '@/styles/error.module.css';

export default function ErrorPage() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>404</h1>
            <p className={styles.message}>Oops! The page you are looking for does not exist.</p>
            <a href="/" className={styles.homeLink}>Go back to Home</a>
        </div>
    );
}