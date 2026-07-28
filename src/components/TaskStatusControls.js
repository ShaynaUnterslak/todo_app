import { updateTaskStatusAction } from "@/app/actions";

const STATUSES = [
  "Todo",
  "In-Progress",
  "Complete",
];

export default function TaskStatusControls({
  taskId,
  taskTitle,
  currentStatus,
}) {
  return (
    <div
      className="quick-status"
      aria-label={`Change status for ${taskTitle}`}
    >
      <p className="quick-status-label">
        Change status
      </p>

      <div className="status-button-group">
        {STATUSES.map((status) => {
          const isCurrent = status === currentStatus;

          return (
            <form
              action={updateTaskStatusAction}
              key={status}
            >
              <input
                type="hidden"
                name="taskId"
                value={taskId}
              />

              <button
                type="submit"
                name="status"
                value={status}
                className={
                  isCurrent
                    ? "status-button current-status-button"
                    : "status-button"
                }
                disabled={isCurrent}
                aria-pressed={isCurrent}
              >
                {status}
              </button>
            </form>
          );
        })}
      </div>
    </div>
  );
}