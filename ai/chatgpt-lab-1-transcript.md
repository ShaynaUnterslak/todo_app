**You:**

Uploaded a fileUploaded a file
I am a student completing COMS3011A Lab 1. I have attached
1.	The Lab 1 brief and rubric
2.	The AI Policy
Very important: for this assignment, please treat the lab brief and AI policy as the source of all truth, and ensure they are followed, if I contradict them, tell me. 
Here is my initial plan that I have worked on from the brief:

The app will display tasks:
• Todo, In Progress and Complete tasks will have different visual styling or colours.
• The written status will still be displayed, so colour is not the only status indicator.
• An overdue task will have a separate “Overdue” label. Overdue will not replace the task’s status and will not be stored as a status.
• Archived tasks will appear in a separate tab or screen.

The app will allow users to create tasks.
• The user enters a title, description, due date and topic.
• The app validates that all required information is present.
• A new task is automatically assigned the Todo status.
• If the due date is in the past, the user is warned and can either cancel or continue.
• If the user continues, the task is saved normally and is displayed  as overdue because overdue is calculated from its due date and status.
• The task is saved to the SQLite database.
• The saved task then appears in the active-task view.
The app allowa users to edit task details and status.
•	Changing status:
• The user selects Todo, In Progress or Complete.
• The app saves the selected status.
• Users are not forced to move in the order Todo to In Progress to Complete because its not alwayd that way.
• If an overdue task becomes Complete, it will no longer display as
  overdue.
• The interface then displays the updated task.
•	Editing task details:
• The user may edit the title, description, due date and topic.
• The app validates the edited information.
• Overdue is recalculated from the updated due date and status.
• The updated information is saved to the database.
• The updated task is displayed.

The app allows archiving:
• The user selects Archive.
• The user is asked to confirm
• The app changes the task’s archived value from false to true.
• The task is not deleted or moved to another table.
• It is removed from the active view and appears in the archived view.

The app allows sorting:
• Active tasks can be sorted by topic, status and due date.
• The default sorting will be by due date.

Database Design:

• SQLite will be used.
• There will be one tasks table.
• The table will contain the task details, status and an archived true/false field.
• Status will be restricted to Todo, In Progress and Complete.
• Overdue will not be stored in the database because it is derived from the due date and status.
• Archived tasks will remain in the same table.

Other requirements:
• Information must persist after the app is stopped and restarted
• The repository must contain at least three meaningful tests
• The project must include the required Third-Party Code, Database Design and Running It documentation.
• The README must provide the Node version and exact install, run and  test commands.
• The project must have a meaningful Git commit history with at least six coherent commits.
• AI use must be attributed according to the attached policy.

Before any coding:
1. Review my plan against the brief and rubric.
2. Separate mandatory requirements from my optional design decisions.
3. Identify missing requirements, unclear decisions and unnecessary  complexity.
4. Point out anything that could reduce my marks.
5. Suggest corrections, but do not silently rewrite my decisions.
6. Ask me to approve any important design decision.
7. Produce a revised checklist and a staged implementation plan.

* * *

**ChatGPT:**

## Overall review

Your plan is **strong and closely aligned with the brief**. Your database decisions in particular match the highest rubric level: keeping archived tasks in the same table, representing archive as a flag, and calculating overdue from the due date and status rather than storing it.

There are, however, several important corrections and additions before coding.

One source hierarchy issue must be noted: although you asked me to treat the two attached documents as the source of all truth, the COMS3011A AI Policy itself states that it supplements the broader Wits AI Policy and that the University policy takes priority if there is a conflict. Clarification must then be requested.

---

# 1. Mandatory requirements

These are required by the brief or needed for the complete rubric level.

## Application scope

The application must:

* Use **Next.js and SQLite**.
* Run locally through Node.js and npm or an equivalent.
* Be local-first and not require web deployment.
* Serve one user and have no user accounts.

Your plan mentions SQLite but does not yet explicitly record Next.js, local-only operation or the absence of authentication.

## Task functionality

The user must be able to:

* Create tasks.
* Edit tasks.
* Archive tasks.
* Continue viewing archived tasks.
* Never permanently delete a task.
* Store a title, description, due date and topic for every task.
* View tasks as a list.
* Sort by topic, status and due date.

## Statuses

The brief specifies the exact fixed statuses:

* `Todo`
* `In-Progress`
* `Complete`

Your plan currently uses **“In Progress” without the hyphen**. This contradicts the terminology in the brief. I recommend using `In-Progress` exactly in the database, interface, documentation and tests.

The user must not be able to create additional statuses.

## Overdue behaviour

Overdue must:

* Be visibly indicated.
* Not be a fourth status.
* Not appear in the status selector.
* Be derived from the due date and status rather than stored in the database.

Your decision that a completed task is no longer overdue is consistent with the rubric, which specifically says overdue should be derived from both the due date **and the status**.

## Persistence

The following must survive:

* A page reload.
* Stopping and restarting the application.

The functional walkthrough tests these separately.

## Database implementation

For full marks, you should have:

* A committed schema file or migration.
* Actual SQLite persistence.
* Sensible types and constraints.
* Archive represented by a flag or timestamp on the task.
* Overdue derived when tasks are read.
* Documentation that matches the actual shipped schema.

Your one-table design is appropriate.

## Tests

You need at least three tests, but “three meaningful tests” alone is not enough for the complete rubric level. The tests must:

* Exercise real behaviour.
* Include at least one test for archiving **or** the overdue rule.
* Be deterministic.
* Use a temporary or throwaway database.
* Not depend on your development database or existing data.
* Pass through one documented command.

## Documentation

Markdown documentation must contain:

1. **Third-Party Code**  
    Every directly installed library or package, with a sentence explaining why it was chosen.
2. **Database Design**  
    Tables, columns and relationships. Since you plan one table, explicitly state that there are no inter-table relationships.
3. **Running It**  
    The Node version and every exact command needed to install, initialise, run and test from a clean clone.

The documentation must describe the project as it actually exists, not only the intended design.

## Git history

For full marks:

* Have at least six commits.
* Each commit should represent a coherent piece of work.
* Each commit should leave the repository in a working state.
* Messages should explain what changed and, where necessary, why.
* Work must visibly take place over more than one session.

Simply making six commits at the end will not meet the complete level.

## Submission and AI records

The submission includes:

* GitHub repository link.
* Documentation files.
* AI transcripts covering planning, code generation and debugging.

This current conversation should therefore be saved as part of your planning transcript.

---

# 2. Optional design decisions in your plan

These are sensible, but the brief does not require them:

* Giving each status a different colour or visual style.
* Displaying both colour and written status.
* Using the exact label “Overdue”.
* Placing archived tasks in a separate tab or screen.
* Making all four form fields mandatory.
* Warning users about past due dates.
* Allowing the user to cancel or continue after the warning.
* Automatically assigning new tasks the `Todo` status.
* Allowing direct movement between any statuses.
* Asking for confirmation before archiving.
* Making due date the default sorting option.
* Having separate interfaces for status editing and detail editing.

These are not incorrect. They should simply not take priority over the marked functionality.

---

# 3. Missing or unclear decisions

## A. Exact overdue rule

You should define the rule precisely. My recommendation is:

> A task is overdue when its due date is earlier than the current local calendar date, its status is not `Complete`, and it has not been deleted because deletion is unsupported.

An archived task can still technically be overdue under this rule. The archived view may display that information, although the brief does not explicitly require it.

## B. Date format and timezone

Decide whether a due date is:

* A calendar date only, such as `2026-08-04`, or
* A date and time.

The brief says “Due Date”, not due time. A date-only value is simpler and less error-prone.

Recommended storage:

```
YYYY-MM-DD
```

The application should compare it to the user’s local calendar date.

## C. Status sorting order

Alphabetical sorting would result in:

1. Complete
2. In-Progress
3. Todo

That is probably not the most intuitive order.

Recommended status sorting order:

1. Todo
2. In-Progress
3. Complete

This sorting order does not force users to follow that workflow when changing status.

## D. Sorting direction

The brief requires sorting by the three fields but does not specify direction.

A straightforward design would provide:

* Topic: A to Z and Z to A.
* Status: workflow order and reverse workflow order.
* Due date: earliest first and latest first.

At minimum, each required field must visibly produce the correct ordering.

## E. Schema and migration strategy

Your plan describes the database conceptually but does not state how a clean clone creates the database.

You need one reproducible method, such as:

* A committed SQL migration that runs through a documented command, or
* A database migration system that creates the schema.

The marker should not need to manually create a table or copy your development database.

## F. Behaviour after archiving

You have correctly said that the task moves out of the active view and remains viewable. Still decide whether archived tasks can:

* Be edited.
* Have their status changed.
* Be restored to the active list.

None of these is required. The lowest-risk design is to make archived tasks read-only and not add restoration unless you have time.

## G. Validation rules

“All required information is present” needs a concrete definition.

Recommended minimum:

* Title is not blank after trimming whitespace.
* Description is not blank.
* Topic is not blank.
* Due date is a valid calendar date.
* Status must be one of the three permitted values.
* Archived must be either false or true.

The server/database layer should also validate important values rather than relying entirely on browser validation.

---

# 4. Unnecessary complexity

The largest optional complexity in your current plan is the **past-date warning with cancel-or-continue behaviour**. It requires additional modal state and testing but earns no direct marks. Since overdue tasks are explicitly part of the assignment, allowing past dates without a warning would still satisfy the brief.

Other features that should be avoided unless all marked work is finished:

* User accounts.
* Deployment.
* Deleting tasks.
* A separate topics table.
* Custom statuses.
* Drag-and-drop Kanban boards.
* Search and filtering beyond the required sorting.
* Multiple archive tables.
* Notifications.
* Combined multi-column sorting.
* Restoration history or audit logs.

A simple, reliable list application is safer than a more impressive application that fails the clean-clone walkthrough.

---

# 5. Issues that could reduce your marks

## High-risk issues

### 1. Using `In Progress` instead of `In-Progress`

The fixed status names should match the brief exactly.

### 2. No committed schema or migration

A database that only works because your own `.db` file exists could lose database-design and testing marks.

### 3. Tests use your development database

The complete testing level requires a throwaway database.

### 4. README misses one setup command

The walkthrough starts from a clean clone, and each step is pass/fail for four marks. Failure to install and start from the README receives only one short additional attempt before the walkthrough score becomes zero.

### 5. Documentation becomes a bare dependency list

Each installed package needs a reason, and the database section must explicitly address relationships.

### 6. Archive removes the task permanently

An archived task must leave the active list but remain viewable.

### 7. Overdue becomes a selectable status

This would directly contradict the functional walkthrough and database rubric.

### 8. Six artificial commits at the end

The history must be coherent, working and spread over more than one session.

### 9. Incomplete AI declarations

The policy requires document-level declarations. A document without an AI usage or non-usage declaration will not be marked or considered.

### 10. Missing AI-assisted commit messages

When AI generates code, the relevant commit must include:

```
Assisted-by: ChatGPT-Web[GPT-5.6 Thinking]
```

The normal commit message must still explain the change.

### 11. README does not distinguish types of AI usage

The README must declare AI code generation, inline editing and code review, or explicitly state non-usage for the categories that were not used.

### 12. AI transcript shows whole-project generation

For full AI-usage marks, the transcript must show:

* Constraints stated before generation.
* Task-level use.
* At least one genuine instance where you identify an unsuitable or incorrect response and redirect it.
* Decisions in the transcript that can be traced to the submitted code.

Do not manufacture a rejection merely for the rubric. Preserve real corrections when they occur.

---

# 6. Revised checklist

## Scope

* [ ]  Project uses Next.js.
* [ ]  Project uses SQLite.
* [ ]  Runs locally with Node.js.
* [ ]  No deployment is required.
* [ ]  No user accounts or authentication.
* [ ]  No permanent task deletion.

## Task behaviour

* [ ]  Create a task with title, description, due date and topic.
* [ ]  New task receives `Todo`.
* [ ]  Edit all task details.
* [ ]  Change status between `Todo`, `In-Progress` and `Complete`.
* [ ]  Direct status changes are allowed.
* [ ]  Changes survive a page reload.
* [ ]  Archive a task.
* [ ]  Archived task leaves the active list.
* [ ]  Archived task remains viewable.
* [ ]  No Delete button, delete endpoint or delete workflow.

## Sorting and overdue

* [ ]  Sort by topic.
* [ ]  Sort by status.
* [ ]  Sort by due date.
* [ ]  Define status sorting order.
* [ ]  Define sorting directions.
* [ ]  Overdue is visibly indicated.
* [ ]  Overdue is not selectable as a status.
* [ ]  Overdue is not stored.
* [ ]  Completed tasks are not shown as overdue.
* [ ]  Overdue is recalculated after due-date or status changes.

## Database

* [ ]  One `tasks` table.
* [ ]  Stable primary key.
* [ ]  Four task-information fields.
* [ ]  Status field constrained to the three exact values.
* [ ]  Archive represented by a flag or timestamp.
* [ ]  Due date stored consistently.
* [ ]  Committed schema or migration.
* [ ]  Database created automatically from a clean clone.
* [ ]  Documentation matches the implemented schema.

## Testing

* [ ]  At least three tests.
* [ ]  Tests exercise real behaviour.
* [ ]  At least one test covers archiving or overdue.
* [ ]  Tests use a throwaway database.
* [ ]  Tests do not depend on existing data.
* [ ]  Tests are deterministic.
* [ ]  All tests run through one documented command.

## Documentation

* [ ]  Third-Party Code section.
* [ ]  Every direct dependency has a reason.
* [ ]  Database Design section.
* [ ]  Table columns and constraints documented.
* [ ]  Relationships explicitly addressed.
* [ ]  Running It section.
* [ ]  Exact Node version included.
* [ ]  Exact clean-install command included.
* [ ]  Exact database setup command included, if separate.
* [ ]  Exact run command included.
* [ ]  Exact test command included.
* [ ]  Commands verified from a clean clone.

## Git and submission

* [ ]  At least six coherent commits.
* [ ]  Each commit leaves the repository working.
* [ ]  Commit messages are descriptive.
* [ ]  Work is spread over more than one session.
* [ ]  GitHub repository link ready.
* [ ]  Documentation included.
* [ ]  Unedited AI transcripts included.

## AI policy

* [ ]  This planning conversation is saved.
* [ ]  A new AI session is used for the assessment.
* [ ]  Every submitted document has an AI usage or non-usage declaration.
* [ ]  AI-generated code commits include `Assisted-by`.
* [ ]  README declares code generation use or non-use.
* [ ]  README declares inline AI use or non-use.
* [ ]  README declares AI code review use or non-use.
* [ ]  Transcript preserves real corrections and redirections.
* [ ]  All generated output is personally checked.

---

# 7. Staged implementation plan

## Stage 0: Confirm the design

Finalise:

* Exact status strings.
* Due-date format.
* Overdue formula.
* Archive representation.
* Status sorting order.
* Whether archived tasks are read-only.
* Whether the optional past-date warning will be included.

Save this conversation as the beginning of the planning transcript.

## Stage 1: Create the project skeleton

* Create the Next.js project.
* Add basic navigation for Active and Archived tasks.
* Add empty documentation headings.
* Add initial README run instructions.
* Confirm the application starts.

Suggested commit:

```
Set up local Next.js task application structure
```

## Stage 2: Implement the database

* Add the SQLite dependency.
* Create the migration or schema file.
* Create the `tasks` table.
* Add the data-access layer.
* Confirm database creation works from an empty environment.

Suggested commit:

```
Add persistent SQLite task schema and data access
```

## Stage 3: Implement create and list

* Add the create-task form.
* Validate the four fields.
* Assign `Todo`.
* Save the task.
* Display it in the active list.

Suggested commit:

```
Add task creation and active task list
```

## Stage 4: Implement editing and statuses

* Edit title, description, due date and topic.
* Change between the three fixed statuses.
* Save updates to SQLite.
* Confirm changes survive a reload.

Suggested commit:

```
Add persistent task editing and status updates
```

## Stage 5: Implement archiving

* Add Archive.
* Set the archived flag.
* Remove archived tasks from the active query.
* Add the archived-task view.
* Ensure no deletion is implemented.

Suggested commit:

```
Add non-destructive task archiving and archive view
```

## Stage 6: Implement sorting and overdue

* Add topic sorting.
* Add status sorting.
* Add due-date sorting.
* Derive overdue at read/display time.
* Display overdue independently of status.
* Confirm completed tasks are not flagged.

Suggested commit:

```
Add required sorting and derived overdue indication
```

## Stage 7: Add deterministic tests

At minimum, test:

1. Creating and retrieving a task with all four fields.
2. Editing a task and persisting the change.
3. Archiving a task removes it from active results but preserves it in archived results.
4. An incomplete past-due task is overdue.
5. A complete past-due task is not overdue.

Only three are mandatory, but four or five focused tests reduce risk.

Suggested commit:

```
Add isolated database tests for core task behaviour
```

## Stage 8: Complete documentation and AI attribution

* Document every direct dependency and its reason.
* Document the actual schema and absence of relationships.
* Add verified Node and npm commands.
* Add AI usage declarations.
* Add transcripts required by the brief.

Suggested commit:

```
Complete clean-clone documentation and AI declarations
```

## Stage 9: Final clean-clone walkthrough

Use a fresh folder or environment and perform the seven walkthrough steps in the exact order shown on page 2 of the brief:

1. Install and start using only the README.
2. Create a task with four fields.
3. Edit it and reload.
4. Archive it and locate it in the archived view.
5. Test all three sorting choices.
6. Test the overdue indicator and status selector.
7. Restart the application and verify persistence.

---

# Decisions requiring your approval

My recommended decisions are:

1. Use the exact status values `Todo`, `In-Progress` and `Complete`.
2. Allow direct movement between any statuses and default new tasks to `Todo`.
3. Store due dates as date-only ISO text: `YYYY-MM-DD`.
4. Define overdue as due date earlier than today and status not `Complete`.
5. Use one `tasks` table with an integer archive flag constrained to `0` or `1`.
6. Use Active and Archived tabs, with the same reusable sorting controls available in both.
7. Make archived tasks read-only and do not add restoration.
8. Leave the past-date warning until after all marked requirements and tests are complete.
9. Use a committed SQL schema or migration that automatically creates the database.

Reply with **“Approve all”** or specify which decisions you want changed.

* * *

**You:**

approve all
lets start with stage 1.
ive created a git repo, and will be using vs code

* * *

**ChatGPT:**

## Stage 1: Project setup

We will first confirm your environment, then scaffold the Next.js application inside the Git repository. We will **not add SQLite or task functionality yet**.

The brief requires Next.js, local Node.js operation, and exact clean-clone commands in the final documentation.

### Recommended setup choices

Please approve these choices:

* **TypeScript:** Yes
* **App Router:** Yes
* **ESLint:** Yes
* **Source directory:** Yes, use `src/`
* **Package manager:** npm
* **Tailwind CSS:** No; use ordinary CSS to reduce dependencies
* **React Compiler:** No; it is unnecessary for this lab
* **Import alias:** Keep `@/*`
* **Node:** Use your installed LTS version, provided it meets Next.js requirements; record the exact version in the README

Next.js officially supports these `create-next-app` options. Its current documentation requires Node.js 20.9 or newer, while Node 24 is presently an LTS release line. [![](https://www.google.com/s2/favicons?domain=https://nextjs.org&sz=128)Next.js+2![](https://www.google.com/s2/favicons?domain=https://nextjs.org&sz=128)Next.js+2](https://nextjs.org/docs/app/api-reference/cli/create-next-app?utm_source=chatgpt.com)

## Step 1: Check your environment

In VS Code:

1. Open the folder containing your Git repository.
2. Open **Terminal → New Terminal**.
3. Confirm that the terminal is at the repository root.
4. Run these commands individually:

```PowerShell
node -v
npm -v
git status
git branch --show-current
git remote -v
Get-ChildItem -Force
```

Do not run `create-next-app` yet.

Paste the complete output here. I will check:

* Whether your Node version is suitable
* Whether the repository is genuinely empty
* Whether a README, licence or `.gitignore` might conflict with scaffolding
* Whether the remote repository is configured correctly
* Whether we can safely create the Next.js application directly in the current folder

Save this conversation as part of your planning transcript because the submission specifically requires AI transcripts for planning, code generation and debugging.

For the final AI record, this session uses:

```
ChatGPT-Web[GPT-5.6 Thinking]
```

* * *

**You:**

![Uploaded image](https://sdmntprwestus3.oaiusercontent.com/files/00000000-bdc4-81fd-9dfa-484d3428092e/raw?se=2026-08-03T13:38:00Z&sp=r&sv=2026-02-06&sr=b&scid=6fe1648c-65c7-444c-859e-6174a96c218c&skoid=0a4a0f0c-99ac-4752-9d87-cfac036fa93f&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2026-08-03T11:03:56Z&ske=2026-08-04T11:03:56Z&sks=b&skv=2026-02-06&sig=6mqdyvB/3cL7SqBVGE2HmAwA/VCAzwCzfGLkr/QRAR4%3D)I would prefer to use JavaScript rather than TypeScript because I have  previous experience with JavaScript, React, Node.js and Jest. 



Please confirm whether JavaScript is fully suitable for all lab  requirements. If there is a specific technical reason why TypeScript would be necessary for this project, explain it before we decide. 
Otherwise, revise the setup plan to use JavaScript.

* * *

**ChatGPT:**

## JavaScript is fully suitable

There is **no lab requirement for TypeScript**. The brief requires only that the application use **Next.js and SQLite**; it does not prescribe JavaScript or TypeScript.

There is also no technical feature in your approved design that requires TypeScript. JavaScript can handle:

* Next.js App Router
* React components
* Server-side database operations
* SQLite
* Form validation
* Sorting and overdue calculations
* Jest tests

The official Next.js setup tool explicitly supports JavaScript through the `--js` option. TypeScript is an optional development aid rather than a Next.js requirement. [![](https://www.google.com/s2/favicons?domain=https://github.com&sz=128)GitHub+1](https://github.com/vercel/next.js/blob/canary/packages/create-next-app/README.md?utm_source=chatgpt.com)

Because you already have experience with JavaScript, React, Node.js and Jest, **JavaScript is the better choice for this lab**. It reduces unnecessary learning overhead and lets you focus on the assessed functionality.

## Environment check

Your environment is suitable:

```
Node: v24.14.0
npm: 11.9.0
Branch: main
Remote: configured
Working tree: clean
```

Current Next.js documentation specifies Node.js 20.9 or later, so Node 24.14.0 meets the requirement. [![](https://www.google.com/s2/favicons?domain=https://nextjs.org&sz=128)Next.js](https://nextjs.org/docs/app/getting-started/installation?utm_source=chatgpt.com)

Your PowerShell configuration blocks `npm.ps1`, but `npm.cmd` works correctly. We can use:

```PowerShell
npm.cmd
npx.cmd
```

There is no need to change your computer’s execution policy.

---

# Revised Stage 1 setup

Our confirmed setup is now:

* **Language:** JavaScript
* **Framework:** Next.js
* **Router:** App Router
* **Application code:** `src/` directory
* **Package manager:** npm
* **Linting:** ESLint
* **Styling:** Ordinary CSS
* **Tailwind:** No
* **React Compiler:** No
* **Import alias:** `@/*`
* **Git:** Use your existing repository
* **Node version:** 24.14.0

The App Router and `src/` structure are both officially supported by Next.js. [![](https://www.google.com/s2/favicons?domain=https://nextjs.org&sz=128)Next.js+1](https://nextjs.org/docs/app?utm_source=chatgpt.com)

## Step 1: Check the existing README

Your repository contains a 10-byte `README.md`. Before allowing Next.js to generate its own README, check what is currently inside it:

```PowerShell
Get-Content README.md
```

It is probably only a GitHub placeholder such as:

```
# todo_app
```

If that is all it contains, remove it:

```PowerShell
Remove-Item README.md
```

This does not remove meaningful project documentation because we will create the proper lab README during the project.

## Step 2: Create the Next.js JavaScript project

Run this from inside:

```
C:\Users\shayn\OneDrive\Desktop\Uni 3rd Yr\SDP\todo_app
```

Use this command:

```PowerShell
npx.cmd create-next-app@latest . --js --eslint --app --src-dir --use-npm --no-tailwind --no-react-compiler --import-alias "@/*" --disable-git
```

This explicitly selects JavaScript rather than relying on remembered CLI preferences. The `create-next-app` tool supports all these choices, including JavaScript, ESLint, App Router, `src/`, npm and disabling creation of another Git repository. [![](https://www.google.com/s2/favicons?domain=https://github.com&sz=128)GitHub+1](https://github.com/vercel/next.js/blob/canary/packages/create-next-app/README.md?utm_source=chatgpt.com)

If asked whether to install `create-next-app`, enter:

```
y
```

Do not add SQLite, Jest or any task functionality yet.

## Step 3: Start the generated application

After installation completes, run:

```PowerShell
npm.cmd run dev
```

Open:

```
http://localhost:3000
```

You should see the default Next.js page.

Stop the server with:

```
Ctrl+C
```

## Step 4: Verify the generated project

Run:

```PowerShell
git status
npm.cmd run lint
```

Also run:

```PowerShell
Get-ChildItem
Get-ChildItem src
Get-ChildItem src\app
```

Do **not commit yet**. Paste the terminal output from:

1. `create-next-app`
2. `npm.cmd run lint`
3. `git status`

We will inspect the generated files, simplify the starter page and confirm that the repository is working before making the first coherent commit.

* * *

**You:**

PS C:\Users\shayn\OneDrive\Desktop\Uni 3rd Yr\SDP\todo_app> git status
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   README.md

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .gitignore
        AGENTS.md
        CLAUDE.md
        eslint.config.mjs
        jsconfig.json
        next.config.mjs
        package-lock.json
        package.json
        public/
        src/

no changes added to commit (use "git add" and/or "git commit -a")
PS C:\Users\shayn\OneDrive\Desktop\Uni 3rd Yr\SDP\todo_app> npm.cmd run lint

> todo_app@0.1.0 lint
> eslint

PS C:\Users\shayn\OneDrive\Desktop\Uni 3rd Yr\SDP\todo_app> Get-ChildItem


    Directory: C:\Users\shayn\OneDrive\Desktop\Uni 3rd Yr\SDP\todo_app


Mode                 LastWriteTime         Length Name                                                                                
----                 -------------         ------ ----                                                                                
d-----        2026/07/28     14:57                .next                                                                               
d-----        2026/07/28     14:57                node_modules                                                                        
d-----        2026/07/28     14:56                public                                                                              
d-----        2026/07/28     14:56                src                                                                                 
-a----        2026/07/28     14:56            480 .gitignore                                                                          
-a----        2026/07/28     14:57            327 AGENTS.md                                                                           
-a----        2026/07/28     14:57             11 CLAUDE.md                                                                           
-a----        2026/07/28     14:56            400 eslint.config.mjs                                                                   
-a----        2026/07/28     14:56             77 jsconfig.json                                                                       
-a----        2026/07/28     14:56            121 next.config.mjs                                                                     
-a----        2026/07/28     14:57         211736 package-lock.json                                                                   
-a----        2026/07/28     14:56            366 package.json                                                                        
-a----        2026/07/28     14:56           1449 README.md                                                                           


PS C:\Users\shayn\OneDrive\Desktop\Uni 3rd Yr\SDP\todo_app> Get-ChildItem src


    Directory: C:\Users\shayn\OneDrive\Desktop\Uni 3rd Yr\SDP\todo_app\src


Mode                 LastWriteTime         Length Name                                                                                
----                 -------------         ------ ----                                                                                
d-----        2026/07/28     14:56                app                                                                                 


PS C:\Users\shayn\OneDrive\Desktop\Uni 3rd Yr\SDP\todo_app> Get-ChildItem src\app


    Directory: C:\Users\shayn\OneDrive\Desktop\Uni 3rd Yr\SDP\todo_app\src\app


Mode                 LastWriteTime         Length Name                                                                                
----                 -------------         ------ ----                                                                                
-a----        2026/07/28     14:56          25931 favicon.ico                                                                         
-a----        2026/07/28     14:56            697 globals.css                                                                         
-a----        2026/07/28     14:56            551 layout.js                                                                           
-a----        2026/07/28     14:56           2075 page.js                                                                             
-a----        2026/07/28     14:56           2432 page.module.css                                                                     


PS C:\Users\shayn\OneDrive\Desktop\Uni 3rd Yr\SDP\todo_app>

* * *

**ChatGPT:**

Stage 1 is progressing correctly.

Confirmed:

* The Next.js project was created successfully.
* JavaScript is configured.
* ESLint runs with no errors.
* `node_modules` and `.next` are correctly ignored by Git.
* The project files are inside the existing repository.
* The working tree contains the expected generated application files.

Do **not commit yet**. Two files need checking first:

```
AGENTS.md
CLAUDE.md
```

These are not normal `create-next-app` files. They may have been created by an AI coding tool or extension. We should establish what created them and whether they belong in the submission. This matters because the AI policy requires accurate attribution of tools used for code generation, inline editing and review.

Run:

```PowerShell
Get-Content package.json
Get-Content README.md
Get-Content AGENTS.md
Get-Content CLAUDE.md
Get-Content src\app\layout.js
```

Also confirm that the generated application starts:

```PowerShell
npm.cmd run dev
```

Open:

```
http://localhost:3000
```

Once the page loads, stop the server with:

```
Ctrl+C
```

Then run:

```PowerShell
git diff -- README.md
```

Paste those outputs here. We will then:

1. Decide whether `AGENTS.md` and `CLAUDE.md` should remain.
2. Confirm the installed Next.js and React versions.
3. Replace the generic starter screen with a small Todo application shell.
4. Add accurate initial README instructions.
5. Run lint and the development server again.
6. Make the first coherent commit.

Because this stage will use AI-generated code, the first commit will need an attribution trailer such as:

```
Set up JavaScript Next.js application shell

Assisted-by: ChatGPT-Web[GPT-5.6 Thinking]
```

That format follows the code-attribution requirement in the attached AI policy.

* * *

**You:**

Uploaded a fileUploaded a fileyes, it runs

* * *

**ChatGPT:**

Great. The successful development run confirms that the generated Next.js project works.

## Review of the extra files

`AGENTS.md` contains instructions aimed at AI coding agents, while `CLAUDE.md` only points to `AGENTS.md`. Neither file contains application code or contributes to the runtime.

I recommend deleting both because:

* You are using ChatGPT Web rather than a repository-based Claude agent.
* They are unnecessary for the lab.
* They may confuse the marker about which AI tools were used.
* AI use will still be transparently recorded in the README, commits and transcript, as required by the policy.

## Stage 1A: Clean the generated project

Run:

```PowerShell
Remove-Item AGENTS.md
Remove-Item CLAUDE.md
Remove-Item src\app\page.module.css

New-Item -ItemType Directory -Force src\components
New-Item -ItemType Directory -Force src\app\archived
```

## Stage 1B: Create the shared application shell

Create:

```
src/components/AppShell.js
```

Add:

```JavaScript
import Link from "next/link";

export default function AppShell({
  activeView,
  title,
  description,
  children,
}) {
  return (
    <main className="app-shell">
      <header className="app-header">
        <p className="eyebrow">COMS3011A Lab 1</p>
        <h1>Task Tracker</h1>
        <p className="app-description">
          A local-first todo application for managing tasks.
        </p>
      </header>

      <nav className="view-tabs" aria-label="Task views">
        <Link
          href="/"
          className={activeView === "active" ? "tab active-tab" : "tab"}
          aria-current={activeView === "active" ? "page" : undefined}
        >
          Active tasks
        </Link>

        <Link
          href="/archived"
          className={activeView === "archived" ? "tab active-tab" : "tab"}
          aria-current={activeView === "archived" ? "page" : undefined}
        >
          Archived tasks
        </Link>
      </nav>

      <section className="content-card" aria-labelledby="view-title">
        <div className="section-heading">
          <h2 id="view-title">{title}</h2>
          <p>{description}</p>
        </div>

        {children}
      </section>
    </main>
  );
}
```

## Stage 1C: Replace the active-task page

Replace everything in:

```
src/app/page.js
```

with:

```JavaScript
import AppShell from "@/components/AppShell";

export default function Home() {
  return (
    <AppShell
      activeView="active"
      title="Active tasks"
      description="Your Todo, In-Progress and Complete tasks will appear here."
    >
      <div className="empty-state">
        <h3>No active tasks</h3>
        <p>There are currently no active tasks to display.</p>
      </div>
    </AppShell>
  );
}
```

Notice that the status is written as `In-Progress`, matching the exact terminology in the brief.

## Stage 1D: Add the archived-task page

Create:

```
src/app/archived/page.js
```

Add:

```JavaScript
import AppShell from "@/components/AppShell";

export default function ArchivedTasksPage() {
  return (
    <AppShell
      activeView="archived"
      title="Archived tasks"
      description="Archived tasks remain viewable and are never permanently deleted."
    >
      <div className="empty-state">
        <h3>No archived tasks</h3>
        <p>There are currently no archived tasks to display.</p>
      </div>
    </AppShell>
  );
}
```

## Stage 1E: Update the layout

Replace everything in:

```
src/app/layout.js
```

with:

```JavaScript
import "./globals.css";

export const metadata = {
  title: "Task Tracker",
  description: "A local-first todo application for COMS3011A Lab 1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

## Stage 1F: Replace the generated CSS

Replace everything in:

```
src/app/globals.css
```

with:

```CSS
:root {
  --background: #f4f6f8;
  --surface: #ffffff;
  --text: #1f2933;
  --muted-text: #5f6c7b;
  --border: #d8dee5;
  --primary: #263f73;
  --primary-light: #e8edf8;
  --focus: #315ea8;
}

* {
  box-sizing: border-box;
}

html {
  min-height: 100%;
  background: var(--background);
}

body {
  min-height: 100vh;
  margin: 0;
  background: var(--background);
  color: var(--text);
  font-family: Arial, Helvetica, sans-serif;
}

a {
  color: inherit;
}

button,
input,
select,
textarea {
  font: inherit;
}

.app-shell {
  width: min(100% - 2rem, 960px);
  margin: 0 auto;
  padding: 3rem 0;
}

.app-header {
  margin-bottom: 2rem;
}

.eyebrow {
  margin: 0 0 0.5rem;
  color: var(--primary);
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.app-header h1 {
  margin: 0;
  font-size: clamp(2rem, 6vw, 3rem);
}

.app-description {
  max-width: 650px;
  margin: 0.75rem 0 0;
  color: var(--muted-text);
  line-height: 1.6;
}

.view-tabs {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--border);
}

.tab {
  padding: 0.8rem 1rem;
  border-bottom: 3px solid transparent;
  color: var(--muted-text);
  font-weight: 600;
  text-decoration: none;
}

.tab:hover {
  color: var(--primary);
}

.tab:focus-visible {
  border-radius: 0.25rem;
  outline: 3px solid var(--focus);
  outline-offset: 2px;
}

.active-tab {
  border-bottom-color: var(--primary);
  color: var(--primary);
}

.content-card {
  min-height: 320px;
  padding: 2rem;
  border: 1px solid var(--border);
  border-radius: 0.75rem;
  background: var(--surface);
}

.section-heading {
  padding-bottom: 1.25rem;
  border-bottom: 1px solid var(--border);
}

.section-heading h2 {
  margin: 0;
  font-size: 1.5rem;
}

.section-heading p {
  margin: 0.5rem 0 0;
  color: var(--muted-text);
  line-height: 1.5;
}

.empty-state {
  padding: 4rem 1rem;
  text-align: center;
}

.empty-state h3 {
  margin: 0;
}

.empty-state p {
  margin: 0.75rem 0 0;
  color: var(--muted-text);
}

@media (max-width: 600px) {
  .app-shell {
    width: min(100% - 1rem, 960px);
    padding: 1.5rem 0;
  }

  .content-card {
    padding: 1.25rem;
  }

  .view-tabs {
    width: 100%;
  }

  .tab {
    flex: 1;
    text-align: center;
  }
}
```

The colours here are only general styling. They do not yet represent task statuses. We will add written status labels alongside styling when tasks are implemented.

## Stage 1G: Update the README

Replace the generated `README.md` with:

````Markdown
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
npm install
````

### Start the development server

```Bash
npm run dev
```

Open `http://localhost:3000` in a browser.

### Run the linter

```Bash
npm run lint
```

Testing and database setup commands will be added when those parts of the application are implemented.

## AI Usage

This repository makes use of AI code generation using the following tools: ChatGPT-Web[GPT-5.6 Thinking].

This repository does not use AI in-line editing tools.

This repository makes use of AI code review using the following tools: ChatGPT-Web[GPT-5.6 Thinking].

````

The README will be expanded during later stages to include the final install, database, run and test commands required for a clean clone. :contentReference[oaicite:4]{index=4}

## Stage 1H: Verify everything

Run:

```powershell
npm.cmd run lint
npm.cmd run build
npm.cmd run dev
````

Check both pages:

```
http://localhost:3000
http://localhost:3000/archived
```

Stop the server with `Ctrl+C`, then run:

```PowerShell
git status
```

## First commit

Once lint, build and both pages work:

```PowerShell
git add .
```

Then commit:

```PowerShell
git commit -m "Set up JavaScript Next.js application shell" -m "Creates the active and archived task views and records the initial clean-clone setup instructions." -m "Assisted-by: ChatGPT-Web[GPT-5.6 Thinking]"
```

Push it:

```PowerShell
git push origin main
```

This creates the first coherent working commit and includes the AI attribution required when AI assists with code generation.

* * *

**You:**

should i commit first?? i havt commited yet?? or only after all those steps?

* * *

**ChatGPT:**

Yes, **commit now before making the application-shell changes**.

Your current project is already a coherent, working stage:

* Next.js JavaScript project created
* Application starts successfully
* ESLint passes
* Git repository configured

Keeping the initial scaffold as its own commit will strengthen your commit history. The rubric rewards commits that represent coherent working slices rather than large combined changes.

First remove the two unnecessary AI-agent instruction files:

```PowerShell
Remove-Item AGENTS.md
Remove-Item CLAUDE.md
```

Then confirm everything still passes:

```PowerShell
npm.cmd run lint
git status
```

Commit the current scaffold:

```PowerShell
git add .
git commit -m "Initialize JavaScript Next.js project" -m "Sets up the App Router project with ESLint, the src directory, and npm configuration." -m "Assisted-by: ChatGPT-Web[GPT-5.6 Thinking]"
git push origin main
```

The `Assisted-by` line records the AI assistance in accordance with the attached policy.

After that, make the active and archived application-shell changes. Those changes will become your **second commit**, for example:

```
Add active and archived task views
```

* * *

**You:**

ok, write the second commit for me pls, with AI policy things too please. (i changed some of your words but thats all

* * *

**ChatGPT:**

Because the application shell was AI-assisted, keep the attribution even though you changed some wording yourself. The policy requires AI-generated code to be identified in the relevant commit.

Run:

```PowerShell
git add .

git commit -m "Add active and archived task views" `
  -m "Replaces the default Next.js page with a reusable application shell, navigation between task views, empty states, and initial project documentation." `
  -m "Assisted-by: ChatGPT-Web[GPT-5.6 Thinking]"

git push origin main
```

Then check:

```PowerShell
git status
git log --oneline -2
```

Your README should also declare that the repository uses `ChatGPT-Web[GPT-5.6 Thinking]` for code generation and code review, because the policy requires repository-level attribution once AI code generation has been used.

* * *

**You:**

Task Tracker
A local-first todo application created for COMS3011A Lab 1.

The application is built with Next.js and JavaScript and is designed to run locally for a single user.

Running It
Requirements
Node.js 24.14.0
npm 11.9.0
Install dependencies
From the project root, run:

npm install
readme.. so how do we fix that?

* * *

**ChatGPT:**

Your README is not wrong; it is simply **incomplete**. Before the second commit, add the required Markdown structure, initial third-party-code information, and AI declarations.

The final repository must document Third-Party Code, Database Design and Running It. The AI policy also requires the README to declare code generation, inline editing and code review use or non-use.

Replace your current `README.md` with:

````Markdown
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
````

A few important points:

* Use `npm ci` for the clean-clone installation instructions because your repository has a committed `package-lock.json`.
* The Database Design section is currently labelled as unfinished. That is acceptable during development, but it **must be replaced with the exact implemented schema before submission**.
* Check `package.json`. If it contains another direct dependency or development dependency, add it to Third-Party Code with a reason.
* Your edits to the wording do not remove the need for AI attribution because AI assisted with planning, code generation and review.

Then verify:

```PowerShell
npm.cmd run lint
npm.cmd run build
git diff -- README.md
git status
```

Once everything passes, use this as your second commit:

```PowerShell
git add .

git commit -m "Add active and archived task views" `
  -m "Replaces the default Next.js page with a reusable application shell, navigation between task views, empty states, styling, and initial project documentation." `
  -m "Assisted-by: ChatGPT-Web[GPT-5.6 Thinking]"

git push origin main
```

The `Assisted-by` trailer follows the AI policy’s required format for commits containing AI-assisted code.

* * *

**You:**

ok, lets go to the next stage!! how to first pull from github incase??

* * *

**ChatGPT:**

From the repository folder in VS Code, run:

```PowerShell
git status
```

You want to see:

```
nothing to commit, working tree clean
```

Then pull safely from GitHub:

```PowerShell
git pull --ff-only origin main
```

Using `--ff-only` prevents Git from creating an unexpected merge commit. Since you recently pushed from this computer, it will probably respond:

```
Already up to date.
```

Then confirm your recent commits:

```PowerShell
git log --oneline -5
```

Do not use `git reset --hard` or force-pull commands, as they could discard your work.

If `git status` shows uncommitted changes, stop before pulling and paste the output. Otherwise, paste the output from the pull and we will begin **Stage 2: SQLite database setup**.

* * *

**You:**

lets do stage 2

* * *

**ChatGPT:**

# Stage 2: SQLite database setup

This stage will add:

* The SQLite dependency
* A committed schema file
* A reproducible database initialisation command
* A reusable database connection module
* Accurate database documentation

This directly supports the rubric requirement for a real SQLite schema, sensible constraints, an archive flag, derived overdue behaviour and documentation matching the shipped database.

## 1. Confirm your repository is clean

Run:

```PowerShell
git status
git pull --ff-only origin main
```

Proceed only when `git status` says:

```
nothing to commit, working tree clean
```

---

## 2. Install SQLite

We will use `better-sqlite3`.

It provides a straightforward synchronous SQLite API, which suits this small local single-user application. Version `13.0.1` is the current patch release and specifically fixes a parameter-binding problem involving Jest tests, which will be useful when we add testing later. [![](https://www.google.com/s2/favicons?domain=https://github.com&sz=128)GitHub+1](https://github.com/WiseLibs/better-sqlite3)

Run:

```PowerShell
npm.cmd install better-sqlite3@13.0.1
```

Then verify:

```PowerShell
npm.cmd ls better-sqlite3
```

You should see something similar to:

```
better-sqlite3@13.0.1
```

The built-in `node:sqlite` module is not being used because the documentation for your exact Node 24.14.0 version still identifies it as experimental. [![](https://www.google.com/s2/favicons?domain=https://nodejs.org&sz=128)Node.js](https://nodejs.org/download/release/v24.14.0/docs/api/sqlite.html)

If installation produces an error, stop before creating the other files and paste the complete error.

---

# 3. Create the database folders

Run:

```PowerShell
New-Item -ItemType Directory -Force src\db
New-Item -ItemType Directory -Force src\lib
New-Item -ItemType Directory -Force scripts
```

---

# 4. Create the schema

Create:

```
src/db/schema.sql
```

Add:

```SQL
CREATE TABLE IF NOT EXISTS tasks (
  id INTEGER PRIMARY KEY,

  title TEXT NOT NULL
    CHECK (length(trim(title)) > 0),

  description TEXT NOT NULL
    CHECK (length(trim(description)) > 0),

  due_date TEXT NOT NULL
    CHECK (
      due_date GLOB '[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]'
      AND date(due_date) = due_date
    ),

  topic TEXT NOT NULL
    CHECK (length(trim(topic)) > 0),

  status TEXT NOT NULL DEFAULT 'Todo'
    CHECK (status IN ('Todo', 'In-Progress', 'Complete')),

  archived INTEGER NOT NULL DEFAULT 0
    CHECK (archived IN (0, 1))
) STRICT;
```

## What this schema enforces

* Every task has a title, description, due date and topic.
* Blank text is rejected.
* Due dates use `YYYY-MM-DD`.
* New tasks default to `Todo`.
* Only the three fixed status values are permitted.
* Archive is stored as `0` or `1`.
* Overdue is deliberately not stored.
* There is only one table and therefore no table relationships.

This matches the brief’s fixed task fields, statuses and non-destructive archiving requirement.

---

# 5. Create the database initialisation script

Create:

```
scripts/init-db.mjs
```

Add:

```JavaScript
import Database from "better-sqlite3";
import {
  mkdirSync,
  readFileSync,
} from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, "..");

const configuredPath = process.env.DATABASE_PATH;

const databasePath =
  configuredPath === ":memory:"
    ? ":memory:"
    : path.resolve(
        projectRoot,
        configuredPath || path.join("data", "tasks.db"),
      );

const schemaPath = path.join(projectRoot, "src", "db", "schema.sql");

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

  console.log(`Database initialised successfully at: ${databasePath}`);
} finally {
  database.close();
}
```

This script:

* Creates the `data` directory when necessary.
* Creates or opens the SQLite database.
* Reads the committed schema.
* Creates the table.
* Closes the connection safely.

---

# 6. Create the reusable database connection

Create:

```
src/lib/database.js
```

Add:

```JavaScript
import Database from "better-sqlite3";
import {
  mkdirSync,
  readFileSync,
} from "node:fs";
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
  const resolvedPath =
    databasePath === ":memory:"
      ? ":memory:"
      : path.resolve(databasePath);

  if (resolvedPath !== ":memory:") {
    mkdirSync(path.dirname(resolvedPath), { recursive: true });
  }

  const database = new Database(resolvedPath);

  database.pragma("foreign_keys = ON");

  if (resolvedPath !== ":memory:") {
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
```

The separate `createDatabase()` function is important because our later tests will be able to create temporary or in-memory databases rather than relying on your personal development database. The rubric specifically requires deterministic tests using a throwaway database.

---

# 7. Add the database command

Run:

```PowerShell
npm.cmd pkg set scripts.db:init="node scripts/init-db.mjs"
```

Check the scripts:

```PowerShell
Get-Content package.json
```

Your scripts should now include something like:

```JSON
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "eslint",
  "db:init": "node scripts/init-db.mjs"
}
```

Do not replace your whole `package.json`; only confirm that `db:init` was added.

---

# 8. Ignore local database files

Open:

```
.gitignore
```

Add this at the bottom:

```gitignore
# Local SQLite database files
/data/*.db
/data/*.db-shm
/data/*.db-wal
```

The schema must be committed, but your personal database contents should not be committed.

---

# 9. Update the README

## Running It section

After the install command, add:

````Markdown
### Initialise the database

```bash
npm run db:init
```

This creates the local SQLite database and applies the committed schema.
````

The clean-clone order should now be:

```Bash
npm ci
npm run db:init
npm run dev
```

## Third-Party Code section

Add:

```Markdown
- **better-sqlite3** — provides the SQLite database connection and a straightforward synchronous API suitable for this local single-user application.
```

## Replace the Database Design placeholder

Use:

```Markdown
## Database Design

The application uses SQLite and contains one table named `tasks`.

### Tasks table

| Column | Type | Constraints and purpose |
| --- | --- | --- |
| `id` | INTEGER | Primary key that uniquely identifies each task. |
| `title` | TEXT | Required and cannot be blank. |
| `description` | TEXT | Required and cannot be blank. |
| `due_date` | TEXT | Required calendar date stored in `YYYY-MM-DD` format. |
| `topic` | TEXT | Required and cannot be blank. |
| `status` | TEXT | Required and restricted to `Todo`, `In-Progress` or `Complete`. Defaults to `Todo`. |
| `archived` | INTEGER | Required archive flag restricted to `0` for active or `1` for archived. Defaults to `0`. |

There are no relationships between tables because the application uses only one table.

Archived tasks remain in the `tasks` table. Archiving changes the `archived` value rather than deleting or copying the task.

Overdue is not stored in the database. It will be derived when tasks are read by comparing the due date with the current local date and checking that the status is not `Complete`.
```

The brief requires the database documentation to describe the tables and relationships, even where no relationships exist.

---

# 10. Initialise and verify the database

Run:

```PowerShell
npm.cmd run db:init
```

You should see:

```
Database initialised successfully at: ...\data\tasks.db
```

Check that the database exists:

```PowerShell
Get-ChildItem data
```

Then inspect the created columns:

```PowerShell
node -e "const Database=require('better-sqlite3'); const db=new Database('data/tasks.db'); console.table(db.prepare('PRAGMA table_info(tasks)').all()); db.close();"
```

You should see the seven columns:

```
id
title
description
due_date
topic
status
archived
```

---

# 11. Run the project checks

Run:

```PowerShell
npm.cmd run lint
npm.cmd run build
npm.cmd run db:init
git status
```

Important: `git status` should **not** list:

```
data/tasks.db
```

It should list the code, schema, package and documentation changes.

---

# 12. Stage 2 commit

Review first:

```PowerShell
git diff
git status
```

Then commit:

```PowerShell
git add .

git commit -m "Add SQLite schema and database setup" `
  -m "Adds the constrained tasks table, reusable database connection, database initialisation command, ignored local database files, and matching schema documentation." `
  -m "Assisted-by: ChatGPT-Web[GPT-5.6 Thinking]"

git push origin main
```

The attribution remains necessary even where you modify parts of the generated code, because AI assisted with its design and generation. The policy requires the tool and model to appear in commits involving AI-generated code.

After pushing, check:

```PowerShell
git status
git log --oneline -3
```

Do not start Stage 3 until `npm run db:init`, lint and build all pass.

* * *

**You:**

on step 4, i think it should be that title is compusary and the rest not?? maybe title and due date? lets discuss decisions first, and then pls redo from step 4

* * *

**ChatGPT:**

You are right to pause here. The brief does **not explicitly say** “all four fields are compulsory,” but it does say that **each task carries Title, Description, Due Date and Topic**. The functional walkthrough also creates a task “carrying all four fields.”

That creates two reasonable interpretations.

## Option A: All four fields required

Required:

* Title
* Description
* Due date
* Topic

Advantages:

* Safest interpretation of “each task carries” all four fields.
* Every task can be sorted meaningfully by topic and due date.
* Avoids null or blank values in the database.
* Matches your original approved plan.
* Simpler validation and testing.

Disadvantage:

* Users must enter a description even when they may not need one.

This is the **lowest-risk option for marks**.

## Option B: Title and due date required

Required:

* Title
* Due date

Optional:

* Description
* Topic

Advantages:

* More flexible for users.
* Allows quick task creation.

Risks:

* A task without a topic does not fully appear to “carry” topic information.
* Sorting by topic becomes less meaningful when some tasks have no topic.
* The database and documentation would need to explain how missing topic and description values are represented.
* A strict marker could interpret this as incomplete compliance with the brief.

## My recommendation

Keep **all four fields compulsory**.

The brief gives Title, Description, Due Date and Topic equal status. It does not describe any of them as optional. Because the walkthrough is pass/fail and the rubric rewards a clear, sensible schema, requiring all four is the safer design.

If you strongly prefer optional fields, the safer compromise would be:

* Title: required
* Due date: required
* Topic: required
* Description: optional

That keeps sorting and overdue behaviour reliable, while allowing a task to have no detailed description.

### Decision to approve

Choose one:

**A. All four fields required** — recommended  
**B. Title, due date and topic required; description optional**  
**C. Only title and due date required**

Once you choose, I’ll rewrite Stage 2 from Step 4 with the correct schema, validation assumptions and README documentation.

* * *

**You:**

B

* * *

**ChatGPT:**

Approved: **title, due date and topic are required; description is optional**.

This does not contradict the brief. Every task will still have a description field, but it may contain an empty string when the user leaves it blank. The application must still support creating a task with all four fields for the functional walkthrough.

Continue from **Step 4**.

# Step 4: Create the schema

Create:

```
src/db/schema.sql
```

Add:

```SQL
CREATE TABLE IF NOT EXISTS tasks (
  id INTEGER PRIMARY KEY,

  title TEXT NOT NULL
    CHECK (length(trim(title)) > 0),

  description TEXT NOT NULL DEFAULT '',

  due_date TEXT NOT NULL
    CHECK (
      length(due_date) = 10
      AND due_date GLOB
        '[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]'
    ),

  topic TEXT NOT NULL
    CHECK (length(trim(topic)) > 0),

  status TEXT NOT NULL DEFAULT 'Todo'
    CHECK (status IN ('Todo', 'In-Progress', 'Complete')),

  archived INTEGER NOT NULL DEFAULT 0
    CHECK (archived IN (0, 1))
) STRICT;
```

## What this schema enforces

* `title` is compulsory and cannot be blank.
* `description` is optional.
* An omitted description is stored as an empty string rather than `NULL`.
* `due_date` is compulsory and must use `YYYY-MM-DD` format.
* `topic` is compulsory and cannot be blank.
* New tasks default to `Todo`.
* Only the three fixed statuses are accepted.
* Archive is represented by `0` or `1`.
* Overdue is not stored.

Actual calendar validation, such as rejecting `2026-15-99`, will also be performed by the application before saving. The database constraint ensures the correct format without introducing an unnecessarily complicated date constraint.

---

# Step 5: Create the database initialisation script

Create:

```
scripts/init-db.mjs
```

Add:

```JavaScript
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
```

Although this project currently has no relationships, enabling foreign-key enforcement is a sensible default and will not affect the one-table design.

---

# Step 6: Create the reusable database connection

Create:

```
src/lib/database.js
```

Add:

```JavaScript
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
```

The `createDatabase()` function will later allow the tests to create isolated temporary databases rather than using your personal development database. That is required for the highest testing level.

---

# Step 7: Add the database command

Run:

```PowerShell
npm.cmd pkg set scripts.db:init="node scripts/init-db.mjs"
```

Then check:

```PowerShell
Get-Content package.json
```

Your scripts should include:

```JSON
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "eslint",
  "db:init": "node scripts/init-db.mjs"
}
```

Do not replace the entire `package.json`. Only confirm that the new script was added correctly.

---

# Step 8: Ignore local database files

At the bottom of `.gitignore`, add:

```gitignore
# Local SQLite database files
/data/*.db
/data/*.db-shm
/data/*.db-wal
```

The schema must be committed, but the contents of your personal task database should not be committed.

---

# Step 9: Update the README

## Add the database setup command

Under the installation instructions, add:

````Markdown
### Initialise the database

```bash
npm run db:init
```

This creates the local SQLite database and applies the committed schema.
````

The clean-clone commands should now appear in this order:

```Bash
npm ci
npm run db:init
npm run dev
```

## Add `better-sqlite3`

Under **Third-Party Code**, add:

```Markdown
- **better-sqlite3** — provides the SQLite database connection and a straightforward synchronous API suitable for this local single-user application.
```

## Replace the Database Design section

Use:

```Markdown
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

Overdue is not stored in the database. It will be derived when tasks are read by comparing the due date with the current local date and checking that the status is not `Complete`.

Title, due date and topic are required when creating or editing a task. Description is optional.
```

The documentation must accurately describe the shipped schema, including its tables and relationships.

---

# Step 10: Initialise the database

Run:

```PowerShell
npm.cmd run db:init
```

Expected result:

```
Database initialised successfully at: ...\data\tasks.db
```

Then check:

```PowerShell
Get-ChildItem data
```

Inspect the table:

```PowerShell
node -e "const Database=require('better-sqlite3'); const db=new Database('data/tasks.db'); console.table(db.prepare('PRAGMA table_info(tasks)').all()); db.close();"
```

You should see:

```
id
title
description
due_date
topic
status
archived
```

You may notice that SQLite reports `description` as `NOT NULL`. That is correct: it is optional to the **user**, but the database stores a missing description as `''` rather than as `NULL`.

---

# Step 11: Check the schema constraints

Run this test to confirm a valid task can be inserted:

```PowerShell
node -e "const Database=require('better-sqlite3'); const db=new Database('data/tasks.db'); const result=db.prepare('INSERT INTO tasks (title, due_date, topic) VALUES (?, ?, ?)').run('Test task','2026-08-04','University'); console.log(result); console.table(db.prepare('SELECT * FROM tasks').all()); db.prepare('DELETE FROM tasks WHERE id = ?').run(result.lastInsertRowid); db.close();"
```

The displayed task should have:

```
description: ""
status: "Todo"
archived: 0
```

The command deletes the temporary test row afterward. Permanent deletion will **not** be exposed as an application feature; this is only a direct development check of the schema.

---

# Step 12: Run all checks

Run:

```PowerShell
npm.cmd run lint
npm.cmd run build
npm.cmd run db:init
git status
```

`git status` should not show:

```
data/tasks.db
```

It should show changes such as:

```
.gitignore
README.md
package.json
package-lock.json
scripts/init-db.mjs
src/db/schema.sql
src/lib/database.js
```

Review them:

```PowerShell
git diff
git status
```

---

# Stage 2 commit

Once database initialisation, lint and build all pass:

```PowerShell
git add .

git commit -m "Add SQLite schema and database setup" `
  -m "Adds the constrained tasks table, reusable database connection, database initialisation command, ignored local database files, and matching schema documentation. Title, due date and topic are required while description remains optional." `
  -m "Assisted-by: ChatGPT-Web[GPT-5.6 Thinking]"

git push origin main
```

This attribution is required because AI assisted with the schema, code and documentation.

* * *

**You:**

great, next step!

* * *

**ChatGPT:**

# Stage 3: Create and display tasks

This stage will implement only:

* Creating a task
* Validating title, due date and topic
* Allowing an optional description
* Automatically assigning `Todo`
* Saving to SQLite
* Displaying active tasks ordered by due date
* Preserving tasks after reload and restart

Editing, archiving, overdue calculation and user-controlled sorting remain for later stages. The brief requires created tasks to carry all four fields and appear in the list; the walkthrough will specifically test creation with all four fields.

We will use a Next.js Server Action for submission and React’s `useActionState` for validation feedback. This is the current documented App Router form pattern. [![](https://www.google.com/s2/favicons?domain=https://nextjs.org&sz=128)Next.js+1](https://nextjs.org/docs/app/guides/forms?utm_source=chatgpt.com)

## Step 1: Confirm Stage 2 is safely committed

Run:

```PowerShell
git status
git pull --ff-only origin main
git log --oneline -4
```

Proceed when the working tree is clean and your Stage 2 SQLite commit appears in the history.

---

## Step 2: Create the task data functions

Create:

```
src/lib/tasks.js
```

Add:

```JavaScript
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
```

Important details:

* `status` is not inserted, so SQLite applies the schema default of `Todo`.
* `archived` is not inserted, so SQLite applies the default of `0`.
* The default display order is due date, as previously approved.
* No overdue value is calculated or stored yet.

---

## Step 3: Create the Server Action

Create:

```
src/app/actions.js
```

Add:

```JavaScript
"use server";

import { revalidatePath } from "next/cache";
import { insertTask } from "@/lib/tasks";

function readTextField(formData, fieldName) {
  const value = formData.get(fieldName);

  return typeof value === "string" ? value.trim() : "";
}

function isValidDate(dateValue) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateValue)) {
    return false;
  }

  const date = new Date(`${dateValue}T00:00:00.000Z`);

  return (
    !Number.isNaN(date.valueOf()) &&
    date.toISOString().slice(0, 10) === dateValue
  );
}

export async function createTaskAction(previousState, formData) {
  const title = readTextField(formData, "title");
  const description = readTextField(formData, "description");
  const dueDate = readTextField(formData, "dueDate");
  const topic = readTextField(formData, "topic");

  const errors = {};

  if (!title) {
    errors.title = "Enter a task title.";
  }

  if (!dueDate) {
    errors.dueDate = "Select a due date.";
  } else if (!isValidDate(dueDate)) {
    errors.dueDate = "Enter a valid due date.";
  }

  if (!topic) {
    errors.topic = "Enter a topic.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Please correct the highlighted fields.",
      errors,
      submissionId: previousState?.submissionId ?? 0,
    };
  }

  try {
    insertTask({
      title,
      description,
      dueDate,
      topic,
    });
  } catch (error) {
    console.error("Task creation failed:", error);

    return {
      success: false,
      message: "The task could not be saved. Please try again.",
      errors: {},
      submissionId: previousState?.submissionId ?? 0,
    };
  }

  revalidatePath("/");

  return {
    success: true,
    message: "Task created successfully.",
    errors: {},
    submissionId: Date.now(),
  };
}
```

This performs server-side validation as well as the browser validation we will add to the form. `revalidatePath("/")` refreshes the active page after the database mutation so the new task appears. [![](https://www.google.com/s2/favicons?domain=https://nextjs.org&sz=128)Next.js](https://nextjs.org/docs/app/api-reference/functions/revalidatePath?utm_source=chatgpt.com)

Past dates are deliberately accepted. The optional warning remains postponed until the required functionality is complete.

---

## Step 4: Create the task form

Create:

```
src/components/TaskForm.js
```

Add:

```JavaScript
"use client";

import {
  useActionState,
  useEffect,
  useRef,
} from "react";
import { createTaskAction } from "@/app/actions";

const initialState = {
  success: false,
  message: "",
  errors: {},
  submissionId: 0,
};

export default function TaskForm() {
  const [state, formAction, pending] = useActionState(
    createTaskAction,
    initialState,
  );

  const formRef = useRef(null);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success, state.submissionId]);

  return (
    <form
      ref={formRef}
      action={formAction}
      className="task-form"
    >
      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="title">
            Title <span aria-hidden="true">*</span>
          </label>

          <input
            id="title"
            name="title"
            type="text"
            required
            aria-invalid={Boolean(state.errors?.title)}
            aria-describedby={
              state.errors?.title ? "title-error" : undefined
            }
          />

          {state.errors?.title && (
            <p id="title-error" className="field-error">
              {state.errors.title}
            </p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="topic">
            Topic <span aria-hidden="true">*</span>
          </label>

          <input
            id="topic"
            name="topic"
            type="text"
            required
            aria-invalid={Boolean(state.errors?.topic)}
            aria-describedby={
              state.errors?.topic ? "topic-error" : undefined
            }
          />

          {state.errors?.topic && (
            <p id="topic-error" className="field-error">
              {state.errors.topic}
            </p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="dueDate">
            Due date <span aria-hidden="true">*</span>
          </label>

          <input
            id="dueDate"
            name="dueDate"
            type="date"
            required
            aria-invalid={Boolean(state.errors?.dueDate)}
            aria-describedby={
              state.errors?.dueDate
                ? "due-date-error"
                : undefined
            }
          />

          {state.errors?.dueDate && (
            <p id="due-date-error" className="field-error">
              {state.errors.dueDate}
            </p>
          )}
        </div>

        <div className="form-field form-field-full">
          <label htmlFor="description">
            Description{" "}
            <span className="optional-label">(optional)</span>
          </label>

          <textarea
            id="description"
            name="description"
            rows="4"
          />
        </div>
      </div>

      <div className="form-actions">
        <button
          type="submit"
          className="primary-button"
          disabled={pending}
        >
          {pending ? "Saving task..." : "Create task"}
        </button>

        {state.message && (
          <p
            className={
              state.success
                ? "form-message success-message"
                : "form-message error-message"
            }
            aria-live="polite"
          >
            {state.message}
          </p>
        )}
      </div>
    </form>
  );
}
```

The form is a Client Component only because it needs interactive submission state and form resetting. The database access remains in server-side files; Next.js pages are Server Components by default. [![](https://www.google.com/s2/favicons?domain=https://nextjs.org&sz=128)Next.js](https://nextjs.org/docs/app/getting-started/server-and-client-components?utm_source=chatgpt.com)

---

## Step 5: Create the task list

Create:

```
src/components/TaskList.js
```

Add:

```JavaScript
const statusClassNames = {
  Todo: "status-todo",
  "In-Progress": "status-in-progress",
  Complete: "status-complete",
};

export default function TaskList({ tasks }) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <h3>No active tasks</h3>
        <p>Create your first task using the form above.</p>
      </div>
    );
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className="task-card">
          <article>
            <div className="task-card-heading">
              <h4>{task.title}</h4>

              <span
                className={`status-badge ${
                  statusClassNames[task.status] || ""
                }`}
              >
                {task.status}
              </span>
            </div>

            <p className="task-description">
              {task.description ||
                "No description provided."}
            </p>

            <dl className="task-details">
              <div>
                <dt>Topic</dt>
                <dd>{task.topic}</dd>
              </div>

              <div>
                <dt>Due date</dt>
                <dd>
                  <time dateTime={task.due_date}>
                    {task.due_date}
                  </time>
                </dd>
              </div>
            </dl>
          </article>
        </li>
      ))}
    </ul>
  );
}
```

The status is always displayed in writing, so styling is not the only indicator.

---

## Step 6: Replace the active page

Replace the contents of:

```
src/app/page.js
```

with:

```JavaScript
import { connection } from "next/server";
import AppShell from "@/components/AppShell";
import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";
import { getActiveTasks } from "@/lib/tasks";

export default async function Home() {
  await connection();

  const tasks = getActiveTasks();

  return (
    <AppShell
      activeView="active"
      title="Active tasks"
      description="Create and manage your active tasks."
    >
      <section
        className="task-section"
        aria-labelledby="create-task-heading"
      >
        <h3 id="create-task-heading">Create a task</h3>

        <p className="section-introduction">
          Title, topic and due date are required.
          Description is optional.
        </p>

        <TaskForm />
      </section>

      <section
        className="task-section"
        aria-labelledby="task-list-heading"
      >
        <div className="task-list-heading">
          <div>
            <h3 id="task-list-heading">Your tasks</h3>
            <p className="section-introduction">
              Tasks are currently ordered by due date.
            </p>
          </div>

          <p className="task-count">
            {tasks.length} {tasks.length === 1 ? "task" : "tasks"}
          </p>
        </div>

        <TaskList tasks={tasks} />
      </section>
    </AppShell>
  );
}
```

`connection()` makes the database-backed page render at request time rather than treating it as static build output. [![](https://www.google.com/s2/favicons?domain=https://nextjs.org&sz=128)Next.js](https://nextjs.org/docs/app/api-reference/functions/connection?utm_source=chatgpt.com)

No change is needed to `next.config.mjs`: current Next.js automatically treats `better-sqlite3` as a server-external package. [![](https://www.google.com/s2/favicons?domain=https://nextjs.org&sz=128)Next.js](https://nextjs.org/docs/app/api-reference/config/next-config-js/serverExternalPackages?utm_source=chatgpt.com)

---

## Step 7: Add the CSS

Add the following to the bottom of:

```
src/app/globals.css
```

```CSS
.task-section {
  padding: 1.75rem 0;
}

.task-section + .task-section {
  border-top: 1px solid var(--border);
}

.task-section h3 {
  margin: 0;
  font-size: 1.2rem;
}

.section-introduction {
  margin: 0.5rem 0 0;
  color: var(--muted-text);
  line-height: 1.5;
}

.task-form {
  margin-top: 1.5rem;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.form-field-full {
  grid-column: 1 / -1;
}

.form-field label {
  font-weight: 700;
}

.optional-label {
  color: var(--muted-text);
  font-size: 0.9rem;
  font-weight: 400;
}

.form-field input,
.form-field textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border);
  border-radius: 0.4rem;
  background: var(--surface);
  color: var(--text);
}

.form-field textarea {
  min-height: 100px;
  resize: vertical;
}

.form-field input:focus,
.form-field textarea:focus {
  border-color: var(--focus);
  outline: 3px solid rgba(49, 94, 168, 0.2);
}

.form-field input[aria-invalid="true"],
.form-field textarea[aria-invalid="true"] {
  border-color: #a82727;
}

.field-error {
  margin: 0;
  color: #a82727;
  font-size: 0.9rem;
}

.form-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1.5rem;
}

.primary-button {
  padding: 0.75rem 1.15rem;
  border: 0;
  border-radius: 0.4rem;
  background: var(--primary);
  color: #ffffff;
  cursor: pointer;
  font-weight: 700;
}

.primary-button:hover {
  opacity: 0.9;
}

.primary-button:focus-visible {
  outline: 3px solid var(--focus);
  outline-offset: 3px;
}

.primary-button:disabled {
  cursor: not-allowed;
  opacity: 0.65;
}

.form-message {
  margin: 0;
  font-size: 0.95rem;
}

.success-message {
  color: #246b3c;
}

.error-message {
  color: #a82727;
}

.task-list-heading {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
}

.task-count {
  margin: 0;
  color: var(--muted-text);
  white-space: nowrap;
}

.task-list {
  display: grid;
  gap: 1rem;
  margin: 1.5rem 0 0;
  padding: 0;
  list-style: none;
}

.task-card {
  padding: 1.25rem;
  border: 1px solid var(--border);
  border-radius: 0.6rem;
  background: var(--surface);
}

.task-card-heading {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
}

.task-card-heading h4 {
  margin: 0;
  font-size: 1.1rem;
}

.status-badge {
  flex-shrink: 0;
  padding: 0.3rem 0.6rem;
  border: 1px solid transparent;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 700;
}

.status-todo {
  border-color: #9aa4af;
  background: #eef1f4;
  color: #36414d;
}

.status-in-progress {
  border-color: #6f8fc4;
  background: #e8eef9;
  color: #263f73;
}

.status-complete {
  border-color: #73a581;
  background: #e8f4eb;
  color: #24613a;
}

.task-description {
  margin: 0.9rem 0;
  color: var(--muted-text);
  line-height: 1.5;
}

.task-details {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 2rem;
  margin: 0;
}

.task-details div {
  display: flex;
  gap: 0.4rem;
}

.task-details dt {
  font-weight: 700;
}

.task-details dd {
  margin: 0;
}

@media (max-width: 600px) {
  .form-grid {
    grid-template-columns: 1fr;
  }

  .form-field-full {
    grid-column: auto;
  }

  .form-actions {
    align-items: stretch;
    flex-direction: column;
  }

  .task-list-heading,
  .task-card-heading {
    align-items: flex-start;
    flex-direction: column;
  }
}
```

---

# Step 8: Run Stage 3

Run:

```PowerShell
npm.cmd run db:init
npm.cmd run lint
npm.cmd run build
npm.cmd run dev
```

Open:

```
http://localhost:3000
```

Test these scenarios:

1. Submit with a required field missing. The browser or server should reject it.
2. Create a task with all four fields.
3. Confirm its written status is `Todo`.
4. Refresh the page and confirm it remains.
5. Stop and restart the server and confirm it remains.
6. Create a task without a description.
7. Confirm the optional description is displayed as “No description provided.”
8. Confirm earlier due dates appear before later due dates.

The persistence checks directly prepare for the walkthrough requirements.

Stop the server with:

```
Ctrl+C
```

Then run:

```PowerShell
git status
git diff
```

---

# Stage 3 commit

Once lint, build and manual testing pass:

```PowerShell
git add .

git commit -m "Add task creation and active task list" `
  -m "Adds validated task creation through a Server Action, persistent SQLite inserts, due-date ordering, task status styling, and an active task list." `
  -m "Assisted-by: ChatGPT-Web[GPT-5.6 Thinking]"

git push origin main
```

The attribution is required because this stage contains AI-assisted code generation and review.

* * *

**You:**

b4 going to the next stage, are all these needed every time??
if so, ccan we make a function or somthing so that we dont have to type them every time someone wants to run the program
npm.cmd run db:init
npm.cmd run lint
npm.cmd run build
npm.cmd run dev

* * *

**ChatGPT:**

No. Those four commands serve different purposes, and only one is needed for normal use.

* `npm run dev` starts the application.
* `npm run db:init` prepares the database. It only needs to run on a clean clone or after schema changes.
* `npm run lint` checks the code.
* `npm run build` verifies that a production build succeeds.

The brief requires exact clean-clone commands and a reliable startup process, but it does not require users to run lint and build every time they start the app.

## Make database setup automatic

Open `package.json` and add a `predev` and `check` script:

```JSON
"scripts": {
  "dev": "next dev",
  "predev": "npm run db:init",
  "build": "next build",
  "start": "next start",
  "lint": "eslint",
  "db:init": "node scripts/init-db.mjs",
  "check": "npm run lint && npm run build"
}
```

Do not duplicate any scripts already present. Your final `scripts` object should look like the example above.

### How it works

npm automatically runs `predev` before `dev`.

Therefore, when someone runs:

```PowerShell
npm.cmd run dev
```

npm will automatically do this:

```
npm run db:init
next dev
```

Because your schema uses:

```SQL
CREATE TABLE IF NOT EXISTS
```

running database initialisation more than once will not erase existing tasks.

## Commands you will now use

### First time after cloning

```PowerShell
npm.cmd ci
npm.cmd run dev
```

The database is automatically initialised before the server starts.

### Normal daily use

```PowerShell
npm.cmd run dev
```

### Before committing or completing a stage

```PowerShell
npm.cmd run check
```

That single command runs:

```
npm run lint
npm run build
```

### Stop the application

```
Ctrl+C
```

## README update

Change the main running instructions to:

````Markdown
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
````

Use standard `npm` in the README because it is cross-platform. On your own PowerShell terminal, continue using `npm.cmd` because of your computer’s script-execution setting.

## Verify the change

Run:

```PowerShell
npm.cmd run dev
```

Check that the terminal shows database initialisation before Next.js starts. Stop it with `Ctrl+C`, then run:

```PowerShell
npm.cmd run check
git status
```

This is a meaningful configuration improvement, so make it a separate commit:

```PowerShell
git add package.json README.md

git commit -m "Simplify local setup and project checks" `
  -m "Automatically initialises SQLite before the development server starts and adds one command for lint and build verification." `
  -m "Assisted-by: ChatGPT-Web[GPT-5.6 Thinking]"

git push origin main
```

The attribution trailer is required because AI assisted with the repository configuration and documentation.

* * *

**You:**

# Task Tracker

A local-first todo application created for COMS3011A Lab 1.

The application is built with Next.js and JavaScript and is designed to run locally for a single user.

## Running It

### Requirements

- Node.js 24.14.0
- npm 11.9.0

### Install dependencies

From the project root, run:

bash
npm ci

### Start the development server

bash
npm run dev

The database is automatically initialised before the development server starts.

Open http://localhost:3000 in a browser.

### Check the project

To run the linter and verify that the production build succeeds:

bash
npm run check

### Initialise the database manually

The database normally initialises automatically. To initialise it separately, run:

bash
npm run db:init

The database setup and test commands will be added when those parts of the application are implemented.

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

The application uses SQLite and contains one table named tasks.

### Tasks table

| Column | Type | Constraints and purpose |
| --- | --- | --- |
| id | INTEGER | Primary key that uniquely identifies each task. |
| title | TEXT | Required and cannot be blank. |
| description | TEXT | Optional. An omitted description is stored as an empty string. |
| due_date | TEXT | Required calendar date stored in YYYY-MM-DD format. |
| topic | TEXT | Required and cannot be blank. |
| status | TEXT | Required and restricted to Todo, In-Progress or Complete. Defaults to Todo. |
| archived | INTEGER | Required archive flag restricted to 0 for active or 1 for archived. Defaults to 0. |

There are no relationships between tables because the application uses only one table.

Archived tasks remain in the tasks table. Archiving changes the archived value rather than deleting or copying the task.

Overdue is not stored in the database. It will be derived when tasks are read by comparing the due date with the current local date and checking that the status is not Complete.

Title, due date and topic are required when creating or editing a task. Description is optional.

## AI Usage

This repository makes use of AI code generation using the following tools:

- ChatGPT-Web[GPT-5.6 Thinking]

This repository does not use AI in-line editing tools.

This repository makes use of AI code review using the following tools:

- ChatGPT-Web[GPT-5.6 Thinking]

### Document Declaration

The preceding document was planned, reviewed and edited with the assistance of the following:

- ChatGPT-Web[GPT-5.6 Thinking]
correct?

* * *

**ChatGPT:**

Yes, it is **almost correct**. Make one change now.

Remove this sentence:

> The database setup and test commands will be added when those parts of the application are implemented.

The database setup command has already been added, so that sentence is now inaccurate. Replace it with:

> The test command will be added when automated testing is implemented.

Everything else currently matches your project decisions:

* Exact Node and npm versions are stated.
* Clean installation uses `npm ci`.
* `npm run dev` starts the application and automatically initialises SQLite.
* `npm run check` runs lint and build verification.
* Each current direct dependency has a reason.
* The database design matches the implemented one-table schema.
* The absence of relationships is explicitly documented.
* Archive is a flag rather than deletion or another table.
* Overdue is derived rather than stored.
* Your AI code-generation, code-review and inline-tool declarations are present.

These points align with the documentation rubric, which requires justified dependencies, accurate database documentation and exact clean-clone commands.

Your AI section also follows the policy requirement to declare code generation, inline editing and code review use or non-use in the README. The document declaration includes the tool, model and type of assistance as required.

Use this corrected section:

````Markdown
### Initialise the database manually

The database normally initialises automatically. To initialise it separately, run:

```bash
npm run db:init
````

The test command will be added when automated testing is implemented.

````

Once tests are added, replace that final sentence with the actual command, probably:

```markdown
### Run the tests

```bash
npm test
````

* * *

**You:**

ok, lets go to the next phase!!

* * *

**ChatGPT:**

# Stage 4: Edit task details and status

This stage will satisfy the requirement that an existing task can be edited and that the change survives a reload. It will also support the three fixed statuses: `Todo`, `In-Progress` and `Complete`.

Before writing the code, these design decisions need approval.

## Recommended decisions

### 1. Use a separate edit page

Each active task will have an **Edit** link leading to:

```
/tasks/[id]/edit
```

This is simpler than an inline form or modal, keeps the task list uncluttered and gives the edit form its own predictable URL. The Next.js App Router supports file-based dynamic routes for this pattern. [![](https://www.google.com/s2/favicons?domain=https://nextjs.org&sz=128)Next.js+1](https://nextjs.org/docs/app?utm_source=chatgpt.com)

### 2. Edit all task information together

The edit form will contain:

* Title, required
* Description, optional
* Due date, required
* Topic, required
* Status, required

The status dropdown will contain only:

```
Todo
In-Progress
Complete
```

Users may move directly between any statuses. They will not be forced through a sequence.

### 3. Reuse the same validation rules

The edit action will apply the same server-side rules as task creation:

* Trim text values.
* Reject a blank title.
* Reject a blank topic.
* Reject a missing or invalid due date.
* Accept an empty description.
* Reject any status outside the three fixed values.

Next.js supports Server Actions with `useActionState` for form submissions, validation feedback and pending states. [![](https://www.google.com/s2/favicons?domain=https://nextjs.org&sz=128)Next.js+1](https://nextjs.org/docs/app/guides/forms?utm_source=chatgpt.com)

### 4. Return to the active list after saving

After a successful update:

1. Save the changes to SQLite.
2. Refresh the active-task data.
3. Redirect the user to `/`.
4. Display the updated task.

When validation fails, the user remains on the edit page and sees the errors.

### 5. Archived tasks remain read-only

As approved earlier:

* Archived tasks cannot be edited.
* Manually visiting an edit URL for an archived or nonexistent task will show a not-found page.
* Restoration will not be added.

Next.js provides `notFound()` and route-specific not-found handling for missing resources. [![](https://www.google.com/s2/favicons?domain=https://nextjs.org&sz=128)Next.js](https://nextjs.org/docs/app/getting-started/error-handling?utm_source=chatgpt.com)

### 6. Continue postponing the past-date warning

Past due dates will remain valid. The overdue indicator will be implemented in the later overdue-and-sorting stage.

That avoids mixing optional warning behaviour into the required editing functionality.

## Stage 4 files

After approval, we will:

* Add `getTaskById()` and `updateTask()` to `src/lib/tasks.js`.
* Add an update Server Action.
* Create `src/app/tasks/[id]/edit/page.js`.
* Create a reusable `EditTaskForm`.
* Add Edit links to active task cards.
* Add an accessible not-found page.
* Verify that edits survive reload and restart.
* Commit the stage with the required AI attribution.

Reply **“Approve all”** and I’ll provide the exact Stage 4 code and instructions.

* * *

**You:**

can we not have 2 seperate actions, 1 for editing details ( i aprove the seperate page thing) and another thats easy and simple to move between phases?

* * *

**ChatGPT:**

Yes, that is a **better design** and fully satisfies the brief.

We will keep the brief’s term **status** rather than “phase,” because the three fixed values are `Todo`, `In-Progress` and `Complete`.

## Revised Stage 4 design

### 1. Edit task details

Each task will have an **Edit details** link leading to:

```
/tasks/[id]/edit
```

That page will edit only:

* Title
* Description
* Due date
* Topic

It will use:

```JavaScript
updateTaskDetailsAction()
```

After saving, the user returns to the active task list.

### 2. Quick status change

Each active task card will display three compact status buttons:

```
Todo | In-Progress | Complete
```

The current status will be visibly selected. Clicking another button will immediately update only the status without opening the edit page.

It will use a separate action:

```JavaScript
updateTaskStatusAction()
```

This action will:

* Receive the task ID and selected status.
* Validate that the status is one of the three fixed values.
* Update only the `status` column.
* Allow direct movement between any statuses.
* Refresh the active-task list.
* Refuse to update an archived or nonexistent task.

This directly supports the requirement that tasks have one of the three fixed statuses while keeping status changes quick and clear.

## Data functions

We will also keep the database operations separate:

```JavaScript
updateTaskDetails(id, details)
updateTaskStatus(id, status)
```

That is safer than one general update function because changing a status cannot accidentally overwrite the title, topic, description or due date.

## Archived tasks

Archived tasks will remain read-only:

* No edit link.
* No status controls.
* Direct requests to edit or update them will be rejected.

This design is approved from my side. The recommended quick-status interface is the three-button control rather than a dropdown because there are only three choices and it requires one click.

* * *

**You:**

yes, agree. lastly, changing statuses (if change to/from complete) should eventually trigger overdue checks when we do those... otherwise, do stage 4 with those methods

* * *

**ChatGPT:**

# Stage 4: Edit details and change status

Your overdue requirement is approved:

> When a task changes to or from `Complete`, the future overdue calculation must immediately use the updated status.

We will **not store overdue or use a database trigger**. The status action will update SQLite and refresh the active list. When overdue is added, it will be recalculated from the current due date and status every time the list renders. This preserves the rubric requirement that overdue be derived rather than stored.

This stage will add:

* A separate page for editing task details
* A quick three-button status control on each task
* Independent database functions for details and status
* Protection against editing archived or nonexistent tasks
* Direct movement between all three statuses

Next.js supports Server Actions directly through form `action` attributes, dynamic folders such as `[id]`, route revalidation after mutations and `notFound()` for missing records. [![](https://www.google.com/s2/favicons?domain=https://nextjs.org&sz=128)Next.js+3![](https://www.google.com/s2/favicons?domain=https://nextjs.org&sz=128)Next.js+3![](https://www.google.com/s2/favicons?domain=https://nextjs.org&sz=128)Next.js+3](https://nextjs.org/docs/app/guides/forms?utm_source=chatgpt.com)

---

## Step 1: Confirm your current work is committed

Run:

```PowerShell
git status
git pull --ff-only origin main
git log --oneline -5
```

Proceed when the working tree is clean.

---

# Step 2: Update the task database functions

Replace the contents of:

```
src/lib/tasks.js
```

with:

```JavaScript
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
```

The two update functions deliberately affect different columns:

* `updateTaskDetails()` cannot overwrite status.
* `updateTaskStatus()` cannot overwrite task details.

Both refuse to update archived tasks.

---

# Step 3: Update the Server Actions

Replace the contents of:

```
src/app/actions.js
```

with:

```JavaScript
"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  insertTask,
  updateTaskDetails,
  updateTaskStatus,
} from "@/lib/tasks";

const VALID_STATUSES = [
  "Todo",
  "In-Progress",
  "Complete",
];

function readTextField(formData, fieldName) {
  const value = formData.get(fieldName);

  return typeof value === "string" ? value.trim() : "";
}

function readTaskId(formData) {
  const value = readTextField(formData, "taskId");
  const taskId = Number(value);

  if (!Number.isInteger(taskId) || taskId <= 0) {
    return null;
  }

  return taskId;
}

function isValidDate(dateValue) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateValue)) {
    return false;
  }

  const date = new Date(`${dateValue}T00:00:00.000Z`);

  return (
    !Number.isNaN(date.valueOf()) &&
    date.toISOString().slice(0, 10) === dateValue
  );
}

function validateTaskDetails({
  title,
  dueDate,
  topic,
}) {
  const errors = {};

  if (!title) {
    errors.title = "Enter a task title.";
  }

  if (!dueDate) {
    errors.dueDate = "Select a due date.";
  } else if (!isValidDate(dueDate)) {
    errors.dueDate = "Enter a valid due date.";
  }

  if (!topic) {
    errors.topic = "Enter a topic.";
  }

  return errors;
}

export async function createTaskAction(
  previousState,
  formData,
) {
  const title = readTextField(formData, "title");
  const description = readTextField(
    formData,
    "description",
  );
  const dueDate = readTextField(formData, "dueDate");
  const topic = readTextField(formData, "topic");

  const errors = validateTaskDetails({
    title,
    dueDate,
    topic,
  });

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Please correct the highlighted fields.",
      errors,
      submissionId: previousState?.submissionId ?? 0,
    };
  }

  try {
    insertTask({
      title,
      description,
      dueDate,
      topic,
    });
  } catch (error) {
    console.error("Task creation failed:", error);

    return {
      success: false,
      message: "The task could not be saved. Please try again.",
      errors: {},
      submissionId: previousState?.submissionId ?? 0,
    };
  }

  revalidatePath("/");

  return {
    success: true,
    message: "Task created successfully.",
    errors: {},
    submissionId: Date.now(),
  };
}

export async function updateTaskDetailsAction(
  previousState,
  formData,
) {
  const taskId = readTaskId(formData);
  const title = readTextField(formData, "title");
  const description = readTextField(
    formData,
    "description",
  );
  const dueDate = readTextField(formData, "dueDate");
  const topic = readTextField(formData, "topic");

  const errors = validateTaskDetails({
    title,
    dueDate,
    topic,
  });

  if (!taskId) {
    return {
      success: false,
      message: "The task could not be identified.",
      errors: {},
    };
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Please correct the highlighted fields.",
      errors,
    };
  }

  try {
    const updated = updateTaskDetails({
      id: taskId,
      title,
      description,
      dueDate,
      topic,
    });

    if (!updated) {
      return {
        success: false,
        message:
          "This task is no longer available for editing.",
        errors: {},
      };
    }
  } catch (error) {
    console.error("Task details update failed:", error);

    return {
      success: false,
      message:
        "The task details could not be saved. Please try again.",
      errors: {},
    };
  }

  revalidatePath("/");
  revalidatePath(`/tasks/${taskId}/edit`);

  redirect("/");
}

export async function updateTaskStatusAction(formData) {
  const taskId = readTaskId(formData);
  const status = readTextField(formData, "status");

  if (!taskId || !VALID_STATUSES.includes(status)) {
    return;
  }

  try {
    updateTaskStatus(taskId, status);
  } catch (error) {
    console.error("Task status update failed:", error);
    return;
  }

  revalidatePath("/");
}
```

`redirect("/")` is intentionally outside the `try` block because Next.js implements it by throwing a redirect response. [![](https://www.google.com/s2/favicons?domain=https://nextjs.org&sz=128)Next.js+1](https://nextjs.org/docs/app/api-reference/functions/redirect?utm_source=chatgpt.com)

The status action revalidates the active list. When overdue is implemented, this same refresh will ensure that changing to or from `Complete` recalculates the overdue indicator immediately.

---

# Step 4: Create the edit form

Create:

```
src/components/EditTaskForm.js
```

Add:

```JavaScript
"use client";

import Link from "next/link";
import { useActionState } from "react";
import { updateTaskDetailsAction } from "@/app/actions";

export default function EditTaskForm({ task }) {
  const initialState = {
    success: false,
    message: "",
    errors: {},
  };

  const [state, formAction, pending] = useActionState(
    updateTaskDetailsAction,
    initialState,
  );

  return (
    <form action={formAction} className="task-form">
      <input
        type="hidden"
        name="taskId"
        value={task.id}
      />

      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="title">
            Title <span aria-hidden="true">*</span>
          </label>

          <input
            id="title"
            name="title"
            type="text"
            defaultValue={task.title}
            required
            aria-invalid={Boolean(state.errors?.title)}
            aria-describedby={
              state.errors?.title ? "title-error" : undefined
            }
          />

          {state.errors?.title && (
            <p id="title-error" className="field-error">
              {state.errors.title}
            </p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="topic">
            Topic <span aria-hidden="true">*</span>
          </label>

          <input
            id="topic"
            name="topic"
            type="text"
            defaultValue={task.topic}
            required
            aria-invalid={Boolean(state.errors?.topic)}
            aria-describedby={
              state.errors?.topic ? "topic-error" : undefined
            }
          />

          {state.errors?.topic && (
            <p id="topic-error" className="field-error">
              {state.errors.topic}
            </p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="dueDate">
            Due date <span aria-hidden="true">*</span>
          </label>

          <input
            id="dueDate"
            name="dueDate"
            type="date"
            defaultValue={task.due_date}
            required
            aria-invalid={Boolean(
              state.errors?.dueDate,
            )}
            aria-describedby={
              state.errors?.dueDate
                ? "due-date-error"
                : undefined
            }
          />

          {state.errors?.dueDate && (
            <p
              id="due-date-error"
              className="field-error"
            >
              {state.errors.dueDate}
            </p>
          )}
        </div>

        <div className="form-field form-field-full">
          <label htmlFor="description">
            Description{" "}
            <span className="optional-label">
              (optional)
            </span>
          </label>

          <textarea
            id="description"
            name="description"
            rows="5"
            defaultValue={task.description}
          />
        </div>
      </div>

      <div className="form-actions">
        <button
          type="submit"
          className="primary-button"
          disabled={pending}
        >
          {pending ? "Saving changes..." : "Save changes"}
        </button>

        <Link href="/" className="secondary-link">
          Cancel
        </Link>
      </div>

      {state.message && (
        <p
          className="form-message error-message"
          aria-live="polite"
        >
          {state.message}
        </p>
      )}
    </form>
  );
}
```

Status is deliberately absent from this form because it has its own quick action.

---

# Step 5: Create the quick status controls

Create:

```
src/components/TaskStatusControls.js
```

Add:

```JavaScript
import { updateTaskStatusAction } from "@/app/actions";

const STATUSES = [
  "Todo",
  "In-Progress",
  "Complete",
];

export default function TaskStatusControls({
  taskId,
  taskTitle,
  currentStatus,
}) {
  return (
    <div
      className="quick-status"
      aria-label={`Change status for ${taskTitle}`}
    >
      <p className="quick-status-label">
        Change status
      </p>

      <div className="status-button-group">
        {STATUSES.map((status) => {
          const isCurrent = status === currentStatus;

          return (
            <form
              action={updateTaskStatusAction}
              key={status}
            >
              <input
                type="hidden"
                name="taskId"
                value={taskId}
              />

              <button
                type="submit"
                name="status"
                value={status}
                className={
                  isCurrent
                    ? "status-button current-status-button"
                    : "status-button"
                }
                disabled={isCurrent}
                aria-pressed={isCurrent}
              >
                {status}
              </button>
            </form>
          );
        })}
      </div>
    </div>
  );
}
```

Each button submits only:

* Task ID
* New status

It does not submit or rewrite any other task information. Server Actions can receive the form’s `FormData` automatically through the form `action` attribute. [![](https://www.google.com/s2/favicons?domain=https://nextjs.org&sz=128)Next.js+1](https://nextjs.org/docs/app/guides/forms?utm_source=chatgpt.com)

---

# Step 6: Replace the task list

Replace:

```
src/components/TaskList.js
```

with:

```JavaScript
import Link from "next/link";
import TaskStatusControls from "@/components/TaskStatusControls";

const statusClassNames = {
  Todo: "status-todo",
  "In-Progress": "status-in-progress",
  Complete: "status-complete",
};

export default function TaskList({ tasks }) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <h3>No active tasks</h3>
        <p>Create your first task using the form above.</p>
      </div>
    );
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className="task-card">
          <article>
            <div className="task-card-heading">
              <h4>{task.title}</h4>

              <span
                className={`status-badge ${
                  statusClassNames[task.status] || ""
                }`}
              >
                {task.status}
              </span>
            </div>

            <p className="task-description">
              {task.description ||
                "No description provided."}
            </p>

            <dl className="task-details">
              <div>
                <dt>Topic</dt>
                <dd>{task.topic}</dd>
              </div>

              <div>
                <dt>Due date</dt>
                <dd>
                  <time dateTime={task.due_date}>
                    {task.due_date}
                  </time>
                </dd>
              </div>
            </dl>

            <div className="task-card-actions">
              <TaskStatusControls
                taskId={task.id}
                taskTitle={task.title}
                currentStatus={task.status}
              />

              <Link
                href={`/tasks/${task.id}/edit`}
                className="edit-link"
              >
                Edit details
              </Link>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}
```

The written badge remains visible. Colour is still not the only status indicator.

---

# Step 7: Create the edit page

Create these folders:

```PowerShell
New-Item -ItemType Directory -Force "src\app\tasks\[id]\edit"
```

PowerShell treats square brackets specially in some commands. Quoting the path avoids that issue.

Create:

```
src/app/tasks/[id]/edit/page.js
```

Add:

```JavaScript
import { connection } from "next/server";
import { notFound } from "next/navigation";
import AppShell from "@/components/AppShell";
import EditTaskForm from "@/components/EditTaskForm";
import { getTaskById } from "@/lib/tasks";

export default async function EditTaskPage({ params }) {
  await connection();

  const { id } = await params;
  const taskId = Number(id);

  if (!Number.isInteger(taskId) || taskId <= 0) {
    notFound();
  }

  const task = getTaskById(taskId);

  if (!task) {
    notFound();
  }

  return (
    <AppShell
      activeView="active"
      title="Edit task details"
      description="Update the task information below. Status is changed from the active-task list."
    >
      <section
        className="task-section"
        aria-labelledby="edit-task-heading"
      >
        <h3 id="edit-task-heading">
          Edit {task.title}
        </h3>

        <p className="section-introduction">
          Title, topic and due date are required.
          Description is optional.
        </p>

        <EditTaskForm task={task} />
      </section>
    </AppShell>
  );
}
```

Current App Router dynamic route parameters are asynchronous, which is why the page uses `const { id } = await params`. [![](https://www.google.com/s2/favicons?domain=https://nextjs.org&sz=128)Next.js+1](https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes?utm_source=chatgpt.com)

---

# Step 8: Add a not-found page

Create:

```
src/app/not-found.js
```

Add:

```JavaScript
import Link from "next/link";
import AppShell from "@/components/AppShell";

export default function NotFoundPage() {
  return (
    <AppShell
      activeView=""
      title="Task not found"
      description="The requested task does not exist or is no longer available for editing."
    >
      <div className="empty-state">
        <h3>Unable to open this task</h3>

        <p>
          Return to the active-task list and select
          another task.
        </p>

        <Link href="/" className="primary-link">
          Return to active tasks
        </Link>
      </div>
    </AppShell>
  );
}
```

This page will later also handle direct edit links for archived tasks.

---

# Step 9: Add the CSS

Add this to the bottom of:

```
src/app/globals.css
```

```CSS
.task-card-actions {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1.25rem;
  margin-top: 1.25rem;
  padding-top: 1.25rem;
  border-top: 1px solid var(--border);
}

.quick-status {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.quick-status-label {
  margin: 0;
  color: var(--muted-text);
  font-size: 0.85rem;
  font-weight: 700;
}

.status-button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.status-button-group form {
  margin: 0;
}

.status-button {
  padding: 0.45rem 0.7rem;
  border: 1px solid var(--border);
  border-radius: 0.35rem;
  background: var(--surface);
  color: var(--text);
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 600;
}

.status-button:hover:not(:disabled) {
  border-color: var(--primary);
  color: var(--primary);
}

.status-button:focus-visible,
.edit-link:focus-visible,
.secondary-link:focus-visible,
.primary-link:focus-visible {
  outline: 3px solid var(--focus);
  outline-offset: 3px;
}

.current-status-button {
  border-color: var(--primary);
  background: var(--primary-light);
  color: var(--primary);
  cursor: default;
}

.edit-link,
.secondary-link {
  color: var(--primary);
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 0.2rem;
}

.primary-link {
  display: inline-block;
  margin-top: 1.25rem;
  padding: 0.75rem 1.15rem;
  border-radius: 0.4rem;
  background: var(--primary);
  color: #ffffff;
  font-weight: 700;
  text-decoration: none;
}

@media (max-width: 600px) {
  .task-card-actions {
    align-items: stretch;
    flex-direction: column;
  }

  .edit-link {
    align-self: flex-start;
  }
}
```

---

# Step 10: Run and test Stage 4

Run:

```PowerShell
npm.cmd run dev
```

Test these cases:

1. Create a task with all four fields.
2. Select **Edit details**.
3. Change its title, description, date and topic.
4. Save and confirm you return to the active list.
5. Refresh the page and confirm the edits remain.
6. Change directly from `Todo` to `Complete`.
7. Change directly from `Complete` to `In-Progress`.
8. Change directly from `In-Progress` to `Todo`.
9. Confirm changing status does not alter the title, description, date or topic.
10. Visit a nonexistent task URL such as:

```
http://localhost:3000/tasks/999999/edit
```

You should see the not-found page.

Changing status should update the written badge immediately after the server response. `revalidatePath("/")` invalidates the active page after the database mutation. [![](https://www.google.com/s2/favicons?domain=https://nextjs.org&sz=128)Next.js](https://nextjs.org/docs/app/api-reference/functions/revalidatePath?utm_source=chatgpt.com)

Stop the server with `Ctrl+C`.

Then run:

```PowerShell
npm.cmd run check
git status
git diff
```

---

# Stage 4 commit

Once all checks pass:

```PowerShell
git add .

git commit -m "Add task editing and quick status updates" `
  -m "Adds a dedicated task-details edit page, separate database actions for details and status, direct movement between all fixed statuses, and protection against editing unavailable tasks." `
  -m "Assisted-by: ChatGPT-Web[GPT-5.6 Thinking]"

git push origin main
```

The `Assisted-by` trailer is required because this stage uses AI-assisted code generation and review.

* * *

**You:**

![Uploaded image](https://sdmntprwestus2.oaiusercontent.com/files/00000000-4744-81f8-8805-ad31d21c9040/raw?se=2026-08-03T13:38:00Z&sp=r&sv=2026-02-06&sr=b&scid=7024004a-5058-4b68-8a18-997663a7f092&skoid=0a4a0f0c-99ac-4752-9d87-cfac036fa93f&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2026-08-03T11:04:36Z&ske=2026-08-04T11:04:36Z&sks=b&skv=2026-02-06&sig=4icQSVonMY9pRG8q2Vbq8ZYiMPRLmjWzZsquRDFFB%2B8%3D)error
[browser] A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch if (typeof window !== 'undefined').
- Variable input such as Date.now() or Math.random() which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch

  ...
    <HTTPAccessFallbackBoundary notFound={{...}} forbidden={undefined} unauthorized={undefined}>
      <HTTPAccessFallbackErrorBoundary pathname="/" notFound={{...}} forbidden={undefined} unauthorized={undefined} ...>
        <RedirectBoundary>
          <RedirectErrorBoundary router={{...}}>
            <InnerLayoutRouter url="/" tree={[...]} params={{}} cacheNode={{rsc:{...}, ...}} segmentPath={[...]} ...>
              <SegmentViewNode type="page" pagePath="page.js">
                <SegmentTrieNode>
                <Home>
                  <AppShell>
                    <main className="app-shell">
                      <header>
                      <nav>
                      <section className="content-card" aria-labelledby="view-title">
                        <div>
                        <section className="task-section" aria-labelledby="create-tas...">
                          <h3>
                          <p>
                          <TaskForm>
                            <form ref={{current:null}} action={function bound dispatchActionState} className="task-form">
                              <div className="form-grid">
                                <div className="form-field">
                                  <label>
                                  <input
                                    id="title"
                                    name="title"
                                    type="text"
                                    required={true}
                                    aria-invalid={false}
                                    aria-describedby={undefined}
-                                   fdprocessedid="pcrmx"
                                  >
                                <div className="form-field">
                                  <label>
                                  <input
                                    id="topic"
                                    name="topic"
                                    type="text"
                                    required={true}
                                    aria-invalid={false}
                                    aria-describedby={undefined}
-                                   fdprocessedid="vejgfl"
                                  >
                                ...
                              <div className="form-actions">
                                <button
                                  type="submit"
                                  className="primary-button"
                                  disabled={false}
-                                 fdprocessedid="1npcd8"
                                >
+                                 Create task
                        <section className="task-section" aria-labelledby="task-list-...">
                          <div>
                          <TaskList>
                            <ul className="task-list">
                              ...
                                <TaskStatusControls>
                                  <div className="quick-status" aria-label="Change sta...">
                                    <p>
                                    <div className="status-but...">
                                      <form>
                                      <form action={function updateTaskStatusAction}>
                                        <input>
                                        <button
                                          type="submit"
                                          name="status"
                                          value="In-Progress"
                                          className="status-button"
                                          disabled={false}
                                          aria-pressed={false}
-                                         fdprocessedid="496ema"
                                        >
+                                         In-Progress
                                      <form action={function updateTaskStatusAction}>
                                        <input>
                                        <button
                                          type="submit"
                                          name="status"
                                          value="Complete"
                                          className="status-button"
                                          disabled={false}
                                          aria-pressed={false}
-                                         fdprocessedid="yy1t5"
                                        >
+                                         Complete
                              ...
                                <TaskStatusControls>
                                  <div className="quick-status" aria-label="Change sta...">
                                    <p>
                                    <div className="status-but...">
                                      <form>
                                      <form action={function updateTaskStatusAction}>
                                        <input>
                                        <button
                                          type="submit"
                                          name="status"
                                          value="In-Progress"
                                          className="status-button"
                                          disabled={false}
                                          aria-pressed={false}
-                                         fdprocessedid="yzm8e9"
                                        >
+                                         In-Progress
                                      <form action={function updateTaskStatusAction}>
                                        <input>
                                        <button
                                          type="submit"
                                          name="status"
                                          value="Complete"
                                          className="status-button"
                                          disabled={false}
                                          aria-pressed={false}
-                                         fdprocessedid="68sir9"
                                        >
+                                         Complete
              ...
            ...
 
    at <unknown> (file://C:/Users/shayn/OneDrive/Desktop/Uni 3rd Yr/SDP/todo_app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_096_9a-._.js:3439:25)
    at runWithFiberInDEV (file://C:/Users/shayn/OneDrive/Desktop/Uni 3rd Yr/SDP/todo_app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_096_9a-._.js:965:74)
    at emitPendingHydrationWarnings (file://C:/Users/shayn/OneDrive/Desktop/Uni 3rd Yr/SDP/todo_app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_096_9a-._.js:3438:13)
    at completeWork (file://C:/Users/shayn/OneDrive/Desktop/Uni 3rd Yr/SDP/todo_app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_096_9a-._.js:6885:102)
    at runWithFiberInDEV (file://C:/Users/shayn/OneDrive/Desktop/Uni 3rd Yr/SDP/todo_app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_096_9a-._.js:965:131)
    at completeUnitOfWork (file://C:/Users/shayn/OneDrive/Desktop/Uni 3rd Yr/SDP/todo_app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_096_9a-._.js:9622:23)
    at performUnitOfWork (file://C:/Users/shayn/OneDrive/Desktop/Uni 3rd Yr/SDP/todo_app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_096_9a-._.js:9557:28)
    at workLoopConcurrentByScheduler (file://C:/Users/shayn/OneDrive/Desktop/Uni 3rd Yr/SDP/todo_app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_096_9a-._.js:9551:58)
    at renderRootConcurrent (file://C:/Users/shayn/OneDrive/Desktop/Uni 3rd Yr/SDP/todo_app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_096_9a-._.js:9534:71)
    at performWorkOnRoot (file://C:/Users/shayn/OneDrive/Desktop/Uni 3rd Yr/SDP/todo_app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_096_9a-._.js:9061:150)
    at performWorkOnRootViaSchedulerTask (file://C:/Users/shayn/OneDrive/Desktop/Uni 3rd Yr/SDP/todo_app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_096_9a-._.js:10255:9)
    at MessagePort.performWorkUntilDeadline (file://C:/Users/shayn/OneDrive/Desktop/Uni 3rd Yr/SDP/todo_app/.next/dev/static/chunks/node_modules_next_dist_compiled_1amofcm._.js:2647:64) (file://C:/Users/shayn/OneDrive/Desktop/Uni 3rd Yr/SDP/todo_app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_096_9a-._.js:3439:25)

* * *

**ChatGPT:**

This error is **not coming from the Stage 4 code**.

The giveaway is this attribute:

```
fdprocessedid="..."
```

It does not appear anywhere in our components. A browser extension is adding it to inputs and buttons before React finishes hydration. React then compares:

* Server HTML: no `fdprocessedid`
* Browser HTML: contains `fdprocessedid`

That difference produces the hydration warning. Next.js officially lists browser extensions modifying HTML as a common cause of hydration mismatches. [![](https://www.google.com/s2/favicons?domain=https://nextjs.org&sz=128)Next.js](https://nextjs.org/docs/messages/react-hydration-error?utm_source=chatgpt.com)

## Confirm it

Open an Incognito window:

```
Ctrl + Shift + N
```

Then visit:

```
http://localhost:3000
```

Most Chrome extensions are disabled in Incognito unless they were explicitly allowed there.

### Expected result

The application should load without the hydration warning.

## Find the responsible extension

In normal Chrome, open:

```
chrome://extensions
```

Temporarily disable extensions that interact with forms, such as:

* Password managers
* Autofill extensions
* Antivirus or web-protection extensions
* Shopping or coupon extensions

Refresh the page after disabling each likely extension.

## Do not change the application code

Do **not**:

* Add `suppressHydrationWarning`
* Disable server rendering
* Remove the forms
* Modify every input
* Add `fdprocessedid` manually

Those would hide or accommodate a browser-side modification rather than fix an application problem. Next.js describes `suppressHydrationWarning` as an escape hatch that should not be overused. [![](https://www.google.com/s2/favicons?domain=https://nextjs.org&sz=128)Next.js](https://nextjs.org/docs/messages/react-hydration-error?utm_source=chatgpt.com)

The app can continue working despite the development warning, but test it in Incognito to confirm. No Stage 4 code commit is needed for this particular issue.

* * *

**You:**

it worked, so im ignoring it then. lets do the nect stage.

* * *

**ChatGPT:**

# Stage 5: Archive tasks

This stage will implement non-destructive archiving:

* The user chooses **Archive**.
* A confirmation appears.
* Cancelling leaves the task unchanged.
* Confirming changes `archived` from `0` to `1`.
* The task disappears from the active list.
* The task remains in the same database table.
* The task appears in the archived view.
* Archived tasks remain read-only.

This directly addresses the walkthrough requirement that an archived task leave the active list but remain viewable.

Server Actions may be imported into Client Components for interactive actions, and `revalidatePath()` can refresh the affected pages after the database mutation. [![](https://www.google.com/s2/favicons?domain=https://nextjs.org&sz=128)Next.js+2![](https://www.google.com/s2/favicons?domain=https://nextjs.org&sz=128)Next.js+2](https://nextjs.org/docs/app/api-reference/functions/revalidatePath?utm_source=chatgpt.com)

---

## Step 1: Confirm Stage 4 is committed

Run:

```PowerShell
git status
git pull --ff-only origin main
git log --oneline -6
```

Continue when the working tree is clean and the Stage 4 commit appears.

---

## Step 2: Add the archive database functions

Open:

```
src/lib/tasks.js
```

Add these functions at the bottom:

```JavaScript
export function getArchivedTasks() {
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
      WHERE archived = 1
      ORDER BY due_date ASC, id ASC
    `)
    .all();
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
```

`archiveTask()` performs an update rather than a deletion. The condition `archived = 0` prevents an already archived task from being archived again.

---

## Step 3: Add the archive Server Action

Open:

```
src/app/actions.js
```

Find the import from `@/lib/tasks`.

It currently looks similar to:

```JavaScript
import {
  insertTask,
  updateTaskDetails,
  updateTaskStatus,
} from "@/lib/tasks";
```

Add `archiveTask`:

```JavaScript
import {
  archiveTask,
  insertTask,
  updateTaskDetails,
  updateTaskStatus,
} from "@/lib/tasks";
```

Then add this action at the bottom of the file:

```JavaScript
export async function archiveTaskAction(taskId) {
  const parsedTaskId = Number(taskId);

  if (
    !Number.isInteger(parsedTaskId) ||
    parsedTaskId <= 0
  ) {
    return {
      success: false,
      message: "The task could not be identified.",
    };
  }

  try {
    const archived = archiveTask(parsedTaskId);

    if (!archived) {
      return {
        success: false,
        message:
          "This task is no longer available for archiving.",
      };
    }
  } catch (error) {
    console.error("Task archiving failed:", error);

    return {
      success: false,
      message:
        "The task could not be archived. Please try again.",
    };
  }

  revalidatePath("/");
  revalidatePath("/archived");

  return {
    success: true,
    message: "Task archived successfully.",
  };
}
```

Both pages are revalidated because the task must disappear from `/` and appear on `/archived`. `revalidatePath()` is supported inside Server Functions and refreshes data associated with the specified route. [![](https://www.google.com/s2/favicons?domain=https://nextjs.org&sz=128)Next.js](https://nextjs.org/docs/app/api-reference/functions/revalidatePath?utm_source=chatgpt.com)

---

## Step 4: Create the archive button

Create:

```
src/components/ArchiveTaskButton.js
```

Add:

```JavaScript
"use client";

import {
  useState,
  useTransition,
} from "react";
import { archiveTaskAction } from "@/app/actions";

export default function ArchiveTaskButton({
  taskId,
  taskTitle,
}) {
  const [message, setMessage] = useState("");
  const [isPending, startTransition] = useTransition();

  function handleArchive() {
    const confirmed = window.confirm(
      `Archive "${taskTitle}"?\n\n` +
        "The task will leave the active list but will remain viewable in Archived tasks.",
    );

    if (!confirmed) {
      return;
    }

    setMessage("");

    startTransition(async () => {
      const result = await archiveTaskAction(taskId);

      if (!result?.success) {
        setMessage(
          result?.message ||
            "The task could not be archived.",
        );
      }
    });
  }

  const errorId = `archive-error-${taskId}`;

  return (
    <div className="archive-control">
      <button
        type="button"
        className="archive-button"
        onClick={handleArchive}
        disabled={isPending}
        aria-describedby={message ? errorId : undefined}
      >
        {isPending ? "Archiving..." : "Archive"}
      </button>

      {message && (
        <p
          id={errorId}
          className="archive-error"
          aria-live="polite"
        >
          {message}
        </p>
      )}
    </div>
  );
}
```

This component uses browser interaction only for confirmation. The actual database change remains in the server-side action. A Client Component can invoke a Server Action imported from a dedicated `"use server"` file. [![](https://www.google.com/s2/favicons?domain=https://nextjs.org&sz=128)Next.js+1](https://nextjs.org/docs/app/api-reference/directives/use-server?utm_source=chatgpt.com)

---

## Step 5: Add the archive button to active tasks

Open:

```
src/components/TaskList.js
```

Add this import near the top:

```JavaScript
import ArchiveTaskButton from "@/components/ArchiveTaskButton";
```

Find the existing edit link inside:

```JavaScript
<div className="task-card-actions">
```

Your current section probably resembles:

```JavaScript
<div className="task-card-actions">
  <TaskStatusControls
    taskId={task.id}
    taskTitle={task.title}
    currentStatus={task.status}
  />

  <Link
    href={`/tasks/${task.id}/edit`}
    className="edit-link"
  >
    Edit details
  </Link>
</div>
```

Replace that section with:

```JavaScript
<div className="task-card-actions">
  <TaskStatusControls
    taskId={task.id}
    taskTitle={task.title}
    currentStatus={task.status}
  />

  <div className="task-item-links">
    <Link
      href={`/tasks/${task.id}/edit`}
      className="edit-link"
    >
      Edit details
    </Link>

    <ArchiveTaskButton
      taskId={task.id}
      taskTitle={task.title}
    />
  </div>
</div>
```

The active task now has three distinct operations:

* Quick status change
* Edit details
* Archive

There is still no delete operation.

---

## Step 6: Create the archived-task list

Create:

```
src/components/ArchivedTaskList.js
```

Add:

```JavaScript
const statusClassNames = {
  Todo: "status-todo",
  "In-Progress": "status-in-progress",
  Complete: "status-complete",
};

export default function ArchivedTaskList({ tasks }) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <h3>No archived tasks</h3>
        <p>
          Tasks that you archive will remain viewable
          here.
        </p>
      </div>
    );
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="task-card archived-task-card"
        >
          <article>
            <div className="task-card-heading">
              <h4>{task.title}</h4>

              <div className="task-card-labels">
                <span
                  className={`status-badge ${
                    statusClassNames[task.status] || ""
                  }`}
                >
                  {task.status}
                </span>

                <span className="archive-badge">
                  Archived
                </span>
              </div>
            </div>

            <p className="task-description">
              {task.description ||
                "No description provided."}
            </p>

            <dl className="task-details">
              <div>
                <dt>Topic</dt>
                <dd>{task.topic}</dd>
              </div>

              <div>
                <dt>Due date</dt>
                <dd>
                  <time dateTime={task.due_date}>
                    {task.due_date}
                  </time>
                </dd>
              </div>
            </dl>

            <p className="archived-note">
              This task is archived and cannot be
              edited.
            </p>
          </article>
        </li>
      ))}
    </ul>
  );
}
```

The archived view shows:

* Title
* Description
* Topic
* Due date
* Written status
* A separate `Archived` label

Status and archived state remain separate concepts.

---

## Step 7: Replace the archived page

Replace the contents of:

```
src/app/archived/page.js
```

with:

```JavaScript
import { connection } from "next/server";
import AppShell from "@/components/AppShell";
import ArchivedTaskList from "@/components/ArchivedTaskList";
import { getArchivedTasks } from "@/lib/tasks";

export default async function ArchivedTasksPage() {
  await connection();

  const tasks = getArchivedTasks();

  return (
    <AppShell
      activeView="archived"
      title="Archived tasks"
      description="Archived tasks remain viewable and are never permanently deleted."
    >
      <section
        className="task-section"
        aria-labelledby="archived-list-heading"
      >
        <div className="task-list-heading">
          <div>
            <h3 id="archived-list-heading">
              Your archived tasks
            </h3>

            <p className="section-introduction">
              Archived tasks are read-only.
            </p>
          </div>

          <p className="task-count">
            {tasks.length}{" "}
            {tasks.length === 1 ? "task" : "tasks"}
          </p>
        </div>

        <ArchivedTaskList tasks={tasks} />
      </section>
    </AppShell>
  );
}
```

The page reads archived rows directly from the same `tasks` table. Pages are Server Components by default, while interactive pieces such as the confirmation button remain Client Components. [![](https://www.google.com/s2/favicons?domain=https://nextjs.org&sz=128)Next.js+1](https://nextjs.org/docs/app/getting-started/server-and-client-components?utm_source=chatgpt.com)

---

## Step 8: Add the archive styling

Add this to the bottom of:

```
src/app/globals.css
```

```CSS
.task-item-links {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  flex-wrap: wrap;
}

.archive-control {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.35rem;
}

.archive-button {
  padding: 0.45rem 0.7rem;
  border: 1px solid #9b3030;
  border-radius: 0.35rem;
  background: var(--surface);
  color: #842727;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 700;
}

.archive-button:hover:not(:disabled) {
  background: #faeeee;
}

.archive-button:focus-visible {
  outline: 3px solid var(--focus);
  outline-offset: 3px;
}

.archive-button:disabled {
  cursor: not-allowed;
  opacity: 0.65;
}

.archive-error {
  max-width: 260px;
  margin: 0;
  color: #a82727;
  font-size: 0.85rem;
  text-align: right;
}

.task-card-labels {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.archive-badge {
  flex-shrink: 0;
  padding: 0.3rem 0.6rem;
  border: 1px solid #7e8791;
  border-radius: 999px;
  background: #f1f2f3;
  color: #4e5964;
  font-size: 0.8rem;
  font-weight: 700;
}

.archived-task-card {
  background: #fafafa;
}

.archived-note {
  margin: 1.25rem 0 0;
  padding-top: 1rem;
  border-top: 1px solid var(--border);
  color: var(--muted-text);
  font-size: 0.9rem;
  font-style: italic;
}

@media (max-width: 600px) {
  .task-item-links {
    align-items: flex-start;
    justify-content: flex-start;
  }

  .archive-control {
    align-items: flex-start;
  }

  .archive-error {
    text-align: left;
  }

  .task-card-labels {
    justify-content: flex-start;
  }
}
```

---

# Step 9: Test the archive workflow

Start the application:

```PowerShell
npm.cmd run dev
```

Test each case:

1. Choose an existing active task.
2. Click **Archive**.
3. Select **Cancel** in the confirmation.
4. Confirm that the task remains in the active list.
5. Click **Archive** again and confirm.
6. Confirm that the task disappears from the active list.
7. Open **Archived tasks**.
8. Confirm that the task appears with all its information.
9. Confirm that its written task status still appears.
10. Confirm that it also has a separate `Archived` label.
11. Confirm that there are no edit or status controls.
12. Try its previous edit URL:

```
http://localhost:3000/tasks/1/edit
```

Use the actual archived task ID. You should see the not-found page.

13. Refresh the archived page.
14. Stop and restart the application.
15. Confirm that the task remains archived.

This checks the exact marked behaviour: the task must leave the active list but remain viewable.

---

## Step 10: Run project checks

Stop the server with `Ctrl+C`, then run:

```PowerShell
npm.cmd run check
git status
git diff
```

There should be no schema change in this stage because the `archived` column already exists.

---

# Stage 5 commit

Once all tests and checks pass:

```PowerShell
git add .

git commit -m "Add non-destructive task archiving" `
  -m "Adds archive confirmation, moves archived tasks out of the active list, displays them in a read-only archived view, and retains all task data in the existing SQLite table." `
  -m "Assisted-by: ChatGPT-Web[GPT-5.6 Thinking]"

git push origin main
```

The attribution is required because AI assisted with the code and review for this commit.

* * *

**You:**

ok, next step

* * *

**ChatGPT:**

# Stage 6: Sorting and derived overdue status

This stage completes two mandatory requirements:

* Tasks can be sorted by **topic, status and due date**.
* Past-due tasks are visibly flagged, while `Overdue` remains separate from the three selectable statuses.

The approved overdue rule is:

> A task is overdue when its due date is earlier than today’s local calendar date and its status is not `Complete`.

Changing a task to `Complete` will remove the overdue label. Changing it from `Complete` to `Todo` or `In-Progress` will cause overdue to be recalculated immediately.

No database migration is needed because overdue will be derived, not stored.

---

## Step 1: Confirm Stage 5 is committed

Run:

```PowerShell
git status
git pull --ff-only origin main
git log --oneline -7
```

Continue once the working tree is clean.

---

# Step 2: Create the task rules module

Create:

```
src/lib/taskRules.js
```

Add:

```JavaScript
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
```

## Why this is separate

This module contains the application rules rather than database operations:

* The three permitted statuses
* The overdue calculation
* The local date conversion
* Valid sorting choices
* Safe default sorting

This will also make the overdue rule straightforward to test during the testing stage.

Using local date components instead of `toISOString()` prevents a due date from shifting because of UTC conversion.

---

# Step 3: Update the actions file

Open:

```
src/app/actions.js
```

Find and remove this existing declaration:

```JavaScript
const VALID_STATUSES = [
  "Todo",
  "In-Progress",
  "Complete",
];
```

Add this import near the top:

```JavaScript
import { VALID_STATUSES } from "@/lib/taskRules";
```

Do not change the status action itself.

It will now use the shared fixed status list rather than maintaining a separate copy.

---

# Step 4: Update the task database functions

Replace the contents of:

```
src/lib/tasks.js
```

with:

```JavaScript
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
```

## Sorting behaviour

The approved order is now:

### Due date

Ascending:

```
Earliest → latest
```

Descending:

```
Latest → earliest
```

### Topic

Ascending:

```
A → Z
```

Descending:

```
Z → A
```

Topic sorting is case-insensitive.

### Status

Ascending:

```
Todo → In-Progress → Complete
```

Descending:

```
Complete → In-Progress → Todo
```

The SQL fragments do not come directly from the URL. The user’s choices are first restricted to known values and then mapped to fixed SQL expressions, preventing arbitrary SQL from being inserted into the query.

---

# Step 5: Create the reusable sorting controls

Create:

```
src/components/SortControls.js
```

Add:

```JavaScript
export default function SortControls({
  action,
  sortBy,
  direction,
}) {
  return (
    <form
      action={action}
      method="get"
      className="sort-controls"
    >
      <div className="sort-field">
        <label htmlFor={`sort-${action}`}>
          Sort by
        </label>

        <select
          id={`sort-${action}`}
          name="sort"
          defaultValue={sortBy}
        >
          <option value="dueDate">Due date</option>
          <option value="topic">Topic</option>
          <option value="status">Status</option>
        </select>
      </div>

      <div className="sort-field">
        <label htmlFor={`direction-${action}`}>
          Direction
        </label>

        <select
          id={`direction-${action}`}
          name="direction"
          defaultValue={direction}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

      <button type="submit" className="sort-button">
        Apply sorting
      </button>
    </form>
  );
}
```

The sorting state will be stored in the URL, for example:

```
/?sort=topic&direction=asc
```

or:

```
/archived?sort=status&direction=desc
```

This means sorting survives a page refresh and can be tested clearly during the walkthrough.

---

# Step 6: Update the active page

Replace:

```
src/app/page.js
```

with:

```JavaScript
import { connection } from "next/server";
import AppShell from "@/components/AppShell";
import SortControls from "@/components/SortControls";
import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";
import { getActiveTasks } from "@/lib/tasks";
import { normaliseSortOptions } from "@/lib/taskRules";

export default async function Home({ searchParams }) {
  await connection();

  const resolvedSearchParams =
    (await searchParams) || {};

  const sortOptions = normaliseSortOptions({
    sortBy: resolvedSearchParams.sort,
    direction: resolvedSearchParams.direction,
  });

  const tasks = getActiveTasks(sortOptions);

  return (
    <AppShell
      activeView="active"
      title="Active tasks"
      description="Create and manage your active tasks."
    >
      <section
        className="task-section"
        aria-labelledby="create-task-heading"
      >
        <h3 id="create-task-heading">
          Create a task
        </h3>

        <p className="section-introduction">
          Title, topic and due date are required.
          Description is optional.
        </p>

        <TaskForm />
      </section>

      <section
        className="task-section"
        aria-labelledby="task-list-heading"
      >
        <div className="task-list-heading">
          <div>
            <h3 id="task-list-heading">
              Your tasks
            </h3>

            <p className="section-introduction">
              Overdue tasks are labelled separately
              from their task status.
            </p>
          </div>

          <p className="task-count">
            {tasks.length}{" "}
            {tasks.length === 1 ? "task" : "tasks"}
          </p>
        </div>

        <SortControls
          action="/"
          sortBy={sortOptions.sortBy}
          direction={sortOptions.direction}
        />

        <TaskList tasks={tasks} />
      </section>
    </AppShell>
  );
}
```

In the current App Router, `searchParams` is asynchronous and should be awaited in a page component. [![](https://www.google.com/s2/favicons?domain=https://nextjs.org&sz=128)Next.js](https://nextjs.org/docs/app/api-reference/file-conventions/page?utm_source=chatgpt.com)

---

# Step 7: Update the archived page

Replace:

```
src/app/archived/page.js
```

with:

```JavaScript
import { connection } from "next/server";
import AppShell from "@/components/AppShell";
import ArchivedTaskList from "@/components/ArchivedTaskList";
import SortControls from "@/components/SortControls";
import { getArchivedTasks } from "@/lib/tasks";
import { normaliseSortOptions } from "@/lib/taskRules";

export default async function ArchivedTasksPage({
  searchParams,
}) {
  await connection();

  const resolvedSearchParams =
    (await searchParams) || {};

  const sortOptions = normaliseSortOptions({
    sortBy: resolvedSearchParams.sort,
    direction: resolvedSearchParams.direction,
  });

  const tasks = getArchivedTasks(sortOptions);

  return (
    <AppShell
      activeView="archived"
      title="Archived tasks"
      description="Archived tasks remain viewable and are never permanently deleted."
    >
      <section
        className="task-section"
        aria-labelledby="archived-list-heading"
      >
        <div className="task-list-heading">
          <div>
            <h3 id="archived-list-heading">
              Your archived tasks
            </h3>

            <p className="section-introduction">
              Archived tasks are read-only.
            </p>
          </div>

          <p className="task-count">
            {tasks.length}{" "}
            {tasks.length === 1 ? "task" : "tasks"}
          </p>
        </div>

        <SortControls
          action="/archived"
          sortBy={sortOptions.sortBy}
          direction={sortOptions.direction}
        />

        <ArchivedTaskList tasks={tasks} />
      </section>
    </AppShell>
  );
}
```

---

# Step 8: Update the active task list

Replace:

```
src/components/TaskList.js
```

with:

```JavaScript
import Link from "next/link";
import ArchiveTaskButton from "@/components/ArchiveTaskButton";
import TaskStatusControls from "@/components/TaskStatusControls";

const statusClassNames = {
  Todo: "status-todo",
  "In-Progress": "status-in-progress",
  Complete: "status-complete",
};

export default function TaskList({ tasks }) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <h3>No active tasks</h3>
        <p>Create your first task using the form above.</p>
      </div>
    );
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={
            task.isOverdue
              ? "task-card overdue-task-card"
              : "task-card"
          }
        >
          <article>
            <div className="task-card-heading">
              <h4>{task.title}</h4>

              <div className="task-card-labels">
                <span
                  className={`status-badge ${
                    statusClassNames[task.status] || ""
                  }`}
                >
                  {task.status}
                </span>

                {task.isOverdue && (
                  <span className="overdue-badge">
                    Overdue
                  </span>
                )}
              </div>
            </div>

            <p className="task-description">
              {task.description ||
                "No description provided."}
            </p>

            <dl className="task-details">
              <div>
                <dt>Topic</dt>
                <dd>{task.topic}</dd>
              </div>

              <div>
                <dt>Due date</dt>
                <dd>
                  <time dateTime={task.due_date}>
                    {task.due_date}
                  </time>
                </dd>
              </div>
            </dl>

            <div className="task-card-actions">
              <TaskStatusControls
                taskId={task.id}
                taskTitle={task.title}
                currentStatus={task.status}
              />

              <div className="task-item-links">
                <Link
                  href={`/tasks/${task.id}/edit`}
                  className="edit-link"
                >
                  Edit details
                </Link>

                <ArchiveTaskButton
                  taskId={task.id}
                  taskTitle={task.title}
                />
              </div>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}
```

The written status remains displayed even when the separate overdue label appears.

---

# Step 9: Update the archived task list

Replace:

```
src/components/ArchivedTaskList.js
```

with:

```JavaScript
const statusClassNames = {
  Todo: "status-todo",
  "In-Progress": "status-in-progress",
  Complete: "status-complete",
};

export default function ArchivedTaskList({ tasks }) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <h3>No archived tasks</h3>

        <p>
          Tasks that you archive will remain viewable
          here.
        </p>
      </div>
    );
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={
            task.isOverdue
              ? "task-card archived-task-card overdue-task-card"
              : "task-card archived-task-card"
          }
        >
          <article>
            <div className="task-card-heading">
              <h4>{task.title}</h4>

              <div className="task-card-labels">
                <span
                  className={`status-badge ${
                    statusClassNames[task.status] || ""
                  }`}
                >
                  {task.status}
                </span>

                {task.isOverdue && (
                  <span className="overdue-badge">
                    Overdue
                  </span>
                )}

                <span className="archive-badge">
                  Archived
                </span>
              </div>
            </div>

            <p className="task-description">
              {task.description ||
                "No description provided."}
            </p>

            <dl className="task-details">
              <div>
                <dt>Topic</dt>
                <dd>{task.topic}</dd>
              </div>

              <div>
                <dt>Due date</dt>
                <dd>
                  <time dateTime={task.due_date}>
                    {task.due_date}
                  </time>
                </dd>
              </div>
            </dl>

            <p className="archived-note">
              This task is archived and cannot be
              edited.
            </p>
          </article>
        </li>
      ))}
    </ul>
  );
}
```

Archived tasks can still display as overdue because archiving and status are separate concepts. A past-due archived task marked `Complete` will not display as overdue.

---

# Step 10: Add the CSS

Add this to the bottom of:

```
src/app/globals.css
```

```CSS
.sort-controls {
  display: flex;
  align-items: flex-end;
  gap: 1rem;
  margin-top: 1.5rem;
  padding: 1rem;
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  background: #f8f9fb;
}

.sort-field {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.sort-field label {
  font-size: 0.85rem;
  font-weight: 700;
}

.sort-field select {
  min-width: 150px;
  padding: 0.6rem;
  border: 1px solid var(--border);
  border-radius: 0.35rem;
  background: var(--surface);
  color: var(--text);
}

.sort-field select:focus {
  border-color: var(--focus);
  outline: 3px solid rgba(49, 94, 168, 0.2);
}

.sort-button {
  padding: 0.65rem 0.9rem;
  border: 1px solid var(--primary);
  border-radius: 0.35rem;
  background: var(--primary);
  color: #ffffff;
  cursor: pointer;
  font-weight: 700;
}

.sort-button:hover {
  opacity: 0.9;
}

.sort-button:focus-visible {
  outline: 3px solid var(--focus);
  outline-offset: 3px;
}

.overdue-task-card {
  border-left: 5px solid #b52d2d;
}

.overdue-badge {
  flex-shrink: 0;
  padding: 0.3rem 0.6rem;
  border: 1px solid #b52d2d;
  border-radius: 999px;
  background: #fae8e8;
  color: #8d2020;
  font-size: 0.8rem;
  font-weight: 700;
}

@media (max-width: 600px) {
  .sort-controls {
    align-items: stretch;
    flex-direction: column;
  }

  .sort-field select {
    width: 100%;
  }
}
```

The red border is only an additional visual indicator. The written `Overdue` label ensures that colour is not the only way overdue is communicated.

---

# Step 11: Update the README

Find this paragraph:

```Markdown
Overdue is not stored in the database. It will be derived when tasks are read by comparing the due date with the current local date and checking that the status is not `Complete`.
```

Replace it with:

```Markdown
Overdue is not stored in the database. It is derived whenever tasks are read. A task is overdue when its due date is earlier than the current local calendar date and its status is not `Complete`.

Changing a task to or from `Complete`, or changing its due date, causes the overdue result to be recalculated from the updated values.
```

Then add:

```Markdown
### Task sorting

Active and archived task lists can be sorted by:

- Due date, with the default order being earliest to latest.
- Topic, using case-insensitive alphabetical order.
- Status, using the order `Todo`, `In-Progress`, `Complete`.

Each sorting option can also be reversed.
```

This keeps the documentation aligned with the shipped application, which is important for the complete documentation and database-design rubric levels.

---

# Step 12: Test overdue behaviour

Start the application:

```PowerShell
npm.cmd run dev
```

Create or edit tasks to test:

### Past date and Todo

* Due date: yesterday
* Status: `Todo`

Expected:

```
Todo
Overdue
```

### Change the same task to Complete

Expected:

```
Complete
```

The `Overdue` label must disappear immediately.

### Change it back to In-Progress

Expected:

```
In-Progress
Overdue
```

### Edit its due date to tomorrow

Expected:

```
In-Progress
```

The overdue label must disappear.

### Due today

A task due today must **not** be overdue.

Also confirm that the status controls contain only:

```
Todo
In-Progress
Complete
```

`Overdue` must never appear as a selectable status.

---

# Step 13: Test sorting

Create at least four tasks with different:

* Topics
* Due dates
* Statuses

Then test:

1. Due date ascending.
2. Due date descending.
3. Topic ascending.
4. Topic descending.
5. Status ascending.
6. Status descending.
7. Refresh the page and confirm the selected sorting remains in the URL.
8. Repeat the sorting checks in the archived view.

The functional walkthrough awards sorting as one pass-or-fail step, so all three required fields must work.

---

# Step 14: Run project checks

Stop the server with `Ctrl+C`, then run:

```PowerShell
npm.cmd run check
git status
git diff
```

No database file or schema migration should appear.

---

# Stage 6 commit

Once overdue and all sorting options work:

```PowerShell
git add .

git commit -m "Add task sorting and overdue indicators" `
  -m "Adds reusable sorting controls for topic, status and due date, derives overdue from the local date and current status, and displays overdue separately from task status in active and archived views." `
  -m "Assisted-by: ChatGPT-Web[GPT-5.6 Thinking]"

git push origin main
```

This commit should leave the application in a working state and includes the AI attribution required by the course policy.

* * *

**You:**

the only thing i dislike is that adding a task is with the task page, and then when u sort, it takes u to the top, which is creating a task... could we have a create task buttton that does the same thing as editing instead of what we have now?? ive comnited those sorting changes, so this is a new commit i guess ( is it a big mission to change?)

* * *

**ChatGPT:**

Yes. This is a **small, clean refactor**, and it should be a new commit because your sorting stage is already committed.

Task creation will move to `/tasks/new`, just like editing has its own route. The active page will contain only the task list, sorting controls and a **Create task** button. This does not affect any mandatory functionality: users can still create a task with all four fields and see it in the list.

Next.js App Router creates a route from a `page.js` file inside the corresponding folder, so `src/app/tasks/new/page.js` becomes `/tasks/new`. [![](https://www.google.com/s2/favicons?domain=https://nextjs.org&sz=128)Next.js+1](https://nextjs.org/docs/app/api-reference/file-conventions/page?utm_source=chatgpt.com)

## 1. Create the new task page

Create:

```
src/app/tasks/new/page.js
```

Add:

```JavaScript
import AppShell from "@/components/AppShell";
import TaskForm from "@/components/TaskForm";

export default function NewTaskPage() {
  return (
    <AppShell
      activeView="active"
      title="Create a task"
      description="Add a new task to your active-task list."
    >
      <section
        className="task-section"
        aria-labelledby="create-task-heading"
      >
        <h3 id="create-task-heading">Task details</h3>

        <p className="section-introduction">
          Title, topic and due date are required.
          Description is optional.
        </p>

        <TaskForm />
      </section>
    </AppShell>
  );
}
```

---

## 2. Redirect after successfully creating a task

Open:

```
src/app/actions.js
```

Your file already imports `redirect` because the edit action uses it:

```JavaScript
import { redirect } from "next/navigation";
```

At the end of `createTaskAction`, replace:

```JavaScript
revalidatePath("/");

return {
  success: true,
  message: "Task created successfully.",
  errors: {},
  submissionId: Date.now(),
};
```

with:

```JavaScript
revalidatePath("/");
redirect("/");
```

Keep `redirect("/")` outside the `try` block.

After a task is successfully created, the user will now return to the active-task list and immediately see the new task.

---

## 3. Simplify the task form

Because successful creation now redirects, the form no longer needs to reset itself or show a success message.

Replace:

```
src/components/TaskForm.js
```

with:

```JavaScript
"use client";

import Link from "next/link";
import { useActionState } from "react";
import { createTaskAction } from "@/app/actions";

const initialState = {
  success: false,
  message: "",
  errors: {},
};

export default function TaskForm() {
  const [state, formAction, pending] = useActionState(
    createTaskAction,
    initialState,
  );

  return (
    <form action={formAction} className="task-form">
      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="title">
            Title <span aria-hidden="true">*</span>
          </label>

          <input
            id="title"
            name="title"
            type="text"
            required
            aria-invalid={Boolean(state.errors?.title)}
            aria-describedby={
              state.errors?.title
                ? "title-error"
                : undefined
            }
          />

          {state.errors?.title && (
            <p id="title-error" className="field-error">
              {state.errors.title}
            </p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="topic">
            Topic <span aria-hidden="true">*</span>
          </label>

          <input
            id="topic"
            name="topic"
            type="text"
            required
            aria-invalid={Boolean(state.errors?.topic)}
            aria-describedby={
              state.errors?.topic
                ? "topic-error"
                : undefined
            }
          />

          {state.errors?.topic && (
            <p id="topic-error" className="field-error">
              {state.errors.topic}
            </p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="dueDate">
            Due date <span aria-hidden="true">*</span>
          </label>

          <input
            id="dueDate"
            name="dueDate"
            type="date"
            required
            aria-invalid={Boolean(state.errors?.dueDate)}
            aria-describedby={
              state.errors?.dueDate
                ? "due-date-error"
                : undefined
            }
          />

          {state.errors?.dueDate && (
            <p
              id="due-date-error"
              className="field-error"
            >
              {state.errors.dueDate}
            </p>
          )}
        </div>

        <div className="form-field form-field-full">
          <label htmlFor="description">
            Description{" "}
            <span className="optional-label">
              (optional)
            </span>
          </label>

          <textarea
            id="description"
            name="description"
            rows="4"
          />
        </div>
      </div>

      <div className="form-actions">
        <button
          type="submit"
          className="primary-button"
          disabled={pending}
        >
          {pending ? "Saving task..." : "Create task"}
        </button>

        <Link href="/" className="secondary-link">
          Cancel
        </Link>
      </div>

      {state.message && (
        <p
          className="form-message error-message"
          aria-live="polite"
        >
          {state.message}
        </p>
      )}
    </form>
  );
}
```

---

## 4. Remove the form from the active page

Replace:

```
src/app/page.js
```

with:

```JavaScript
import Link from "next/link";
import { connection } from "next/server";
import AppShell from "@/components/AppShell";
import SortControls from "@/components/SortControls";
import TaskList from "@/components/TaskList";
import { getActiveTasks } from "@/lib/tasks";
import { normaliseSortOptions } from "@/lib/taskRules";

export default async function Home({ searchParams }) {
  await connection();

  const resolvedSearchParams =
    (await searchParams) || {};

  const sortOptions = normaliseSortOptions({
    sortBy: resolvedSearchParams.sort,
    direction: resolvedSearchParams.direction,
  });

  const tasks = getActiveTasks(sortOptions);

  return (
    <AppShell
      activeView="active"
      title="Active tasks"
      description="View and manage your active tasks."
    >
      <section
        className="task-section"
        aria-labelledby="task-list-heading"
      >
        <div className="task-list-heading">
          <div>
            <h3 id="task-list-heading">Your tasks</h3>

            <p className="section-introduction">
              Overdue tasks are labelled separately
              from their task status.
            </p>
          </div>

          <div className="list-header-actions">
            <p className="task-count">
              {tasks.length}{" "}
              {tasks.length === 1 ? "task" : "tasks"}
            </p>

            <Link
              href="/tasks/new"
              className="primary-link create-task-link"
            >
              Create task
            </Link>
          </div>
        </div>

        <SortControls
          action="/"
          sortBy={sortOptions.sortBy}
          direction={sortOptions.direction}
        />

        <TaskList tasks={tasks} />
      </section>
    </AppShell>
  );
}
```

Now applying sorting reloads a page whose main content begins with the task-list heading and sorting controls rather than the creation form.

---

## 5. Add the small CSS adjustment

Add to the bottom of:

```
src/app/globals.css
```

```CSS
.list-header-actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
}

.create-task-link {
  margin-top: 0;
  white-space: nowrap;
}

@media (max-width: 600px) {
  .list-header-actions {
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
}
```

Your existing `.primary-link` styling will provide the button appearance.

---

## 6. Test the change

Run:

```PowerShell
npm.cmd run dev
```

Check:

1. The active page no longer contains the creation form.
2. The **Create task** button opens `/tasks/new`.
3. Cancel returns to the active list.
4. Validation errors remain on the creation page.
5. Successful creation returns to `/`.
6. The new task appears in the list.
7. Sorting returns to the list area rather than a creation form.
8. Editing, status changes, overdue and archiving still work.

Then run:

```PowerShell
npm.cmd run check
git status
git diff
```

No database, schema or README change is needed.

## New commit

```PowerShell
git add .

git commit -m "Move task creation to a dedicated page" `
  -m "Adds a separate create-task route, redirects to the active list after saving, and keeps the main task page focused on sorting and managing tasks." `
  -m "Assisted-by: ChatGPT-Web[GPT-5.6 Thinking]"

git push origin main
```

This conversation is also a useful AI transcript example: you identified an unsuitable UX decision and redirected the design after testing it. That directly supports the rubric’s highest AI-usage level, which looks for a clear instance of the student correcting or constraining AI output.

* * *

**You:**

ok, next step

* * *

**ChatGPT:**

# Stage 7: Automated testing

We will use **Jest**, which fits your previous experience and is officially supported in Next.js projects. We will test the database and business rules rather than the asynchronous page components, because current Next.js guidance notes that Jest does not support async Server Components directly. [![](https://www.google.com/s2/favicons?domain=https://nextjs.org&sz=128)Next.js](https://nextjs.org/docs/app/guides/testing/jest?utm_source=chatgpt.com)

The brief requires at least three tests that:

* Exercise real behaviour.
* Include archiving or the overdue rule.
* Are deterministic.
* Use a throwaway database.
* Run through one documented command.

We will add **five tests**, covering creation, editing, archiving, overdue recalculation and sorting.

---

## Step 1: Confirm the repository is clean

```PowerShell
git status
git pull --ff-only origin main
```

Proceed when the working tree is clean.

---

## Step 2: Install Jest

```PowerShell
npm.cmd install --save-dev jest
```

Jest’s documented npm installation uses it as a development dependency. [![](https://www.google.com/s2/favicons?domain=https://jestjs.io&sz=128)Jest](https://jestjs.io/docs/29.7/getting-started?utm_source=chatgpt.com)

---

## Step 3: Create the Jest configuration

Create this file in the project root:

```
jest.config.mjs
```

Add:

```JavaScript
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  clearMocks: true,
  testEnvironment: "node",
  testMatch: ["<rootDir>/tests/**/*.test.js"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};

export default createJestConfig(customJestConfig);
```

We use the Node environment because these tests exercise server-side JavaScript and SQLite, not browser components.

The alias mapping allows test files to use imports such as:

```JavaScript
import { createDatabase } from "@/lib/database";
```

---

## Step 4: Allow task functions to use a test database

At present, the task functions automatically use the normal application database. We need to allow tests to pass an isolated in-memory database.

Replace:

```
src/lib/tasks.js
```

with:

```JavaScript
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
  database = getDatabase(),
) {
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

export function insertTask(
  {
    title,
    description = "",
    dueDate,
    topic,
  },
  database = getDatabase(),
) {
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

export function getActiveTasks(
  options = {},
  database = getDatabase(),
) {
  return getTasksByArchivedValue(
    0,
    options,
    database,
  );
}

export function getArchivedTasks(
  options = {},
  database = getDatabase(),
) {
  return getTasksByArchivedValue(
    1,
    options,
    database,
  );
}

export function getTaskById(
  id,
  database = getDatabase(),
) {
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

export function updateTaskDetails(
  {
    id,
    title,
    description = "",
    dueDate,
    topic,
  },
  database = getDatabase(),
) {
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

export function updateTaskStatus(
  id,
  status,
  database = getDatabase(),
) {
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

export function archiveTask(
  id,
  database = getDatabase(),
) {
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
```

This does not change normal application behaviour. Existing calls still use `getDatabase()` automatically. Tests can now supply their own database as an additional argument.

---

## Step 5: Create the test folder

```PowerShell
New-Item -ItemType Directory -Force tests
```

Create:

```
tests/tasks.test.js
```

Add:

```JavaScript
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  test,
} from "@jest/globals";

import { createDatabase } from "@/lib/database";
import {
  archiveTask,
  getActiveTasks,
  getArchivedTasks,
  getTaskById,
  insertTask,
  updateTaskDetails,
  updateTaskStatus,
} from "@/lib/tasks";

describe("task database behaviour", () => {
  let database;

  beforeEach(() => {
    database = createDatabase(":memory:");
  });

  afterEach(() => {
    database.close();
  });

  test("creates a task with Todo status and an optional description", () => {
    const taskId = insertTask(
      {
        title: "Submit lab",
        dueDate: "2026-08-04",
        topic: "University",
      },
      database,
    );

    const task = getTaskById(taskId, database);

    expect(task).toEqual({
      id: taskId,
      title: "Submit lab",
      description: "",
      due_date: "2026-08-04",
      topic: "University",
      status: "Todo",
      archived: 0,
    });
  });

  test("updates task details without changing its status", () => {
    const taskId = insertTask(
      {
        title: "Initial title",
        description: "Initial description",
        dueDate: "2026-08-04",
        topic: "University",
      },
      database,
    );

    updateTaskStatus(
      taskId,
      "In-Progress",
      database,
    );

    const updated = updateTaskDetails(
      {
        id: taskId,
        title: "Updated title",
        description: "Updated description",
        dueDate: "2026-08-06",
        topic: "COMS3011A",
      },
      database,
    );

    const task = getTaskById(taskId, database);

    expect(updated).toBe(true);

    expect(task).toMatchObject({
      title: "Updated title",
      description: "Updated description",
      due_date: "2026-08-06",
      topic: "COMS3011A",
      status: "In-Progress",
    });
  });

  test("archives a task without deleting it", () => {
    const taskId = insertTask(
      {
        title: "Archive test",
        dueDate: "2026-08-04",
        topic: "Testing",
      },
      database,
    );

    const archived = archiveTask(taskId, database);

    const activeTasks = getActiveTasks(
      {
        today: "2026-08-01",
      },
      database,
    );

    const archivedTasks = getArchivedTasks(
      {
        today: "2026-08-01",
      },
      database,
    );

    expect(archived).toBe(true);
    expect(activeTasks).toHaveLength(0);
    expect(archivedTasks).toHaveLength(1);

    expect(archivedTasks[0]).toMatchObject({
      id: taskId,
      title: "Archive test",
      archived: 1,
    });
  });

  test("recalculates overdue when status changes to or from Complete", () => {
    const taskId = insertTask(
      {
        title: "Past task",
        dueDate: "2026-08-01",
        topic: "Testing",
      },
      database,
    );

    let task = getActiveTasks(
      {
        today: "2026-08-04",
      },
      database,
    )[0];

    expect(task.status).toBe("Todo");
    expect(task.isOverdue).toBe(true);

    updateTaskStatus(
      taskId,
      "Complete",
      database,
    );

    task = getActiveTasks(
      {
        today: "2026-08-04",
      },
      database,
    )[0];

    expect(task.status).toBe("Complete");
    expect(task.isOverdue).toBe(false);

    updateTaskStatus(
      taskId,
      "In-Progress",
      database,
    );

    task = getActiveTasks(
      {
        today: "2026-08-04",
      },
      database,
    )[0];

    expect(task.status).toBe("In-Progress");
    expect(task.isOverdue).toBe(true);
  });

  test("sorts tasks by due date, topic and status", () => {
    const completeTaskId = insertTask(
      {
        title: "Complete task",
        dueDate: "2026-08-03",
        topic: "Beta",
      },
      database,
    );

    const todoTaskId = insertTask(
      {
        title: "Todo task",
        dueDate: "2026-08-01",
        topic: "Zebra",
      },
      database,
    );

    const progressTaskId = insertTask(
      {
        title: "Progress task",
        dueDate: "2026-08-02",
        topic: "Alpha",
      },
      database,
    );

    updateTaskStatus(
      completeTaskId,
      "Complete",
      database,
    );

    updateTaskStatus(
      progressTaskId,
      "In-Progress",
      database,
    );

    const titles = (tasks) =>
      tasks.map((task) => task.title);

    const byDueDate = getActiveTasks(
      {
        sortBy: "dueDate",
        direction: "asc",
        today: "2026-07-01",
      },
      database,
    );

    const byTopic = getActiveTasks(
      {
        sortBy: "topic",
        direction: "asc",
        today: "2026-07-01",
      },
      database,
    );

    const byStatus = getActiveTasks(
      {
        sortBy: "status",
        direction: "asc",
        today: "2026-07-01",
      },
      database,
    );

    expect(titles(byDueDate)).toEqual([
      "Todo task",
      "Progress task",
      "Complete task",
    ]);

    expect(titles(byTopic)).toEqual([
      "Progress task",
      "Complete task",
      "Todo task",
    ]);

    expect(titles(byStatus)).toEqual([
      "Todo task",
      "Progress task",
      "Complete task",
    ]);

    expect(todoTaskId).toBeGreaterThan(0);
  });
});
```

Each test starts with:

```JavaScript
createDatabase(":memory:")
```

This creates a fresh temporary SQLite database that exists only for that test. It does not use or alter:

```
data/tasks.db
```

---

## Step 6: Add the test command

Run:

```PowerShell
npm.cmd pkg set scripts.test="jest"
npm.cmd pkg set scripts.check="npm run lint && npm test && npm run build"
```

Check:

```PowerShell
Get-Content package.json
```

The scripts should include:

```JSON
"scripts": {
  "dev": "next dev",
  "predev": "npm run db:init",
  "build": "next build",
  "start": "next start",
  "lint": "eslint",
  "db:init": "node scripts/init-db.mjs",
  "test": "jest",
  "check": "npm run lint && npm test && npm run build"
}
```

The brief specifically requires the tests to run through one documented command.

---

## Step 7: Run the tests

```PowerShell
npm.cmd test
```

Expected result:

```
Test Suites: 1 passed
Tests:       5 passed
```

Then run the complete project check:

```PowerShell
npm.cmd run check
```

This should run:

1. ESLint
2. All Jest tests
3. The production build

---

## Step 8: Update the README

### Update the project check section

Use:

````Markdown
### Check the project

To run the linter, automated tests and production build:

```bash
npm run check
```
````

### Add the test command

````Markdown
### Run the automated tests

```bash
npm test
```

The tests use a fresh in-memory SQLite database and do not depend on the developer's local database or its contents.
````

Remove the sentence saying that the test command will be added later.

### Add Jest under Third-Party Code

```Markdown
- **Jest** — provides the automated test runner and assertions used to verify database and task behaviour.
```

### Add a testing section

```Markdown
## Testing

The repository contains automated tests for:

- Creating tasks and applying the default `Todo` status.
- Editing task details without overwriting status.
- Archiving tasks without deleting them.
- Recalculating overdue when status changes to or from `Complete`.
- Sorting tasks by due date, topic and status.

Every test runs against a new in-memory SQLite database. The tests are deterministic and do not use the local `data/tasks.db` file.
```

This wording closely addresses the complete testing rubric.

---

## Step 9: Final checks

```PowerShell
npm.cmd test
npm.cmd run check
git status
git diff
```

Also confirm that your actual task data still exists when you run:

```PowerShell
npm.cmd run dev
```

The tests should not have changed any of your saved tasks.

---

# Stage 7 commit

Once all five tests pass:

```PowerShell
git add .

git commit -m "Add deterministic task behaviour tests" `
  -m "Adds five Jest tests covering creation, editing, archiving, overdue recalculation and required sorting. Each test runs against an isolated in-memory SQLite database." `
  -m "Assisted-by: ChatGPT-Web[GPT-5.6 Thinking]"

git push origin main
```

This stage should give you more than the minimum three tests and covers **both** archiving and overdue, rather than only one of them.

* * *

**You:**

whats next?

* * *

**ChatGPT:**

Assuming Stage 7 tests pass and that commit has been pushed, the coding requirements are essentially complete.

## Next: Stage 8 — final documentation and submission audit

The brief now requires us to verify that the repository works from a clean clone, that all three documentation sections are accurate, and that the AI transcripts and declarations are ready.

### 1. Commit and push Stage 7

Check:

```PowerShell
git status
npm.cmd run check
```

Then commit, if you have not already:

```PowerShell
git add .

git commit -m "Add deterministic task behaviour tests" `
  -m "Adds five Jest tests covering creation, editing, archiving, overdue recalculation and required sorting. Each test runs against an isolated in-memory SQLite database." `
  -m "Assisted-by: ChatGPT-Web[GPT-5.6 Thinking]"

git push origin main
```

---

# Stage 8A: Audit `package.json`

Run:

```PowerShell
Get-Content package.json
```

Check that the scripts include:

```JSON
"scripts": {
  "dev": "next dev",
  "predev": "npm run db:init",
  "build": "next build",
  "start": "next start",
  "lint": "eslint",
  "db:init": "node scripts/init-db.mjs",
  "test": "jest",
  "check": "npm run lint && npm test && npm run build"
}
```

The exact order does not matter.

Also compare every package under `dependencies` and `devDependencies` against the README’s **Third-Party Code** section. Every directly installed package should be listed with a reason. The full documentation level requires dependencies to be named and justified rather than presented as a bare list.

Your likely list is:

* Next.js
* React
* React DOM
* better-sqlite3
* Jest
* ESLint
* eslint-config-next

Only include packages actually shown in your `package.json`.

---

# Stage 8B: Final README structure

Your README should now contain these headings:

```Markdown
# Task Tracker

## Running It

## Third-Party Code

## Database Design

## Task Sorting

## Testing

## AI Usage
```

Under **Running It**, make sure the exact clean-clone process is clearly stated:

````Markdown
## Running It

### Requirements

- Node.js 24.14.0
- npm 11.9.0

### Install dependencies

```bash
npm ci
```

### Start the application

```bash
npm run dev
```

The database is automatically initialised before the development server starts.

Open `http://localhost:3000` in a browser.

### Run the automated tests

```bash
npm test
```

### Check the complete project

To run the linter, tests and production build:

```bash
npm run check
```

### Initialise the database manually

```bash
npm run db:init
```
````

The README must name the Node version and every command needed for someone to start the application from a clean clone.

## Testing section

Use wording similar to:

```Markdown
## Testing

The repository contains automated tests for:

- Creating tasks and applying the default `Todo` status.
- Editing task details without overwriting status.
- Archiving tasks without deleting them.
- Recalculating overdue when status changes to or from `Complete`.
- Sorting tasks by due date, topic and status.

Every test runs against a new in-memory SQLite database. The tests are deterministic and do not use the local `data/tasks.db` file.
```

---

# Stage 8C: Verify the AI section

Your README should continue to state:

```Markdown
## AI Usage

This repository makes use of AI code generation using the following tools:

- ChatGPT-Web[GPT-5.6 Thinking]

This repository does not use AI in-line editing tools.

This repository makes use of AI code review using the following tools:

- ChatGPT-Web[GPT-5.6 Thinking]

### Document Declaration

The preceding document was planned, reviewed and edited with the assistance of the following:

- ChatGPT-Web[GPT-5.6 Thinking]
```

Only keep “does not use AI in-line editing tools” if that remains true. For example, change it if you began using Copilot or another inline suggestion tool.

The policy requires the README to declare code generation, inline editing and code review use or non-use.

---

# Stage 8D: Perform a real clean-clone test

This is the most important remaining check because the functional walkthrough starts from a clean clone and the first step is pass or fail.

Do not test only inside your current development folder.

In PowerShell, move to a separate folder:

```PowerShell
cd "C:\Users\shayn\OneDrive\Desktop\Uni 3rd Yr\SDP"
```

Clone into a new temporary folder:

```PowerShell
git clone YOUR_GITHUB_REPOSITORY_URL todo_app_clean_test
cd todo_app_clean_test
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with the repository URL shown by:

```PowerShell
git remote get-url origin
```

Then follow only the README:

```PowerShell
npm.cmd ci
npm.cmd run dev
```

Confirm that:

* SQLite initialises automatically.
* The app opens at `http://localhost:3000`.
* No existing development tasks appear.
* A new task can be created.

Stop the server:

```
Ctrl+C
```

Then run:

```PowerShell
npm.cmd test
npm.cmd run check
```

Do not copy your original `data/tasks.db` into the clone.

---

# Stage 8E: Perform the marking walkthrough

From that clean clone, test in the brief’s exact order:

1. Install and start using only the README.
2. Create a task containing title, description, due date and topic.
3. Edit the task and reload the page.
4. Archive it and confirm that it remains viewable.
5. Sort by topic, status and due date.
6. Create or edit a past-due task and confirm that `Overdue` appears separately from status.
7. Stop and restart the application and confirm that the data persists.

Also test that:

* A completed past-due task is not overdue.
* Changing it back to `Todo` or `In-Progress` makes it overdue again.
* Archived tasks cannot be edited.
* There is no Delete button.
* The status choices contain only `Todo`, `In-Progress` and `Complete`.

---

# Stage 8F: Save the AI transcripts

The submission requires transcripts of AI use for planning, code generation and debugging.

Save this full conversation without editing it. It already demonstrates:

* Constraints stated before coding.
* Discussion of design decisions.
* Your rejection of requiring every field.
* Your correction of the creation-form layout.
* Debugging of the hydration warning.
* Decisions traceable to the final code.

That is especially useful because the highest AI rubric level requires at least one clear instance where you identify an unsuitable output and redirect it.

The AI policy says assessment transcripts may need to be submitted unedited and that assessment work should begin in a new session.

---

# Final documentation commit

After the clean-clone test and README corrections:

```PowerShell
git add .

git commit -m "Finalise documentation and clean-clone instructions" `
  -m "Updates dependency reasons, database documentation, testing instructions, AI declarations, and verified commands for installing and running the application from a clean clone." `
  -m "Assisted-by: ChatGPT-Web[GPT-5.6 Thinking]"

git push origin main
```

After this, the last phase is the **final repository and submission checklist**, including checking your commit history, GitHub link, transcripts and due-date submission package.

* * *

**You:**

Uploaded a fileUploaded a file

* * *

**ChatGPT:**

I reviewed both files. Your `package.json` and README are well aligned, with **one definite correction and one final-cleanup change**.

## Definite correction

Delete this sentence from the README:

> Once tests are added, replace that final sentence with the actual command, probably:

Your tests and `npm test` command already exist. The package scripts confirm that Jest is configured and that `npm run check` runs lint, tests and the production build.

Keep the section that follows:

````Markdown
### Run the automated tests

```bash
npm test
```

The tests use a fresh in-memory SQLite database and do not depend on the developer's local database or its contents.
````

## Final-cleanup change

Remove this sentence before submission:

> This section will be updated whenever another package is installed.

Your dependency list is now complete and matches `package.json`:

* Next.js
* React
* React DOM
* better-sqlite3
* ESLint
* eslint-config-next
* Jest

## Everything else checks out

Your README correctly includes:

* Exact Node and npm versions.
* `npm ci` for installation.
* `npm run dev` to initialise the database and start the app.
* `npm test` as the single test command.
* `npm run check` for lint, tests and build.
* Reasons for each directly installed package.
* The full database schema and absence of relationships.
* Archive as a flag rather than deletion.
* Overdue as a derived value.
* Sorting behaviour.
* Deterministic in-memory database testing.
* AI code-generation, inline-tool non-usage and code-review declarations.

That meets the brief’s requirement for specific Third-Party Code, Database Design and Running It documentation.

After those two edits, run:

```PowerShell
npm.cmd run check
git status
```

Then commit:

```PowerShell
git add README.md

git commit -m "Finalise project documentation" `
  -m "Removes outdated development notes and confirms the final installation, testing, dependency, database and AI usage documentation." `
  -m "Assisted-by: ChatGPT-Web[GPT-5.6 Thinking]"

git push origin main
```

* * *

**You:**

give me the steps to check that my readme has all the installation instructions necessary
Task Tracker
A local-first todo application created for COMS3011A Lab 1.

The application is built with Next.js and JavaScript and is designed to run locally for a single user.

Running It
Requirements
Node.js 24.14.0
npm 11.9.0
Install dependencies
From the project root, run:

npm ci
Start the development server
npm run dev
The database is automatically initialised before the development server starts.

Open http://localhost:3000 in a browser.

Check the project
To run the linter, automated tests and production build:

npm run check
Initialise the database manually
The database normally initialises automatically. To initialise it separately, run:

npm run db:init
Run the automated tests
npm test
The tests use a fresh in-memory SQLite database and do not depend on the developer's local database or its contents.

Third-Party Code
The following third-party packages are currently used:

Next.js — provides the application framework, routing and server-side functionality.
React — provides the component-based user interface.
React DOM — renders React components in the browser.
ESLint — checks the JavaScript code for potential errors and style problems.
eslint-config-next — provides the ESLint rules recommended for Next.js projects.
better-sqlite3 — provides the SQLite database connection and a straightforward synchronous API suitable for this local single-user application.
Jest — provides the automated test runner and assertions used to verify database and task behaviour.
Database Design
The application uses SQLite and contains one table named tasks.

Tasks table
Column	Type	Constraints and purpose
id	INTEGER	Primary key that uniquely identifies each task.
title	TEXT	Required and cannot be blank.
description	TEXT	Optional. An omitted description is stored as an empty string.
due_date	TEXT	Required calendar date stored in YYYY-MM-DD format.
topic	TEXT	Required and cannot be blank.
status	TEXT	Required and restricted to Todo, In-Progress or Complete. Defaults to Todo.
archived	INTEGER	Required archive flag restricted to 0 for active or 1 for archived. Defaults to 0.
There are no relationships between tables because the application uses only one table.

Archived tasks remain in the tasks table. Archiving changes the archived value rather than deleting or copying the task.

Overdue is not stored in the database. It is derived whenever tasks are read. A task is overdue when its due date is earlier than the current local calendar date and its status is not Complete.

Changing a task to or from Complete, or changing its due date, causes the overdue result to be recalculated from the updated values.

Title, due date and topic are required when creating or editing a task. Description is optional.

Task sorting
Active and archived task lists can be sorted by:

Due date, with the default order being earliest to latest.
Topic, using case-insensitive alphabetical order.
Status, using the order Todo, In-Progress, Complete.
Each sorting option can also be reversed.

Testing
The repository contains automated tests for:

Creating tasks and applying the default Todo status.
Editing task details without overwriting status.
Archiving tasks without deleting them.
Recalculating overdue when status changes to or from Complete.
Sorting tasks by due date, topic and status.
Every test runs against a new in-memory SQLite database. The tests are deterministic and do not use the local data/tasks.db file.

AI Usage
This repository makes use of AI code generation using the following tools:

ChatGPT-Web[GPT-5.6 Thinking]
This repository does not use AI in-line editing tools.

This repository makes use of AI code review using the following tools:

ChatGPT-Web[GPT-5.6 Thinking]
Document Declaration
The preceding document was planned, reviewed and edited with the assistance of the following:

ChatGPT-Web[GPT-5.6 Thinking]

* * *

**ChatGPT:**

Your README contains the necessary commands. The best way to prove that it is complete is to test it exactly as a marker would: from a completely clean clone, using only the README. The rubric specifically requires the Node version and every command needed to install, run and test the application from a clean clone.

## 1. Push your latest changes

In your normal project folder:

```PowerShell
git status
git add .
git commit -m "Finalise README instructions"
git push origin main
```

Only commit if there are uncommitted changes.

## 2. Get the GitHub repository address

Run:

```PowerShell
git remote get-url origin
```

Copy the URL it displays.

## 3. Clone into a completely separate folder

Move outside your existing project:

```PowerShell
cd "C:\Users\shayn\OneDrive\Desktop\Uni 3rd Yr\SDP"
```

Clone it using a new folder name:

```PowerShell
git clone YOUR_REPOSITORY_URL todo_app_readme_test
cd todo_app_readme_test
```

Do not copy anything from your original project folder, especially:

* `node_modules`
* `.next`
* `data/tasks.db`
* environment files

## 4. Confirm the required software versions

Run:

```PowerShell
node -v
npm.cmd -v
```

You should get:

```
v24.14.0
11.9.0
```

These match the versions stated in your README.

## 5. Follow only the README installation command

Run:

```PowerShell
npm.cmd ci
```

Check that:

* Installation finishes without errors.
* `node_modules` is created.
* You do not need to install anything manually.
* You do not need to change any files.

## 6. Start the application using only the README

Run:

```PowerShell
npm.cmd run dev
```

Your `package.json` has a `predev` script, so npm should automatically run the database initialisation before starting Next.js.

The terminal should show both:

```
npm run db:init
```

and the Next.js development server starting.

Open:

```
http://localhost:3000
```

Confirm that:

* The application opens.
* There are no database errors.
* Active and Archived tabs work.
* The database was created without manually running `npm run db:init`.

## 7. Confirm persistence

Create one task containing:

* Title
* Description
* Due date
* Topic

Refresh the browser. The task should remain.

Stop the server:

```
Ctrl+C
```

Start it again:

```PowerShell
npm.cmd run dev
```

The task should still appear. This confirms that the startup instructions create and use a persistent SQLite database.

## 8. Test the documented test command

Stop the server and run:

```PowerShell
npm.cmd test
```

You should see all five tests pass.

Your README correctly explains that the tests use an in-memory database rather than the developer’s local database.

## 9. Test the complete check command

Run:

```PowerShell
npm.cmd run check
```

It should successfully run:

1. ESLint
2. Jest tests
3. The Next.js production build

That matches the actual script in `package.json`.

## 10. Test manual database initialisation

Delete the test database from the clean clone:

```PowerShell
Remove-Item data\tasks.db -ErrorAction SilentlyContinue
Remove-Item data\tasks.db-shm -ErrorAction SilentlyContinue
Remove-Item data\tasks.db-wal -ErrorAction SilentlyContinue
```

Then run the separately documented command:

```PowerShell
npm.cmd run db:init
```

Confirm that `data/tasks.db` is recreated.

## Final README audit

Your **Running It** section should clearly contain this exact information:

````Markdown
## Running It

### Requirements

- Node.js 24.14.0
- npm 11.9.0

### Install dependencies

```bash
npm ci
````

### Start the application

```Bash
npm run dev
```

The database is automatically initialised before the development server starts.

Open `http://localhost:3000` in a browser.

### Run the automated tests

```Bash
npm test
```

The tests use a fresh in-memory SQLite database and do not depend on the developer's local database or its contents.

### Check the project

To run the linter, automated tests and production build:

```Bash
npm run check
```

### Initialise the database manually

```Bash
npm run db:init
```

```

Use `npm` in the README, not `npm.cmd`, because `npm` is the normal cross-platform instruction. You only use `npm.cmd` locally because of your PowerShell execution-policy configuration.

Once all four commands work in the clean clone without using any outside instructions, your README meets the installation, running and testing requirement.
```

* * *

**You:**

Now the lecturer sent this. what is documentation and how to add it?
For clarity of the submission, please have your documentation in the repo under a folder called 'docs' or something similar. Please submit the transcripts the same way under an 'ai' folder.
That means your submission should be just the repo link.

* * *

**ChatGPT:**

“Documentation” means the written Markdown files explaining how the project works and how to run it. It is **not the JavaScript code or code comments**.

For this lab, the required documentation is:

1. **Third-Party Code** — installed packages and why each was chosen.
2. **Database Design** — the table, columns, constraints and relationships.
3. **Running It** — Node version and exact install, run and test commands.

The lecturer now wants these files inside a `docs` folder, and all AI transcripts inside an `ai` folder. The repository link will then be the entire submission.

# Recommended repository structure

Your project should look approximately like this:

```
todo_app/
├── ai/
│   ├── README.md
│   └── chatgpt-lab-1-transcript.pdf
├── docs/
│   ├── database-design.md
│   ├── running-it.md
│   └── third-party-code.md
├── scripts/
├── src/
├── tests/
├── README.md
├── package.json
└── package-lock.json
```

The transcript can also be `.html`, `.txt` or `.md`, provided it is complete and unedited.

# Step 1: Create the folders

From your project root, run:

```PowerShell
New-Item -ItemType Directory -Force docs
New-Item -ItemType Directory -Force ai
```

# Step 2: Create the documentation files

## `docs/running-it.md`

Create the file and add:

````Markdown
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
````

You must still keep the essential install and startup commands in the main `README.md`, because the functional walkthrough requires the application to install and start by following the README alone.

## `docs/third-party-code.md`

Add:

```Markdown
# Third-Party Code

The following third-party packages are directly installed by the project:

- **Next.js** — provides the application framework, routing and server-side functionality.
- **React** — provides the component-based user interface.
- **React DOM** — renders React components in the browser.
- **better-sqlite3** — provides the SQLite database connection and a synchronous API suitable for this local single-user application.
- **Jest** — provides the automated test runner and assertions used to verify task and database behaviour.
- **ESLint** — checks the JavaScript code for potential errors and code-quality issues.
- **eslint-config-next** — provides the ESLint rules recommended for Next.js applications.

No third-party source code was copied directly into the project. The packages above were installed through npm and are recorded in `package.json` and `package-lock.json`.

## AI Declaration

The preceding document was planned, reviewed and edited with the assistance of the following:

- ChatGPT-Web[GPT-5.6 Thinking]
```

## `docs/database-design.md`

Add:

```Markdown
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
```

These individual declarations matter because the AI policy says submitted documents must contain an AI usage or non-usage declaration.

# Step 3: Add an index inside `docs`

Create:

```
docs/README.md
```

Add:

```Markdown
# Project Documentation

The project documentation is divided into the following files:

- [Running the Application](running-it.md)
- [Third-Party Code](third-party-code.md)
- [Database Design](database-design.md)

## AI Declaration

The preceding document was planned and edited with the assistance of the following:

- ChatGPT-Web[GPT-5.6 Thinking]
```

# Step 4: Save the AI transcript

The brief requires transcripts covering planning, code generation and debugging.

This conversation contains all three:

* Planning and reviewing the design.
* Generating and revising code.
* Debugging the hydration warning.
* Your correction of the original required-field decision.
* Your correction of the task-creation-page design.

Save or export the **complete, unedited conversation** and place it in the `ai` folder using a clear name, for example:

```
ai/chatgpt-lab-1-transcript.pdf
```

Do not remove unsuccessful suggestions or errors. The rubric rewards transcripts that show you identifying an unsuitable output and redirecting it.

# Step 5: Create an AI index

Create:

```
ai/README.md
```

Add:

```Markdown
# AI Usage Transcripts

## Tools used

- **Tool:** ChatGPT Web
- **Model:** GPT-5.6 Thinking

## Uses

ChatGPT was used for:

- Reviewing the initial application plan against the brief and rubric.
- Discussing database and interface design decisions.
- Generating and reviewing code.
- Debugging application behaviour.
- Reviewing documentation and clean-clone instructions.

## Transcript

The complete, unedited transcript is stored in:

- `chatgpt-lab-1-transcript.pdf`

## AI Declaration

The preceding document was planned and edited with the assistance of the following:

- ChatGPT-Web[GPT-5.6 Thinking]
```

The AI policy requires the tool, model and purpose of use to be recorded.

# Step 6: Link the folders from the main README

Near the bottom of your main `README.md`, before the AI Usage section, add:

```Markdown
## Project Documentation

Detailed project documentation is available in the [`docs`](docs/) folder:

- [Running the Application](docs/running-it.md)
- [Third-Party Code](docs/third-party-code.md)
- [Database Design](docs/database-design.md)

## AI Transcripts

The complete AI usage transcript and supporting information are available in the [`ai`](ai/) folder.
```

Do not remove the installation commands from the main README.

# Step 7: Verify the folder contents

Run:

```PowerShell
Get-ChildItem docs
Get-ChildItem ai
git status
```

You should see all the documentation and transcript files listed as new files.

# Step 8: Commit and push

```PowerShell
git add README.md docs ai

git commit -m "Organise documentation and AI transcripts" `
  -m "Adds the required Running It, Third-Party Code and Database Design files under docs, and stores the complete AI usage transcript under ai for repository-only submission." `
  -m "Assisted-by: ChatGPT-Web[GPT-5.6 Thinking]"

git push origin main
```

Finally, open the repository on GitHub and confirm that both `docs` and `ai` are visible and that every link in the main README opens correctly. You will then submit only the GitHub repository link, as instructed by the lecturer.