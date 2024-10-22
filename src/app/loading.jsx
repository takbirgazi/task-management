"use client"

import styles from '@/styles/loading.module.css';
import Image from 'next/image';
import spinnerIcon from "@/public/icons/spinner.gif"

const LoadingPage = () => {
    return (
        <div className={styles.loading}>
            <figure>
                <Image className={styles.spinner} src={spinnerIcon} alt='Spinner' />
            </figure>
        </div>
    );
};

export default LoadingPage;