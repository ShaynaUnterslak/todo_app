"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  archiveTask,
  insertTask,
  updateTaskDetails,
  updateTaskStatus,
} from "@/lib/tasks";

const VALID_STATUSES = [
  "Todo",
  "In-Progress",
  "Complete",
];

function readTextField(formData, fieldName) {
  const value = formData.get(fieldName);

  return typeof value === "string" ? value.trim() : "";
}

function readTaskId(formData) {
  const value = readTextField(formData, "taskId");
  const taskId = Number(value);

  if (!Number.isInteger(taskId) || taskId <= 0) {
    return null;
  }

  return taskId;
}

function isValidDate(dateValue) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateValue)) {
    return false;
  }

  const date = new Date(`${dateValue}T00:00:00.000Z`);

  return (
    !Number.isNaN(date.valueOf()) &&
    date.toISOString().slice(0, 10) === dateValue
  );
}

function validateTaskDetails({
  title,
  dueDate,
  topic,
}) {
  const errors = {};

  if (!title) {
    errors.title = "Enter a task title.";
  }

  if (!dueDate) {
    errors.dueDate = "Select a due date.";
  } else if (!isValidDate(dueDate)) {
    errors.dueDate = "Enter a valid due date.";
  }

  if (!topic) {
    errors.topic = "Enter a topic.";
  }

  return errors;
}

export async function createTaskAction(
  previousState,
  formData,
) {
  const title = readTextField(formData, "title");
  const description = readTextField(
    formData,
    "description",
  );
  const dueDate = readTextField(formData, "dueDate");
  const topic = readTextField(formData, "topic");

  const errors = validateTaskDetails({
    title,
    dueDate,
    topic,
  });

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Please correct the highlighted fields.",
      errors,
      submissionId: previousState?.submissionId ?? 0,
    };
  }

  try {
    insertTask({
      title,
      description,
      dueDate,
      topic,
    });
  } catch (error) {
    console.error("Task creation failed:", error);

    return {
      success: false,
      message: "The task could not be saved. Please try again.",
      errors: {},
      submissionId: previousState?.submissionId ?? 0,
    };
  }

  revalidatePath("/");

  return {
    success: true,
    message: "Task created successfully.",
    errors: {},
    submissionId: Date.now(),
  };
}

export async function updateTaskDetailsAction(
  previousState,
  formData,
) {
  const taskId = readTaskId(formData);
  const title = readTextField(formData, "title");
  const description = readTextField(
    formData,
    "description",
  );
  const dueDate = readTextField(formData, "dueDate");
  const topic = readTextField(formData, "topic");

  const errors = validateTaskDetails({
    title,
    dueDate,
    topic,
  });

  if (!taskId) {
    return {
      success: false,
      message: "The task could not be identified.",
      errors: {},
    };
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Please correct the highlighted fields.",
      errors,
    };
  }

  try {
    const updated = updateTaskDetails({
      id: taskId,
      title,
      description,
      dueDate,
      topic,
    });

    if (!updated) {
      return {
        success: false,
        message:
          "This task is no longer available for editing.",
        errors: {},
      };
    }
  } catch (error) {
    console.error("Task details update failed:", error);

    return {
      success: false,
      message:
        "The task details could not be saved. Please try again.",
      errors: {},
    };
  }

  revalidatePath("/");
  revalidatePath(`/tasks/${taskId}/edit`);

  redirect("/");
}

export async function updateTaskStatusAction(formData) {
  const taskId = readTaskId(formData);
  const status = readTextField(formData, "status");

  if (!taskId || !VALID_STATUSES.includes(status)) {
    return;
  }

  try {
    updateTaskStatus(taskId, status);
  } catch (error) {
    console.error("Task status update failed:", error);
    return;
  }

  revalidatePath("/");
}
export async function archiveTaskAction(taskId) {
  const parsedTaskId = Number(taskId);

  if (
    !Number.isInteger(parsedTaskId) ||
    parsedTaskId <= 0
  ) {
    return {
      success: false,
      message: "The task could not be identified.",
    };
  }

  try {
    const archived = archiveTask(parsedTaskId);

    if (!archived) {
      return {
        success: false,
        message:
          "This task is no longer available for archiving.",
      };
    }
  } catch (error) {
    console.error("Task archiving failed:", error);

    return {
      success: false,
      message:
        "The task could not be archived. Please try again.",
    };
  }

  revalidatePath("/");
  revalidatePath("/archived");

  return {
    success: true,
    message: "Task archived successfully.",
  };
}