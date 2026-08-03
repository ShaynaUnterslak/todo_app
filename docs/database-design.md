# Database Design

The application uses SQLite and contains one table named `tasks`.

## Tasks table

| Column | Type | Constraints and purpose |
| --- | --- | --- |
| `id` | INTEGER | Primary key that uniquely identifies each task. |
| `title` | TEXT | Required and cannot be blank. |
| `description` | TEXT | Optional. An omitted description is stored as an empty string. |
| `due_date` | TEXT | Required calendar date stored in `YYYY-MM-DD` format. |
| `topic` | TEXT | Required and cannot be blank. |
| `status` | TEXT | Required and restricted to `Todo`, `In-Progress` or `Complete`. Defaults to `Todo`. |
| `archived` | INTEGER | Required archive flag restricted to `0` for active or `1` for archived. Defaults to `0`. |

## Relationships

There are no relationships between tables because the application uses only one table.

## Archiving

Archived tasks remain in the `tasks` table. Archiving changes the `archived` value from `0` to `1` rather than deleting the task or copying it to another table.

## Overdue calculation

Overdue is not stored in the database.

A task is considered overdue when:

- Its due date is earlier than the current local calendar date.
- Its status is not `Complete`.

Changing a task's due date or changing its status to or from `Complete` causes overdue to be recalculated from the updated values.

## Required and optional fields

Title, due date and topic are required when creating or editing a task. Description is optional.

## AI Declaration

The preceding document was planned, reviewed and edited with the assistance of the following:

- ChatGPT-Web[GPT-5.6 Thinking]