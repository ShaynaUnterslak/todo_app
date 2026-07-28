import AppShell from "@/components/AppShell";

export default function Home() {
  return (
    <AppShell
      activeView="active"
      title="Active tasks"
      description="Todo, In-Progress and Complete tasks will appear here"
    >
      <div className="empty-state">
        <h3>No active tasks</h3>
        <p>There are currently no active tasks to display</p>
      </div>
    </AppShell>
  );
}