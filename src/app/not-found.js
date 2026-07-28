import Link from "next/link";
import AppShell from "@/components/AppShell";

export default function NotFoundPage() {
  return (
    <AppShell
      activeView=""
      title="Task not found"
      description="The requested task does not exist or is no longer available for editing."
    >
      <div className="empty-state">
        <h3>Unable to open this task</h3>

        <p>
          Return to the active-task list and select
          another task.
        </p>

        <Link href="/" className="primary-link">
          Return to active tasks
        </Link>
      </div>
    </AppShell>
  );
}