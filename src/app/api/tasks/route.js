import run from '@/backend-services/config/db';

// GET all tasks
export async function GET(request) {
  try {
    const client = await run;
    const db = client.db('taskManagementDB');
    const tasks = await db.collection('tasks').find({}).toArray();
    return new Response(JSON.stringify(tasks), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }), { status: 500 });
  }
}

// POST: Create a new task
export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db('taskManagementDB');
    const body = await request.json();

    const task = await db.collection('tasks').insertOne(body);
    return new Response(JSON.stringify(task.ops[0]), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }), { status: 500 });
  }
}

// PUT: Update a task by ID
export async function PUT(request) {
  const { id } = request.nextUrl.searchParams;
  const body = await request.json();

  try {
    const client = await clientPromise;
    const db = client.db('taskManagementDB');

    const result = await db.collection('tasks').findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: body },
      { returnOriginal: false }
    );
    return new Response(JSON.stringify(result.value), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }), { status: 500 });
  }
}

// DELETE: Delete a task by ID
export async function DELETE(request) {
  const { id } = request.nextUrl.searchParams;

  try {
    const client = await clientPromise;
    const db = client.db('taskManagementDB');

    const result = await db.collection('tasks').deleteOne({ _id: new ObjectId(id) });
    if (!result.deletedCount) {
      return new Response(JSON.stringify({ message: 'Task not found' }), { status: 404 });
    }

    return new Response(JSON.stringify({ message: 'Task deleted' }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }), { status: 500 });
  }
}