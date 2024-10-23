"use client"

import styles from "@/styles/tasksList.module.css"
import TaskTable from "./TaskTable";
const TasksList = () => {
    const tasks = [
        { id: 1, title: 'Task 1', priority: "High", description: 'Description 1', completed: false, dueDate: '2024-11-01' },
        { id: 2, title: 'Task 2', priority: "Low", description: 'Description 2', completed: true, dueDate: '2024-10-22' },
        { id: 3, title: 'loremloremloremloremloremloremloremloremloremloremloremlorem', priority: "Medium", description: 'Description 2', completed: true, dueDate: '2024-10-22' },
        { id: 4, title: 'Task 2', priority: "Low", description: 'loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem', completed: true, dueDate: '2024-10-22' },
        { id: 5, title: 'Task 2', priority: "High", description: 'Description 2', completed: true, dueDate: '2024-10-22' },
    ];
    return (
        <div className={styles.tasksList}>
            <div>
                <h3>Your Tasks</h3>
            </div>
            <div className={styles.tableContainer}>
                <table className={styles.responsiveTable}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Due Date</th>
                            <th>Tags</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {/* Table Data Showing Here  */}
                    <TaskTable tasks={tasks} />
                    <TaskTable tasks={tasks} />
                </table>
            </div>
        </div>
    );
};

export default TasksList;