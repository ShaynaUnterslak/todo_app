import { connection } from "next/server";
import AppShell from "@/components/AppShell";
import ArchivedTaskList from "@/components/ArchivedTaskList";
import { getArchivedTasks } from "@/lib/tasks";

export default async function ArchivedTasksPage() {
  await connection();

  const tasks = getArchivedTasks();

  return (
    <AppShell
      activeView="archived"
      title="Archived tasks"
      description="Archived tasks remain viewable and are never permanently deleted."
    >
      <section
        className="task-section"
        aria-labelledby="archived-list-heading"
      >
        <div className="task-list-heading">
          <div>
            <h3 id="archived-list-heading">
              Your archived tasks
            </h3>

            <p className="section-introduction">
              Archived tasks are read-only.
            </p>
          </div>

          <p className="task-count">
            {tasks.length}{" "}
            {tasks.length === 1 ? "task" : "tasks"}
          </p>
        </div>

        <ArchivedTaskList tasks={tasks} />
      </section>
    </AppShell>
  );
}