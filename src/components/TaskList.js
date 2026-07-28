const statusClassNames = {
  Todo: "status-todo",
  "In-Progress": "status-in-progress",
  Complete: "status-complete",
};

export default function TaskList({ tasks }) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <h3>No active tasks</h3>
        <p>Create your first task using the form above.</p>
      </div>
    );
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className="task-card">
          <article>
            <div className="task-card-heading">
              <h4>{task.title}</h4>

              <span
                className={`status-badge ${
                  statusClassNames[task.status] || ""
                }`}
              >
                {task.status}
              </span>
            </div>

            <p className="task-description">
              {task.description ||
                "No description provided."}
            </p>

            <dl className="task-details">
              <div>
                <dt>Topic</dt>
                <dd>{task.topic}</dd>
              </div>

              <div>
                <dt>Due date</dt>
                <dd>
                  <time dateTime={task.due_date}>
                    {task.due_date}
                  </time>
                </dd>
              </div>
            </dl>
          </article>
        </li>
      ))}
    </ul>
  );
}