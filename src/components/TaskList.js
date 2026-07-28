import Link from "next/link";
import ArchiveTaskButton from "@/components/ArchiveTaskButton";
import TaskStatusControls from "@/components/TaskStatusControls";

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
        <li
          key={task.id}
          className={
            task.isOverdue
              ? "task-card overdue-task-card"
              : "task-card"
          }
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

                {task.isOverdue && (
                  <span className="overdue-badge">
                    Overdue
                  </span>
                )}
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

            <div className="task-card-actions">
              <TaskStatusControls
                taskId={task.id}
                taskTitle={task.title}
                currentStatus={task.status}
              />

              <div className="task-item-links">
                <Link
                  href={`/tasks/${task.id}/edit`}
                  className="edit-link"
                >
                  Edit details
                </Link>

                <ArchiveTaskButton
                  taskId={task.id}
                  taskTitle={task.title}
                />
              </div>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}