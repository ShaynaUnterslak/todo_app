# Running the Application

## Requirements

- Node.js 24.14.0
- npm 11.9.0

## Install dependencies

From the project root, run:

```bash
npm ci
```

## Start the application

```bash
npm run dev
```

The database is automatically initialised before the development server starts.

Open `http://localhost:3000` in a browser.

## Run the automated tests

```bash
npm test
```

The tests use a fresh in-memory SQLite database and do not depend on the developer's local database.

## Check the complete project

To run the linter, automated tests and production build:

```bash
npm run check
```

## Initialise the database manually

The database normally initialises automatically. To initialise it separately, run:

```bash
npm run db:init
```

## AI Declaration

The preceding document was planned, reviewed and edited with the assistance of the following:

- ChatGPT-Web[GPT-5.6 Thinking]