"use client"

import "@/styles/global.css";
import { useEffect, useState } from "react";
import SingleTaskComponent from "@/components/SingleTaskComponent";

const SingleTask = ({ params }) => {
    const taskId = params.id;
    const [task, setTask] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTask = async () => {
            try {
                const res = await fetch(`/api/tasks`);
                if (!res.ok) {
                    throw new Error('Failed to fetch task');
                }
                const data = await res.json();
                setTask(data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        if (taskId) {
            fetchTask();
        }
    }, [taskId]);

    if (loading) {
        return <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }} className="bodyBackground">
            <p>Loading...</p>
        </div>
    }

    if (error) {
        return <main className="bodyBackground"> <p >Error: {error}</p> </main>;
    }

    return (
        <main className="bodyBackground">
            <SingleTaskComponent task={task} />
        </main>
    );
};

export default SingleTask;