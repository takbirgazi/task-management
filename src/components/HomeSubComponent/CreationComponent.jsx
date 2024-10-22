"use client"
import styles from "@/styles/creationComponent.module.css"
import Link from "next/link";
const CreationComponent = () => {
    return (
        <div className={styles.searchAndNewTask}>
            <div>
                <input type="text" placeholder="Search..." />
                <input type="text" placeholder="Tags..." />
            </div>

            <div className={styles.filterAndNewTask}>
                <div>
                    <select name="" id="">
                        <option value="All">All</option>
                        <option value="Completed">Completed</option>
                        <option value="Pending">Pending</option>
                    </select>
                    <select name="" id="" >
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                    <Link href="/addtask" className={styles.addNewTask}>New Task</Link>
                </div>
            </div>
        </div>
    );
};

export default CreationComponent;