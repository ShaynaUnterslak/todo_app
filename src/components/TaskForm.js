"use client";

import {
  useActionState,
  useEffect,
  useRef,
} from "react";
import { createTaskAction } from "@/app/actions";

const initialState = {
  success: false,
  message: "",
  errors: {},
  submissionId: 0,
};

export default function TaskForm() {
  const [state, formAction, pending] = useActionState(
    createTaskAction,
    initialState,
  );

  const formRef = useRef(null);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success, state.submissionId]);

  return (
    <form
      ref={formRef}
      action={formAction}
      className="task-form"
    >
      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="title">
            Title <span aria-hidden="true">*</span>
          </label>

          <input
            id="title"
            name="title"
            type="text"
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
            required
            aria-invalid={Boolean(state.errors?.dueDate)}
            aria-describedby={
              state.errors?.dueDate
                ? "due-date-error"
                : undefined
            }
          />

          {state.errors?.dueDate && (
            <p id="due-date-error" className="field-error">
              {state.errors.dueDate}
            </p>
          )}
        </div>

        <div className="form-field form-field-full">
          <label htmlFor="description">
            Description{" "}
            <span className="optional-label">(optional)</span>
          </label>

          <textarea
            id="description"
            name="description"
            rows="4"
          />
        </div>
      </div>

      <div className="form-actions">
        <button
          type="submit"
          className="primary-button"
          disabled={pending}
        >
          {pending ? "Saving task..." : "Create task"}
        </button>

        {state.message && (
          <p
            className={
              state.success
                ? "form-message success-message"
                : "form-message error-message"
            }
            aria-live="polite"
          >
            {state.message}
          </p>
        )}
      </div>
    </form>
  );
}