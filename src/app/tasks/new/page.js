import AppShell from "@/components/AppShell";
import TaskForm from "@/components/TaskForm";

export default function NewTaskPage() {
  return (
    <AppShell
      activeView="active"
      title="Create a task"
      description="Add a new task to your active-task list."
    >
      <section
        className="task-section"
        aria-labelledby="create-task-heading"
      >
        <h3 id="create-task-heading">Task details</h3>

        <p className="section-introduction">
          Title, topic and due date are required.
          Description is optional.
        </p>

        <TaskForm />
      </section>
    </AppShell>
  );
}