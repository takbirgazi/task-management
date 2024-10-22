"use client"
import styles from "@/styles/creationComponent.module.css"
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
                        <option value="Status">All</option>
                        <option value="Status">Completed</option>
                        <option value="Status">Pending</option>
                    </select>
                    <select name="" id="" >
                        <option value="Status">Low</option>
                        <option value="Status">Medium</option>
                        <option value="Status">High</option>
                    </select>
                    <button>New Task</button>
                </div>
            </div>
        </div>
    );
};

export default CreationComponent;