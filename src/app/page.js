import { connection } from "next/server";
import AppShell from "@/components/AppShell";
import SortControls from "@/components/SortControls";
import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";
import { getActiveTasks } from "@/lib/tasks";
import { normaliseSortOptions } from "@/lib/taskRules";

export default async function Home({ searchParams }) {
  await connection();

  const resolvedSearchParams =
    (await searchParams) || {};

  const sortOptions = normaliseSortOptions({
    sortBy: resolvedSearchParams.sort,
    direction: resolvedSearchParams.direction,
  });

  const tasks = getActiveTasks(sortOptions);

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
        <h3 id="create-task-heading">
          Create a task
        </h3>

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
            <h3 id="task-list-heading">
              Your tasks
            </h3>

            <p className="section-introduction">
              Overdue tasks are labelled separately
              from their task status.
            </p>
          </div>

          <p className="task-count">
            {tasks.length}{" "}
            {tasks.length === 1 ? "task" : "tasks"}
          </p>
        </div>

        <SortControls
          action="/"
          sortBy={sortOptions.sortBy}
          direction={sortOptions.direction}
        />

        <TaskList tasks={tasks} />
      </section>
    </AppShell>
  );
}