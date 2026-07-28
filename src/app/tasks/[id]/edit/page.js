import { connection } from "next/server";
import { notFound } from "next/navigation";
import AppShell from "@/components/AppShell";
import EditTaskForm from "@/components/EditTaskForm";
import { getTaskById } from "@/lib/tasks";

export default async function EditTaskPage({ params }) {
  await connection();

  const { id } = await params;
  const taskId = Number(id);

  if (!Number.isInteger(taskId) || taskId <= 0) {
    notFound();
  }

  const task = getTaskById(taskId);

  if (!task) {
    notFound();
  }

  return (
    <AppShell
      activeView="active"
      title="Edit task details"
      description="Update the task information below. Status is changed from the active-task list."
    >
      <section
        className="task-section"
        aria-labelledby="edit-task-heading"
      >
        <h3 id="edit-task-heading">
          Edit {task.title}
        </h3>

        <p className="section-introduction">
          Title, topic and due date are required.
          Description is optional.
        </p>

        <EditTaskForm task={task} />
      </section>
    </AppShell>
  );
}