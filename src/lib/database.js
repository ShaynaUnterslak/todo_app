import Database from "better-sqlite3";
import { mkdirSync, readFileSync } from "node:fs";
import path from "node:path";

const defaultDatabasePath = path.join(
  process.cwd(),
  "data",
  "tasks.db",
);

const schemaPath = path.join(
  process.cwd(),
  "src",
  "db",
  "schema.sql",
);

export function createDatabase(
  databasePath = process.env.DATABASE_PATH || defaultDatabasePath,
) {
  const resolvedDatabasePath =
    databasePath === ":memory:"
      ? ":memory:"
      : path.resolve(databasePath);

  if (resolvedDatabasePath !== ":memory:") {
    mkdirSync(path.dirname(resolvedDatabasePath), {
      recursive: true,
    });
  }

  const database = new Database(resolvedDatabasePath);

  database.pragma("foreign_keys = ON");

  if (resolvedDatabasePath !== ":memory:") {
    database.pragma("journal_mode = WAL");
  }

  const schema = readFileSync(schemaPath, "utf8");
  database.exec(schema);

  return database;
}

export function getDatabase() {
  if (!globalThis.taskTrackerDatabase) {
    globalThis.taskTrackerDatabase = createDatabase();
  }

  return globalThis.taskTrackerDatabase;
}