import { useState } from 'react';
import styles from "@/styles/addTaskComponent.module.css";
import Link from 'next/link';

const AddTaskComponent = () => {
    const [task, setTask] = useState({
        title: '',
        description: '',
        dueDate: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask({ ...task, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(task),
            });

            const data = await response.json();
            if (response.ok) {
                setSuccessMessage('Task created successfully!');
                setTask({ title: '', description: '', dueDate: '' });
            } else {
                setErrorMessage(data.message || 'Something went wrong');
            }
        } catch (error) {
            setErrorMessage('Failed to create task. Please try again.');
        }

        setIsSubmitting(false);
    };

    return (
        <div className={styles.container}>
            <h1>Create a New Task</h1>
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
                        placeholder='Write Task Name'
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
                        placeholder='Write Task Description'
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
                        className={styles.input}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="categoryTags">Category Tags</label>
                    <input
                        type="text"
                        id="categoryTags"
                        name="categoryTags"
                        value={task.categoryTags}
                        onChange={handleChange}
                        required
                        className={styles.input}
                        placeholder='Write Task Category Tags'
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="priorityLevel">Priority Level</label>
                    <select className={styles.select} name="priorityLevel" id="priorityLevel" >
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </div>

                <div>
                    <Link href="/" className={styles.cancelButton}>Cancel</Link>
                    <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                        {isSubmitting ? 'Creating...' : 'Create Task'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddTaskComponent;
