import React from 'react';
import styles from "@/styles/tasksList.module.css"

const TaskTable = ({ tasks }) => {
    return (
        <div className={styles.tableContainer}>
            <table className={styles.responsiveTable}>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Due Date</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task, index) => (
                        <tr key={index} className={task?.priority == "High" && styles.statusHigh || task?.priority == "Medium" && styles.statusMedium || task?.priority == "Low" && styles.statusLow}>
                            <td data-label="Title">{task.title}</td>
                            <td data-label="Description">{task.description}</td>
                            <td data-label="Status">{task.completed ? 'Completed' : 'Pending'}</td>
                            <td data-label="Due Date">{task.dueDate ? new Date(task.dueDate).toLocaleDateString() : 'No due date'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TaskTable;