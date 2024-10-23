import React from 'react';
import styles from "@/styles/tasksList.module.css";
import Image from 'next/image';
import deleteIcon from "@/public/icons/delete.png";
import editIcon from "@/public/icons/edit.png";
import viewIcon from "@/public/icons/view.png";
import completeIcon from "@/public/icons/complete.png";
import Link from 'next/link';

const TaskTable = ({ tasks, setTasks }) => {

    // Handler to mark a task as complete
    const handleMarkAsComplete = async (taskId) => {
        try {
            const res = await fetch(`/api/tasks/${taskId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ completed: true }),
            });

            if (res.ok) {
                // Move task to completed list
                setTasks(prevTasks => prevTasks.filter(task => task._id !== taskId));
            }
        } catch (error) {
            console.error('Error marking task as complete:', error);
        }
    };

    // Handler to delete a task
    const handleDeleteTask = async (taskId) => {
        try {
            const res = await fetch(`/api/tasks/${taskId}`, {
                method: 'DELETE',
            });

            if (res.ok) {
                // Remove the task from the local state
                setTasks(prevTasks => prevTasks.filter(task => task._id !== taskId));
            } else {
                console.error('Failed to delete task');
            }
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    return (
        <tbody>
            {tasks.map((task, index) => (
                <tr key={index} className={`${task?.priorityLevel === "High" && styles.statusHigh || task?.priorityLevel === "Medium" && styles.statusMedium || task?.priorityLevel === "Low" && styles.statusLow} ${task?.completed && styles.completeTask}`}>
                    <td>
                        {
                            (task?.title?.length > 20) ?
                                task?.title?.slice(0, 20) + "..." :
                                task?.title
                        }
                    </td>
                    <td>{task?.dueDate || 'No due date'}</td>
                    <td>
                        {
                            task?.tags?.length > 25 ?
                                task?.tags.slice(0, 25) + "..." :
                                task?.tags
                        }
                    </td>
                    <td>{task?.completed ? 'Completed' : 'Pending'}</td>
                    <td>
                        <div className={styles.actionButtonTd}>
                            <button className={styles.button}>
                                <Link href={`/task/${task._id}`} title='View'>
                                    <figure>
                                        <Image className={styles.actionBtn} src={viewIcon} alt='View' />
                                    </figure>
                                </Link>
                            </button>
                            <button className={styles.button}>
                                <Link href={`/edittask/${task._id}`} title='Edit'>
                                    <figure>
                                        <Image className={styles.actionBtn} src={editIcon} alt='Edit' />
                                    </figure>
                                </Link>
                            </button>
                            <button
                                title='Delete'
                                className={styles.button}
                                onClick={() => handleDeleteTask(task._id)} // Trigger the delete handler
                            >
                                <figure>
                                    <Image className={styles.actionBtn} src={deleteIcon} alt='Delete' />
                                </figure>
                            </button>
                            {
                                task?.completed ? null : 
                                <button
                                    onClick={() => handleMarkAsComplete(task._id)} 
                                    title='Mark as Complete' 
                                    className={styles.button}
                                >
                                    <figure>
                                        <Image className={styles.actionBtn} src={completeIcon} alt='Mark as Complete' />
                                    </figure>
                                </button>
                            }
                        </div>
                    </td>
                </tr>
            ))}
        </tbody>
    );
};

export default TaskTable;
