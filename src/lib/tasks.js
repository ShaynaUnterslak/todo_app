import { getDatabase } from "@/lib/database";
import {
  getLocalDateString,
  isTaskOverdue,
  normaliseSortOptions,
} from "@/lib/taskRules";

const SORT_EXPRESSIONS = Object.freeze({
  dueDate: "due_date",
  topic: "topic COLLATE NOCASE",
  status: `
    CASE status
      WHEN 'Todo' THEN 1
      WHEN 'In-Progress' THEN 2
      WHEN 'Complete' THEN 3
    END
  `,
});

function getTasksByArchivedValue(
  archived,
  options = {},
) {
  const database = getDatabase();

  const { sortBy, direction } =
    normaliseSortOptions(options);

  const sortExpression = SORT_EXPRESSIONS[sortBy];

  const sqlDirection =
    direction === "desc" ? "DESC" : "ASC";

  const tasks = database
    .prepare(`
      SELECT
        id,
        title,
        description,
        due_date,
        topic,
        status,
        archived
      FROM tasks
      WHERE archived = ?
      ORDER BY
        ${sortExpression} ${sqlDirection},
        id ASC
    `)
    .all(archived);

  const today =
    typeof options.today === "string"
      ? options.today
      : getLocalDateString();

  return tasks.map((task) => ({
    ...task,
    isOverdue: isTaskOverdue(task, today),
  }));
}

export function insertTask({
  title,
  description = "",
  dueDate,
  topic,
}) {
  const database = getDatabase();

  const statement = database.prepare(`
    INSERT INTO tasks (
      title,
      description,
      due_date,
      topic
    )
    VALUES (
      @title,
      @description,
      @dueDate,
      @topic
    )
  `);

  const result = statement.run({
    title,
    description,
    dueDate,
    topic,
  });

  return Number(result.lastInsertRowid);
}

export function getActiveTasks(options = {}) {
  return getTasksByArchivedValue(0, options);
}

export function getArchivedTasks(options = {}) {
  return getTasksByArchivedValue(1, options);
}

export function getTaskById(id) {
  const database = getDatabase();

  return database
    .prepare(`
      SELECT
        id,
        title,
        description,
        due_date,
        topic,
        status,
        archived
      FROM tasks
      WHERE id = ?
        AND archived = 0
    `)
    .get(id);
}

export function updateTaskDetails({
  id,
  title,
  description = "",
  dueDate,
  topic,
}) {
  const database = getDatabase();

  const result = database
    .prepare(`
      UPDATE tasks
      SET
        title = @title,
        description = @description,
        due_date = @dueDate,
        topic = @topic
      WHERE id = @id
        AND archived = 0
    `)
    .run({
      id,
      title,
      description,
      dueDate,
      topic,
    });

  return result.changes === 1;
}

export function updateTaskStatus(id, status) {
  const database = getDatabase();

  const result = database
    .prepare(`
      UPDATE tasks
      SET status = ?
      WHERE id = ?
        AND archived = 0
    `)
    .run(status, id);

  return result.changes === 1;
}

export function archiveTask(id) {
  const database = getDatabase();

  const result = database
    .prepare(`
      UPDATE tasks
      SET archived = 1
      WHERE id = ?
        AND archived = 0
    `)
    .run(id);

  return result.changes === 1;
}