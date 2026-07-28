import { connection } from "next/server";
import AppShell from "@/components/AppShell";
import ArchivedTaskList from "@/components/ArchivedTaskList";
import SortControls from "@/components/SortControls";
import { getArchivedTasks } from "@/lib/tasks";
import { normaliseSortOptions } from "@/lib/taskRules";

export default async function ArchivedTasksPage({
  searchParams,
}) {
  await connection();

  const resolvedSearchParams =
    (await searchParams) || {};

  const sortOptions = normaliseSortOptions({
    sortBy: resolvedSearchParams.sort,
    direction: resolvedSearchParams.direction,
  });

  const tasks = getArchivedTasks(sortOptions);

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

        <SortControls
          action="/archived"
          sortBy={sortOptions.sortBy}
          direction={sortOptions.direction}
        />

        <ArchivedTaskList tasks={tasks} />
      </section>
    </AppShell>
  );
}