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