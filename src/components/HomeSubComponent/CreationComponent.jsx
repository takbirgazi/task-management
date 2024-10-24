"use client";
import styles from "@/styles/creationComponent.module.css";
import Link from "next/link";

const CreationComponent = ({ search, setSearch, tags, setTags, statusFilter, setStatusFilter, priorityFilter, setPriorityFilter }) => {
    return (
        <div className={styles.searchAndNewTask}>
            <div>
                <input 
                    type="text" 
                    placeholder="Search..." 
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)} 
                />
                <input 
                    type="text" 
                    placeholder="Tags..." 
                    value={tags} 
                    onChange={(e) => setTags(e.target.value)} 
                />
            </div>

            <div className={styles.filterAndNewTask}>
                <div>
                    <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                        <option value="All">All</option>
                        <option value="Completed">Completed</option>
                        <option value="Pending">Pending</option>
                    </select>
                    <select value={priorityFilter} onChange={(e) => setPriorityFilter(e.target.value)}>
                        <option value="">All Priorities</option>
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