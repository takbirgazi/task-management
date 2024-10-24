"use client";

import styles from "@/styles/tasksList.module.css";
import TaskTable from "./TaskTable";
import { useEffect, useState } from "react";
import CreationComponent from "./CreationComponent";

const TasksList = () => {
    const [completedTasks, setCompletedTasks] = useState([]);
    const [incompleteTasks, setIncompleteTasks] = useState([]);

    const [search, setSearch] = useState('');
    const [tags, setTags] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');
    const [priorityFilter, setPriorityFilter] = useState('');

    useEffect(() => {
        fetch("/api/tasks")
            .then(res => res.json())
            .then(data => {
                const completed = data.filter(task => task.completed === true);
                const incomplete = data.filter(task => task.completed === false);

                setCompletedTasks(completed);
                setIncompleteTasks(incomplete);
            })
            .catch(error => console.error('Error fetching tasks:', error));
    }, []);

    const handleSearch = (tasks) => {
        return tasks.filter(task =>
            task.title.toLowerCase().includes(search.toLowerCase()) &&
            task.tags.toLowerCase().includes(tags.toLowerCase()) &&
            (statusFilter === 'All' || (statusFilter === 'Completed' ? task.completed : !task.completed)) &&
            (priorityFilter === '' || task.priorityLevel === priorityFilter)
        );
    };

    return (
        <div className={styles.tasksList}>
            <CreationComponent
                search={search}
                setSearch={setSearch}
                tags={tags}
                setTags={setTags}
                statusFilter={statusFilter}
                setStatusFilter={setStatusFilter}
                priorityFilter={priorityFilter}
                setPriorityFilter={setPriorityFilter}
            />

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
                    <TaskTable tasks={handleSearch(incompleteTasks)} setTasks={setIncompleteTasks} />
                    {/* Completed Tasks Table */}
                    <TaskTable tasks={handleSearch(completedTasks)} setTasks={setCompletedTasks} />
                </table>
            </div>
        </div>
    );
};

export default TasksList;
