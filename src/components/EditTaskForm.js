"use client";

import Link from "next/link";
import { useActionState } from "react";
import { updateTaskDetailsAction } from "@/app/actions";

export default function EditTaskForm({ task }) {
  const initialState = {
    success: false,
    message: "",
    errors: {},
  };

  const [state, formAction, pending] = useActionState(
    updateTaskDetailsAction,
    initialState,
  );

  return (
    <form action={formAction} className="task-form">
      <input
        type="hidden"
        name="taskId"
        value={task.id}
      />

      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="title">
            Title <span aria-hidden="true">*</span>
          </label>

          <input
            id="title"
            name="title"
            type="text"
            defaultValue={task.title}
            required
            aria-invalid={Boolean(state.errors?.title)}
            aria-describedby={
              state.errors?.title ? "title-error" : undefined
            }
          />

          {state.errors?.title && (
            <p id="title-error" className="field-error">
              {state.errors.title}
            </p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="topic">
            Topic <span aria-hidden="true">*</span>
          </label>

          <input
            id="topic"
            name="topic"
            type="text"
            defaultValue={task.topic}
            required
            aria-invalid={Boolean(state.errors?.topic)}
            aria-describedby={
              state.errors?.topic ? "topic-error" : undefined
            }
          />

          {state.errors?.topic && (
            <p id="topic-error" className="field-error">
              {state.errors.topic}
            </p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="dueDate">
            Due date <span aria-hidden="true">*</span>
          </label>

          <input
            id="dueDate"
            name="dueDate"
            type="date"
            defaultValue={task.due_date}
            required
            aria-invalid={Boolean(
              state.errors?.dueDate,
            )}
            aria-describedby={
              state.errors?.dueDate
                ? "due-date-error"
                : undefined
            }
          />

          {state.errors?.dueDate && (
            <p
              id="due-date-error"
              className="field-error"
            >
              {state.errors.dueDate}
            </p>
          )}
        </div>

        <div className="form-field form-field-full">
          <label htmlFor="description">
            Description{" "}
            <span className="optional-label">
              (optional)
            </span>
          </label>

          <textarea
            id="description"
            name="description"
            rows="5"
            defaultValue={task.description}
          />
        </div>
      </div>

      <div className="form-actions">
        <button
          type="submit"
          className="primary-button"
          disabled={pending}
        >
          {pending ? "Saving changes..." : "Save changes"}
        </button>

        <Link href="/" className="secondary-link">
          Cancel
        </Link>
      </div>

      {state.message && (
        <p
          className="form-message error-message"
          aria-live="polite"
        >
          {state.message}
        </p>
      )}
    </form>
  );
}