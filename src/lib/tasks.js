import { getDatabase } from "@/lib/database";

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

export function getActiveTasks() {
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
      WHERE archived = 0
      ORDER BY due_date ASC, id ASC
    `)
    .all();
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