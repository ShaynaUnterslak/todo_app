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

Open `http://localhost:3000` in a browser.

### Run the linter

```bash
npm run lint
```

### Create the production build

```bash
npm run build
```

The database setup and test commands will be added when those parts of the application are implemented.

## Third-Party Code

The following third-party packages are currently used:

- **Next.js** — provides the application framework, routing and server-side functionality.
- **React** — provides the component-based user interface.
- **React DOM** — renders React components in the browser.
- **ESLint** — checks the JavaScript code for potential errors and style problems.
- **eslint-config-next** — provides the ESLint rules recommended for Next.js projects.

This section will be updated whenever another package is installed.

## Database Design

The SQLite database will be implemented during Stage 2.

The approved design will use one `tasks` table. Archived tasks will remain in the same table and will be represented using an archive flag. Overdue will be calculated from the due date and task status rather than stored in the database.

The final table columns, constraints and relationships will be documented after the schema has been implemented.

## AI Usage

This repository makes use of AI code generation using the following tools:

- ChatGPT-Web[GPT-5.6 Thinking]

This repository does not use AI in-line editing tools.

This repository makes use of AI code review using the following tools:

- ChatGPT-Web[GPT-5.6 Thinking]

### Document Declaration

The preceding document was planned, reviewed and edited with the assistance of the following:

- ChatGPT-Web[GPT-5.6 Thinking]
