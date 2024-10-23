"use client";

import styles from "@/styles/tasksList.module.css";
import TaskTable from "./TaskTable";
import { useEffect, useState } from "react";

const TasksList = () => {
    const [completedTasks, setCompletedTasks] = useState([]);
    const [incompleteTasks, setIncompleteTasks] = useState([]);

    useEffect(() => {
        fetch("/api/tasks")
            .then(res => res.json())
            .then(data => {
                // Separate the tasks based on the `completed` status
                const completed = data.filter(task => task.completed === true);
                const incomplete = data.filter(task => task.completed === false);

                // Update state for both completed and incomplete tasks
                setCompletedTasks(completed);
                setIncompleteTasks(incomplete);
            })
            .catch(error => console.error('Error fetching tasks:', error));
    }, []);

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
                    {/* Incomplete Tasks Table */}
                    <TaskTable tasks={incompleteTasks} setTasks={setIncompleteTasks} />
                    {/* Completed Tasks Table */}
                    <TaskTable tasks={completedTasks} setTasks={setCompletedTasks} />
                </table>
            </div>
        </div>
    );
};

export default TasksList;
