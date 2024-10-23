import React from 'react';
import styles from "@/styles/tasksList.module.css"
import Image from 'next/image';
import deleteIcon from "@/public/icons/delete.png"
import editIcon from "@/public/icons/edit.png"
import viewIcon from "@/public/icons/view.png"
import completeIcon from "@/public/icons/complete.png"
import Link from 'next/link';

const TaskTable = ({ tasks }) => {
    return (
        <tbody>
            {tasks.map((task, index) => (
                <tr key={index} className={`${task?.priority == "High" && styles.statusHigh || task?.priority == "Medium" && styles.statusMedium || task?.priority == "Low" && styles.statusLow} ${task?.completed && styles.completeTask}`}>

                    <td>
                        {
                            (task?.title?.length > 20) ?
                                task?.title?.slice(0, 20) + "..." :
                                task?.title
                        }
                    </td>
                    <td>
                        {task?.dueDate ? new Date(task?.dueDate).toLocaleDateString() : 'No due date'}
                    </td>
                    <td>
                        {
                            (task?.description?.length > 25) ?
                                task?.description.slice(0, 25) + "..." :
                                task?.description
                        }
                    </td>
                    <td>
                        {task?.completed ? 'Completed' : 'Pending'}
                    </td>
                    <td>
                        <div className={styles.actionButtonTd}>
                            <button className={styles.button}>
                                <Link href={`/task/${task.id}`} title='View'>
                                    <figure>
                                        <Image className={styles.actionBtn} src={viewIcon} alt='View' />
                                    </figure>
                                </Link>
                            </button>
                            <button className={styles.button}>
                                <Link href="/edittask" title='Edit'>
                                    <figure>
                                        <Image className={styles.actionBtn} src={editIcon} alt='Edit' />
                                    </figure>
                                </Link>
                            </button>
                            <button title='Delete' className={styles.button}>
                                <figure>
                                    <Image className={styles.actionBtn} src={deleteIcon} alt='Delete' />
                                </figure>
                            </button>
                            {
                                task?.completed ? null : <button title='Mark as Complete' className={styles.button}>
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