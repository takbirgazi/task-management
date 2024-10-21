"use client"
import styles from "@/styles/homeComponent.module.css";
import CreationComponent from "./HomeSubComponent/CreationComponent";
const HomeComponent = () => {
    return (
        <div className={styles.homeCompMainDiv}>
            <div className={styles.SearchAndNewTaskDiv}>
                <CreationComponent />
            </div>
        </div>
    );
};

export default HomeComponent;