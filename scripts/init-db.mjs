import Database from "better-sqlite3";
import { mkdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, "..");

const configuredDatabasePath = process.env.DATABASE_PATH;

const databasePath =
  configuredDatabasePath === ":memory:"
    ? ":memory:"
    : path.resolve(
        projectRoot,
        configuredDatabasePath || path.join("data", "tasks.db"),
      );

const schemaPath = path.join(
  projectRoot,
  "src",
  "db",
  "schema.sql",
);

if (databasePath !== ":memory:") {
  mkdirSync(path.dirname(databasePath), { recursive: true });
}

const schema = readFileSync(schemaPath, "utf8");
const database = new Database(databasePath);

try {
  database.pragma("foreign_keys = ON");

  if (databasePath !== ":memory:") {
    database.pragma("journal_mode = WAL");
  }

  database.exec(schema);

  console.log(
    `Database initialised successfully at: ${databasePath}`,
  );
} finally {
  database.close();
}