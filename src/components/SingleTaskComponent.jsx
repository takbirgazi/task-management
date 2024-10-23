import styles from "@/styles/singleTaskComponent.module.css";

const SingleTaskComponent = ({ task }) => {

    const { name } = task;

    return (
        <div className={styles.container}>
            {task ? (
                <div className={styles.taskBox}>
                    <h1 className={styles.title}>dsfgfgfsdgg</h1>
                    <p className={styles.description}>gadgfadg</p>
                    <p className={styles.dueDate}>
                        Due Date: {task?.dueDate ? new Date(task?.dueDate).toLocaleDateString() : 'No due date'}
                    </p>
                    <p className={styles.status}>
                        Status: {task?.completed ? 'Completed' : 'Pending'}
                    </p>
                </div>
            ) : (
                <p>No task found.</p>
            )}
        </div>
    );
};

export default SingleTaskComponent;