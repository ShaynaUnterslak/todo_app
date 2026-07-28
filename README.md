# Task Tracker

A local-first todo application created for COMS3011A Lab 1.

The application is built with Next.js and JavaScript and is designed to run locally for a single user.

## Running It

### Requirements

- Node.js 24.14.0
- npm 11.9.0

### Install dependencies

From the project root, run:

```bash
npm ci
```

### Start the development server

```bash
npm run dev
```

The database is automatically initialised before the development server starts.

Open `http://localhost:3000` in a browser.

### Check the project

To run the linter and verify that the production build succeeds:

```bash
npm run check
```

### Initialise the database manually

The database normally initialises automatically. To initialise it separately, run:

```bash
npm run db:init
```

Once tests are added, replace that final sentence with the actual command, probably:

### Run the tests

```bash
npm test
```

## Third-Party Code

The following third-party packages are currently used:

- **Next.js** — provides the application framework, routing and server-side functionality.
- **React** — provides the component-based user interface.
- **React DOM** — renders React components in the browser.
- **ESLint** — checks the JavaScript code for potential errors and style problems.
- **eslint-config-next** — provides the ESLint rules recommended for Next.js projects.
- **better-sqlite3** — provides the SQLite database connection and a straightforward synchronous API suitable for this local single-user application.

This section will be updated whenever another package is installed.

## Database Design

The application uses SQLite and contains one table named `tasks`.

### Tasks table

| Column | Type | Constraints and purpose |
| --- | --- | --- |
| `id` | INTEGER | Primary key that uniquely identifies each task. |
| `title` | TEXT | Required and cannot be blank. |
| `description` | TEXT | Optional. An omitted description is stored as an empty string. |
| `due_date` | TEXT | Required calendar date stored in `YYYY-MM-DD` format. |
| `topic` | TEXT | Required and cannot be blank. |
| `status` | TEXT | Required and restricted to `Todo`, `In-Progress` or `Complete`. Defaults to `Todo`. |
| `archived` | INTEGER | Required archive flag restricted to `0` for active or `1` for archived. Defaults to `0`. |

There are no relationships between tables because the application uses only one table.

Archived tasks remain in the `tasks` table. Archiving changes the `archived` value rather than deleting or copying the task.

Overdue is not stored in the database. It is derived whenever tasks are read. A task is overdue when its due date is earlier than the current local calendar date and its status is not `Complete`.

Changing a task to or from `Complete`, or changing its due date, causes the overdue result to be recalculated from the updated values.

Title, due date and topic are required when creating or editing a task. Description is optional.

### Task sorting

Active and archived task lists can be sorted by:

- Due date, with the default order being earliest to latest.
- Topic, using case-insensitive alphabetical order.
- Status, using the order `Todo`, `In-Progress`, `Complete`.

Each sorting option can also be reversed.

## AI Usage

This repository makes use of AI code generation using the following tools:

- ChatGPT-Web[GPT-5.6 Thinking]

This repository does not use AI in-line editing tools.

This repository makes use of AI code review using the following tools:

- ChatGPT-Web[GPT-5.6 Thinking]

### Document Declaration

The preceding document was planned, reviewed and edited with the assistance of the following:

- ChatGPT-Web[GPT-5.6 Thinking]
