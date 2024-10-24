import { useState, useEffect } from 'react';
import styles from "@/styles/addTaskComponent.module.css"; // Design Will be same
import Link from 'next/link';

const EditTaskComponent = ({ singleTask }) => {
    const [task, setTask] = useState({
        title: singleTask?.title || '',
        description: singleTask?.description || '',
        dueDate: singleTask?.dueDate || '',
        tags: singleTask?.tags || '',
        category: singleTask?.category || 'Work',
        priorityLevel: singleTask?.priorityLevel || 'Low',
        completed: singleTask?.completed || false,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (singleTask) {
            setTask({
                title: singleTask.title,
                description: singleTask.description,
                dueDate: singleTask.dueDate,
                tags: singleTask.tags,
                category: singleTask.category,
                priorityLevel: singleTask.priorityLevel,
                completed: singleTask.completed,
            });
        }
    }, [singleTask]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask({ ...task, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage('');
        setSuccessMessage('');

        try {
            const response = await fetch(`/api/tasks/${singleTask._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(task),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccessMessage('Task updated successfully!');
            } else {
                setErrorMessage(data.message || 'Something went wrong');
            }
        } catch (error) {
            setErrorMessage('Failed to update task. Please try again.');
        }

        setIsSubmitting(false);
    };

    return (
        <div className={styles.container}>
            <h1>Update Your Task</h1>
            {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
            {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}

            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="title">Task Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={task.title}
                        onChange={handleChange}
                        required
                        className={styles.input}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="description">Task Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={task.description}
                        onChange={handleChange}
                        required
                        className={styles.textarea}
                    ></textarea>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="dueDate">Due Date</label>
                    <input
                        type="date"
                        id="dueDate"
                        name="dueDate"
                        value={task.dueDate}
                        onChange={handleChange}
                        required
                        className={styles.input}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="tags">Category Tags</label>
                    <input
                        type="text"
                        id="tags"
                        name="tags"
                        value={task.tags}
                        onChange={handleChange}
                        required
                        className={styles.input}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="category">Category</label>
                    <div className={styles.categoryRadioBtn}>
                        <div>
                            <input
                                type="radio"
                                id="personal"
                                name="category"
                                value="Personal"
                                checked={task.category === 'Personal'}
                                onChange={handleChange}
                            />
                            <label htmlFor="personal">Personal</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="work"
                                name="category"
                                value="Work"
                                checked={task.category === 'Work'}
                                onChange={handleChange}
                            />
                            <label htmlFor="work">Work</label>
                        </div>
                    </div>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="priorityLevel">Priority Level</label>
                    <select
                        className={styles.select}
                        name="priorityLevel"
                        id="priorityLevel"
                        value={task.priorityLevel}
                        onChange={handleChange}
                    >
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </div>

                <div>
                    <Link href="/" className={styles.cancelButton}>Cancel</Link>
                    <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                        {isSubmitting ? 'Updating...' : 'Update Task'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditTaskComponent;
