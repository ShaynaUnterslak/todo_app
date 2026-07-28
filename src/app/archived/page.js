import AppShell from "@/components/AppShell";

export default function ArchivedTasksPage() {
  return (
    <AppShell
      activeView="archived"
      title="Archived tasks"
      description="Archived tasks remain viewable and are never permanently deleted"
    >
      <div className="empty-state">
        <h3>No archived tasks</h3>
        <p>There are currently no archived tasks to display.</p>
      </div>
    </AppShell>
  );
}