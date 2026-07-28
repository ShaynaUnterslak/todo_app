import { connection } from "next/server";
import AppShell from "@/components/AppShell";
import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";
import { getActiveTasks } from "@/lib/tasks";

export default async function Home() {
  await connection();

  const tasks = getActiveTasks();

  return (
    <AppShell
      activeView="active"
      title="Active tasks"
      description="Create and manage your active tasks."
    >
      <section
        className="task-section"
        aria-labelledby="create-task-heading"
      >
        <h3 id="create-task-heading">Create a task</h3>

        <p className="section-introduction">
          Title, topic and due date are required.
          Description is optional.
        </p>

        <TaskForm />
      </section>

      <section
        className="task-section"
        aria-labelledby="task-list-heading"
      >
        <div className="task-list-heading">
          <div>
            <h3 id="task-list-heading">Your tasks</h3>
            <p className="section-introduction">
              Tasks are currently ordered by due date.
            </p>
          </div>

          <p className="task-count">
            {tasks.length} {tasks.length === 1 ? "task" : "tasks"}
          </p>
        </div>

        <TaskList tasks={tasks} />
      </section>
    </AppShell>
  );
}