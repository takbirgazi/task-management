"use client"
import styles from "@/styles/homeComponent.module.css";
const HomeComponent = () => {
    return (
        <div className={styles.homeCompMainDiv}>
            <div>
                <div className={styles.searchAndNewTask}>
                    <input type="text" placeholder="Search..." />
                    <button>Filter</button>
                    <button>Search</button>
                    <button>New Task</button>
                </div>
            </div>
        </div>
    );
};

export default HomeComponent;