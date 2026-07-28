import Link from "next/link";
import { connection } from "next/server";
import AppShell from "@/components/AppShell";
import SortControls from "@/components/SortControls";
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
      description="View and manage your active tasks."
    >
      <section
        className="task-section"
        aria-labelledby="task-list-heading"
      >
        <div className="task-list-heading">
          <div>
            <h3 id="task-list-heading">Your tasks</h3>

            <p className="section-introduction">
              Overdue tasks are labelled separately
              from their task status.
            </p>
          </div>

          <div className="list-header-actions">
            <p className="task-count">
              {tasks.length}{" "}
              {tasks.length === 1 ? "task" : "tasks"}
            </p>

            <Link
              href="/tasks/new"
              className="primary-link create-task-link"
            >
              Create task
            </Link>
          </div>
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