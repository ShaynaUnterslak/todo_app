"use server";

import { revalidatePath } from "next/cache";
import { insertTask } from "@/lib/tasks";

function readTextField(formData, fieldName) {
  const value = formData.get(fieldName);

  return typeof value === "string" ? value.trim() : "";
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

export async function createTaskAction(previousState, formData) {
  const title = readTextField(formData, "title");
  const description = readTextField(formData, "description");
  const dueDate = readTextField(formData, "dueDate");
  const topic = readTextField(formData, "topic");

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