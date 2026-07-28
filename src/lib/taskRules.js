export const VALID_STATUSES = Object.freeze([
  "Todo",
  "In-Progress",
  "Complete",
]);

export const VALID_SORT_FIELDS = Object.freeze([
  "dueDate",
  "topic",
  "status",
]);

export const VALID_SORT_DIRECTIONS = Object.freeze([
  "asc",
  "desc",
]);

export function getLocalDateString(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function isTaskOverdue(
  task,
  today = getLocalDateString(),
) {
  return (
    task.status !== "Complete" &&
    task.due_date < today
  );
}

export function normaliseSortOptions(options = {}) {
  const sortBy = VALID_SORT_FIELDS.includes(
    options.sortBy,
  )
    ? options.sortBy
    : "dueDate";

  const direction = VALID_SORT_DIRECTIONS.includes(
    options.direction,
  )
    ? options.direction
    : "asc";

  return {
    sortBy,
    direction,
  };
}