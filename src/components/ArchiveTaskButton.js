"use client";

import {
  useState,
  useTransition,
} from "react";
import { archiveTaskAction } from "@/app/actions";

export default function ArchiveTaskButton({
  taskId,
  taskTitle,
}) {
  const [message, setMessage] = useState("");
  const [isPending, startTransition] = useTransition();

  function handleArchive() {
    const confirmed = window.confirm(
      `Archive "${taskTitle}"?\n\n` +
        "The task will leave the active list but will remain viewable in Archived tasks.",
    );

    if (!confirmed) {
      return;
    }

    setMessage("");

    startTransition(async () => {
      const result = await archiveTaskAction(taskId);

      if (!result?.success) {
        setMessage(
          result?.message ||
            "The task could not be archived.",
        );
      }
    });
  }

  const errorId = `archive-error-${taskId}`;

  return (
    <div className="archive-control">
      <button
        type="button"
        className="archive-button"
        onClick={handleArchive}
        disabled={isPending}
        aria-describedby={message ? errorId : undefined}
      >
        {isPending ? "Archiving..." : "Archive"}
      </button>

      {message && (
        <p
          id={errorId}
          className="archive-error"
          aria-live="polite"
        >
          {message}
        </p>
      )}
    </div>
  );
}