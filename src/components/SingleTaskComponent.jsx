"use client"

import styles from "@/styles/singleTaskComponent.module.css";
import Link from "next/link";


const SingleTaskComponent = ({ task }) => {

    const { category, completed, description, dueDate, priorityLevel, tags, title } = task;

    return (
        <div className={styles.container}>
            <div className={styles.homeBtn}>
                <Link href="/" className={styles.button}>Home</Link>
            </div>

            <div className={styles.titleName}>
                <h4>Task Name: {title}</h4>
            </div>
            <div className={`${styles.status}`}>
                <p className={`${priorityLevel == "Low" && styles.statusLow || priorityLevel == "Medium" && styles.statusMedium || priorityLevel == "High" && styles.statusHigh}`}>{completed ? "Complete" : "Pending"}</p>
            </div>
            <div className={styles.dueDate}>
                <p>Due Date: {dueDate}</p>
            </div>
            <div className={styles.description}>
                <p>Description: {description}</p>
            </div>
            <div className={styles.category}>
                <p>Category: {category}</p>
            </div>
            <div className={styles.tags}>
                <p>Tags: {tags}</p>
            </div>
        </div>
    );
};

export default SingleTaskComponent;