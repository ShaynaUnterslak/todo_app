import Link from "next/link";

export default function AppShell({
  activeView,
  title,
  description,
  children,
}) {
  return (
    <main className="app-shell">
      <header className="app-header">
        <h1>Task Tracker</h1>
      </header>

      <nav className="view-tabs" aria-label="Task views">
        <Link
          href="/"
          className={activeView === "active" ? "tab active-tab" : "tab"}
          aria-current={activeView === "active" ? "page" : undefined}
        >
          Active tasks
        </Link>

        <Link
          href="/archived"
          className={activeView === "archived" ? "tab active-tab" : "tab"}
          aria-current={activeView === "archived" ? "page" : undefined}
        >
          Archived tasks
        </Link>
      </nav>

      <section className="content-card" aria-labelledby="view-title">
        <div className="section-heading">
          <h2 id="view-title">{title}</h2>
          <p>{description}</p>
        </div>

        {children}
      </section>
    </main>
  );
}