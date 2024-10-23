import clientPromise from '@/backend-services/config/db';
import { ObjectId } from 'mongodb';

// GET a tasks
export async function GET(request, { params }) {
    try {
        const { id } = params;
        const client = await clientPromise;
        const db = client.db('taskManagementDB');
        const tasks = await db.collection('tasks').findOne({ _id: new ObjectId(id) });
        return new Response(JSON.stringify(tasks), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ message: error.message }), { status: 500 });
    }
}

// PATCH to update a task's completion status
export async function PATCH(request, { params }) {
    try {
        const { id } = params;

        const client = await clientPromise;
        const db = client.db('taskManagementDB');

        // Find the task and update the `complete` field to false
        const result = await db.collection('tasks').updateOne(
            { _id: new ObjectId(id) }, // Find task where `complete` is true
            { $set: { completed: true } } // Set `complete` to false
        );

        // Check if the task was found and updated
        if (result.matchedCount === 0) {
            return new Response(JSON.stringify({ message: 'Task not found or already marked as incomplete' }), { status: 404 });
        }

        // Successfully updated the task
        return new Response(JSON.stringify({ message: 'Task updated successfully', success: true }), { status: 200 });
    } catch (error) {
        // Handle unexpected server errors
        return new Response(JSON.stringify({ message: 'An error occurred', error: error.message }), { status: 500 });
    }
}

// DELETE a task
export async function DELETE(request, { params }) {
    try {
        const { id } = params; // Get task ID from the route parameters
        const client = await clientPromise;
        const db = client.db('taskManagementDB');

        // Attempt to delete the task with the provided ID
        const result = await db.collection('tasks').deleteOne({ _id: new ObjectId(id) });

        // Check if a task was deleted
        if (result.deletedCount === 0) {
            return new Response(JSON.stringify({ message: 'Task not found or already deleted' }), { status: 404 });
        }

        // Successfully deleted the task
        return new Response(JSON.stringify({ message: 'Task deleted successfully', success: true }), { status: 200 });
    } catch (error) {
        // Handle unexpected server errors
        return new Response(JSON.stringify({ message: 'An error occurred', error: error.message }), { status: 500 });
    }
}