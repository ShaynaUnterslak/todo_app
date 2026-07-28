const statusClassNames = {
  Todo: "status-todo",
  "In-Progress": "status-in-progress",
  Complete: "status-complete",
};

export default function ArchivedTaskList({ tasks }) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <h3>No archived tasks</h3>
        <p>
          Tasks that you archive will remain viewable
          here.
        </p>
      </div>
    );
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="task-card archived-task-card"
        >
          <article>
            <div className="task-card-heading">
              <h4>{task.title}</h4>

              <div className="task-card-labels">
                <span
                  className={`status-badge ${
                    statusClassNames[task.status] || ""
                  }`}
                >
                  {task.status}
                </span>

                <span className="archive-badge">
                  Archived
                </span>
              </div>
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

            <p className="archived-note">
              This task is archived and cannot be
              edited.
            </p>
          </article>
        </li>
      ))}
    </ul>
  );
}