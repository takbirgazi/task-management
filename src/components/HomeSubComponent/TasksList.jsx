"use client"

import styles from "@/styles/tasksList.module.css"
import TaskTable from "./TaskTable";
const TasksList = () => {
    const tasks = [
        { title: 'Task 1', priority: "High", description: 'Description 1', completed: false, dueDate: '2024-11-01' },
        { title: 'Task 2', priority: "Low", description: 'Description 2', completed: true, dueDate: '2024-10-22' },
        { title: 'Task 2', priority: "Medium", description: 'Description 2', completed: true, dueDate: '2024-10-22' },
        { title: 'Task 2', priority: "Low", description: 'Description 2', completed: true, dueDate: '2024-10-22' },
        { title: 'Task 2', priority: "High", description: 'Description 2', completed: true, dueDate: '2024-10-22' },
    ];
    return (
        <div className={styles.tasksList}>
            <div>
                <h4>Your Tasks</h4>
            </div>
            <TaskTable tasks={tasks} />
        </div>
    );
};

export default TasksList;