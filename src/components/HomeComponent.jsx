"use client"
import styles from "@/styles/homeComponent.module.css";
import CreationComponent from "./HomeSubComponent/CreationComponent";
import TasksList from "./HomeSubComponent/TasksList";
const HomeComponent = () => {
    return (
        <div className={styles.homeCompMainDiv}>
            <div className={styles.SearchAndNewTaskDiv}>
                <CreationComponent />
            </div>
            <div className={styles.taskListDiv}>
                <TasksList />
            </div>
        </div>
    );
};

export default HomeComponent;