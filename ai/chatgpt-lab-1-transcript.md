# ChatGPT Chat Transcript

#### **User** (7/28/2026, 2:31:00 PM):
 
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

#### **ChatGPT** (7/28/2026, 2:32:39 PM):
 ## Overall review

Your plan is **strong and closely aligned with the brief**. Your database decisions in particular match the highest rubric level: keeping archived tasks in the same table, representing archive as a flag, and calculating overdue from the due date and status rather than storing it. fileciteturn0file1L90-L113

There are, however, several important corrections and additions before coding.

One source hierarchy issue must be noted: although you asked me to treat the two attached documents as the source of all truth, the COMS3011A AI Policy itself states that it supplements the broader Wits AI Policy and that the University policy takes priority if there is a conflict. Clarification must then be requested. fileciteturn0file0L5-L10

---

# 1. Mandatory requirements

These are required by the brief or needed for the complete rubric level.

## Application scope

The application must:

- Use **Next.js and SQLite**.
- Run locally through Node.js and npm or an equivalent.
- Be local-first and not require web deployment.
- Serve one user and have no user accounts. fileciteturn0file1L5-L11

Your plan mentions SQLite but does not yet explicitly record Next.js, local-only operation or the absence of authentication.

## Task functionality

The user must be able to:

- Create tasks.
- Edit tasks.
- Archive tasks.
- Continue viewing archived tasks.
- Never permanently delete a task.
- Store a title, description, due date and topic for every task.
- View tasks as a list.
- Sort by topic, status and due date. fileciteturn0file1L12-L19

## Statuses

The brief specifies the exact fixed statuses:

- `Todo`
- `In-Progress`
- `Complete`

Your plan currently uses **“In Progress” without the hyphen**. This contradicts the terminology in the brief. I recommend using `In-Progress` exactly in the database, interface, documentation and tests. fileciteturn0file1L16-L18

The user must not be able to create additional statuses.

## Overdue behaviour

Overdue must:

- Be visibly indicated.
- Not be a fourth status.
- Not appear in the status selector.
- Be derived from the due date and status rather than stored in the database. fileciteturn0file1L47-L49

Your decision that a completed task is no longer overdue is consistent with the rubric, which specifically says overdue should be derived from both the due date **and the status**. fileciteturn0file1L105-L113

## Persistence

The following must survive:

- A page reload.
- Stopping and restarting the application.

The functional walkthrough tests these separately. fileciteturn0file1L42-L49

## Database implementation

For full marks, you should have:

- A committed schema file or migration.
- Actual SQLite persistence.
- Sensible types and constraints.
- Archive represented by a flag or timestamp on the task.
- Overdue derived when tasks are read.
- Documentation that matches the actual shipped schema. fileciteturn0file1L90-L113

Your one-table design is appropriate.

## Tests

You need at least three tests, but “three meaningful tests” alone is not enough for the complete rubric level. The tests must:

- Exercise real behaviour.
- Include at least one test for archiving **or** the overdue rule.
- Be deterministic.
- Use a temporary or throwaway database.
- Not depend on your development database or existing data.
- Pass through one documented command. fileciteturn0file1L114-L128

## Documentation

Markdown documentation must contain:

1. **Third-Party Code**  
   Every directly installed library or package, with a sentence explaining why it was chosen.

2. **Database Design**  
   Tables, columns and relationships. Since you plan one table, explicitly state that there are no inter-table relationships.

3. **Running It**  
   The Node version and every exact command needed to install, initialise, run and test from a clean clone. fileciteturn0file1L20-L28

The documentation must describe the project as it actually exists, not only the intended design.

## Git history

For full marks:

- Have at least six commits.
- Each commit should represent a coherent piece of work.
- Each commit should leave the repository in a working state.
- Messages should explain what changed and, where necessary, why.
- Work must visibly take place over more than one session. fileciteturn0file1L72-L89

Simply making six commits at the end will not meet the complete level.

## Submission and AI records

The submission includes:

- GitHub repository link.
- Documentation files.
- AI transcripts covering planning, code generation and debugging. fileciteturn0file1L29-L32

This current conversation should therefore be saved as part of your planning transcript.

---

# 2. Optional design decisions in your plan

These are sensible, but the brief does not require them:

- Giving each status a different colour or visual style.
- Displaying both colour and written status.
- Using the exact label “Overdue”.
- Placing archived tasks in a separate tab or screen.
- Making all four form fields mandatory.
- Warning users about past due dates.
- Allowing the user to cancel or continue after the warning.
- Automatically assigning new tasks the `Todo` status.
- Allowing direct movement between any statuses.
- Asking for confirmation before archiving.
- Making due date the default sorting option.
- Having separate interfaces for status editing and detail editing.

These are not incorrect. They should simply not take priority over the marked functionality.

---

# 3. Missing or unclear decisions

## A. Exact overdue rule

You should define the rule precisely. My recommendation is:

> A task is overdue when its due date is earlier than the current local calendar date, its status is not `Complete`, and it has not been deleted because deletion is unsupported.

An archived task can still technically be overdue under this rule. The archived view may display that information, although the brief does not explicitly require it.

## B. Date format and timezone

Decide whether a due date is:

- A calendar date only, such as `2026-08-04`, or
- A date and time.

The brief says “Due Date”, not due time. A date-only value is simpler and less error-prone.

Recommended storage:

```text
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

- Topic: A to Z and Z to A.
- Status: workflow order and reverse workflow order.
- Due date: earliest first and latest first.

At minimum, each required field must visibly produce the correct ordering.

## E. Schema and migration strategy

Your plan describes the database conceptually but does not state how a clean clone creates the database.

You need one reproducible method, such as:

- A committed SQL migration that runs through a documented command, or
- A database migration system that creates the schema.

The marker should not need to manually create a table or copy your development database.

## F. Behaviour after archiving

You have correctly said that the task moves out of the active view and remains viewable. Still decide whether archived tasks can:

- Be edited.
- Have their status changed.
- Be restored to the active list.

None of these is required. The lowest-risk design is to make archived tasks read-only and not add restoration unless you have time.

## G. Validation rules

“All required information is present” needs a concrete definition.

Recommended minimum:

- Title is not blank after trimming whitespace.
- Description is not blank.
- Topic is not blank.
- Due date is a valid calendar date.
- Status must be one of the three permitted values.
- Archived must be either false or true.

The server/database layer should also validate important values rather than relying entirely on browser validation.

---

# 4. Unnecessary complexity

The largest optional complexity in your current plan is the **past-date warning with cancel-or-continue behaviour**. It requires additional modal state and testing but earns no direct marks. Since overdue tasks are explicitly part of the assignment, allowing past dates without a warning would still satisfy the brief.

Other features that should be avoided unless all marked work is finished:

- User accounts.
- Deployment.
- Deleting tasks.
- A separate topics table.
- Custom statuses.
- Drag-and-drop Kanban boards.
- Search and filtering beyond the required sorting.
- Multiple archive tables.
- Notifications.
- Combined multi-column sorting.
- Restoration history or audit logs.

A simple, reliable list application is safer than a more impressive application that fails the clean-clone walkthrough.

---

# 5. Issues that could reduce your marks

## High-risk issues

### 1. Using `In Progress` instead of `In-Progress`

The fixed status names should match the brief exactly.

### 2. No committed schema or migration

A database that only works because your own `.db` file exists could lose database-design and testing marks.

### 3. Tests use your development database

The complete testing level requires a throwaway database. fileciteturn0file1L117-L128

### 4. README misses one setup command

The walkthrough starts from a clean clone, and each step is pass/fail for four marks. Failure to install and start from the README receives only one short additional attempt before the walkthrough score becomes zero. fileciteturn0file1L37-L51

### 5. Documentation becomes a bare dependency list

Each installed package needs a reason, and the database section must explicitly address relationships. fileciteturn0file1L54-L71

### 6. Archive removes the task permanently

An archived task must leave the active list but remain viewable.

### 7. Overdue becomes a selectable status

This would directly contradict the functional walkthrough and database rubric.

### 8. Six artificial commits at the end

The history must be coherent, working and spread over more than one session.

### 9. Incomplete AI declarations

The policy requires document-level declarations. A document without an AI usage or non-usage declaration will not be marked or considered. fileciteturn0file0L36-L51

### 10. Missing AI-assisted commit messages

When AI generates code, the relevant commit must include:

```text
Assisted-by: ChatGPT-Web[GPT-5.6 Thinking]
```

The normal commit message must still explain the change. fileciteturn0file0L54-L61

### 11. README does not distinguish types of AI usage

The README must declare AI code generation, inline editing and code review, or explicitly state non-usage for the categories that were not used. fileciteturn0file0L62-L75

### 12. AI transcript shows whole-project generation

For full AI-usage marks, the transcript must show:

- Constraints stated before generation.
- Task-level use.
- At least one genuine instance where you identify an unsuitable or incorrect response and redirect it.
- Decisions in the transcript that can be traced to the submitted code. fileciteturn0file1L136-L150

Do not manufacture a rejection merely for the rubric. Preserve real corrections when they occur.

---

# 6. Revised checklist

## Scope

- [ ] Project uses Next.js.
- [ ] Project uses SQLite.
- [ ] Runs locally with Node.js.
- [ ] No deployment is required.
- [ ] No user accounts or authentication.
- [ ] No permanent task deletion.

## Task behaviour

- [ ] Create a task with title, description, due date and topic.
- [ ] New task receives `Todo`.
- [ ] Edit all task details.
- [ ] Change status between `Todo`, `In-Progress` and `Complete`.
- [ ] Direct status changes are allowed.
- [ ] Changes survive a page reload.
- [ ] Archive a task.
- [ ] Archived task leaves the active list.
- [ ] Archived task remains viewable.
- [ ] No Delete button, delete endpoint or delete workflow.

## Sorting and overdue

- [ ] Sort by topic.
- [ ] Sort by status.
- [ ] Sort by due date.
- [ ] Define status sorting order.
- [ ] Define sorting directions.
- [ ] Overdue is visibly indicated.
- [ ] Overdue is not selectable as a status.
- [ ] Overdue is not stored.
- [ ] Completed tasks are not shown as overdue.
- [ ] Overdue is recalculated after due-date or status changes.

## Database

- [ ] One `tasks` table.
- [ ] Stable primary key.
- [ ] Four task-information fields.
- [ ] Status field constrained to the three exact values.
- [ ] Archive represented by a flag or timestamp.
- [ ] Due date stored consistently.
- [ ] Committed schema or migration.
- [ ] Database created automatically from a clean clone.
- [ ] Documentation matches the implemented schema.

## Testing

- [ ] At least three tests.
- [ ] Tests exercise real behaviour.
- [ ] At least one test covers archiving or overdue.
- [ ] Tests use a throwaway database.
- [ ] Tests do not depend on existing data.
- [ ] Tests are deterministic.
- [ ] All tests run through one documented command.

## Documentation

- [ ] Third-Party Code section.
- [ ] Every direct dependency has a reason.
- [ ] Database Design section.
- [ ] Table columns and constraints documented.
- [ ] Relationships explicitly addressed.
- [ ] Running It section.
- [ ] Exact Node version included.
- [ ] Exact clean-install command included.
- [ ] Exact database setup command included, if separate.
- [ ] Exact run command included.
- [ ] Exact test command included.
- [ ] Commands verified from a clean clone.

## Git and submission

- [ ] At least six coherent commits.
- [ ] Each commit leaves the repository working.
- [ ] Commit messages are descriptive.
- [ ] Work is spread over more than one session.
- [ ] GitHub repository link ready.
- [ ] Documentation included.
- [ ] Unedited AI transcripts included.

## AI policy

- [ ] This planning conversation is saved.
- [ ] A new AI session is used for the assessment.
- [ ] Every submitted document has an AI usage or non-usage declaration.
- [ ] AI-generated code commits include `Assisted-by`.
- [ ] README declares code generation use or non-use.
- [ ] README declares inline AI use or non-use.
- [ ] README declares AI code review use or non-use.
- [ ] Transcript preserves real corrections and redirections.
- [ ] All generated output is personally checked.

---

# 7. Staged implementation plan

## Stage 0: Confirm the design

Finalise:

- Exact status strings.
- Due-date format.
- Overdue formula.
- Archive representation.
- Status sorting order.
- Whether archived tasks are read-only.
- Whether the optional past-date warning will be included.

Save this conversation as the beginning of the planning transcript.

## Stage 1: Create the project skeleton

- Create the Next.js project.
- Add basic navigation for Active and Archived tasks.
- Add empty documentation headings.
- Add initial README run instructions.
- Confirm the application starts.

Suggested commit:

```text
Set up local Next.js task application structure
```

## Stage 2: Implement the database

- Add the SQLite dependency.
- Create the migration or schema file.
- Create the `tasks` table.
- Add the data-access layer.
- Confirm database creation works from an empty environment.

Suggested commit:

```text
Add persistent SQLite task schema and data access
```

## Stage 3: Implement create and list

- Add the create-task form.
- Validate the four fields.
- Assign `Todo`.
- Save the task.
- Display it in the active list.

Suggested commit:

```text
Add task creation and active task list
```

## Stage 4: Implement editing and statuses

- Edit title, description, due date and topic.
- Change between the three fixed statuses.
- Save updates to SQLite.
- Confirm changes survive a reload.

Suggested commit:

```text
Add persistent task editing and status updates
```

## Stage 5: Implement archiving

- Add Archive.
- Set the archived flag.
- Remove archived tasks from the active query.
- Add the archived-task view.
- Ensure no deletion is implemented.

Suggested commit:

```text
Add non-destructive task archiving and archive view
```

## Stage 6: Implement sorting and overdue

- Add topic sorting.
- Add status sorting.
- Add due-date sorting.
- Derive overdue at read/display time.
- Display overdue independently of status.
- Confirm completed tasks are not flagged.

Suggested commit:

```text
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

```text
Add isolated database tests for core task behaviour
```

## Stage 8: Complete documentation and AI attribution

- Document every direct dependency and its reason.
- Document the actual schema and absence of relationships.
- Add verified Node and npm commands.
- Add AI usage declarations.
- Add transcripts required by the brief.

Suggested commit:

```text
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
7. Restart the application and verify persistence. fileciteturn0file1L39-L51

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

#### **User** (7/28/2026, 2:53:57 PM):
 [object Object]
I would prefer to use JavaScript rather than TypeScript because I have  previous experience with JavaScript, React, Node.js and Jest. 



Please confirm whether JavaScript is fully suitable for all lab  requirements. If there is a specific technical reason why TypeScript would be necessary for this project, explain it before we decide. 
Otherwise, revise the setup plan to use JavaScript.



#### **User** (7/28/2026, 3:02:13 PM):
 yes, it runs

#### **User** (7/28/2026, 4:23:23 PM):
 [object Object]
error
[browser] A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch `if (typeof window !== 'undefined')`.
- Variable input such as `Date.now()` or `Math.random()` which changes each time it's called.
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

#### **User** (7/28/2026, 5:11:45 PM):
 


#### **ChatGPT** (7/28/2026, 5:11:47 PM):
 I reviewed both files. Your `package.json` and README are well aligned, with **one definite correction and one final-cleanup change**.

## Definite correction

Delete this sentence from the README:

> Once tests are added, replace that final sentence with the actual command, probably:

Your tests and `npm test` command already exist. The package scripts confirm that Jest is configured and that `npm run check` runs lint, tests and the production build. fileciteturn2file1L5-L13

Keep the section that follows:

````markdown
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

- Next.js
- React
- React DOM
- better-sqlite3
- ESLint
- eslint-config-next
- Jest

fileciteturn2file0L58-L70 fileciteturn2file1L15-L24

## Everything else checks out

Your README correctly includes:

- Exact Node and npm versions.
- `npm ci` for installation.
- `npm run dev` to initialise the database and start the app.
- `npm test` as the single test command.
- `npm run check` for lint, tests and build.
- Reasons for each directly installed package.
- The full database schema and absence of relationships.
- Archive as a flag rather than deletion.
- Overdue as a derived value.
- Sorting behaviour.
- Deterministic in-memory database testing.
- AI code-generation, inline-tool non-usage and code-review declarations.

fileciteturn2file0L7-L45 fileciteturn2file0L72-L118 fileciteturn2file0L120-L136

That meets the brief’s requirement for specific Third-Party Code, Database Design and Running It documentation. fileciteturn0file1L20-L28

After those two edits, run:

```powershell
npm.cmd run check
git status
```

Then commit:

```powershell
git add README.md

git commit -m "Finalise project documentation" `
  -m "Removes outdated development notes and confirms the final installation, testing, dependency, database and AI usage documentation." `
  -m "Assisted-by: ChatGPT-Web[GPT-5.6 Thinking]"

git push origin main
```

#### **User** (8/3/2026, 2:58:31 PM):
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

#### **ChatGPT** (8/3/2026, 2:58:33 PM):
 Your README contains the necessary commands. The best way to prove that it is complete is to test it exactly as a marker would: from a completely clean clone, using only the README. The rubric specifically requires the Node version and every command needed to install, run and test the application from a clean clone. fileciteturn0file1L20-L28

## 1. Push your latest changes

In your normal project folder:

```powershell
git status
git add .
git commit -m "Finalise README instructions"
git push origin main
```

Only commit if there are uncommitted changes.

## 2. Get the GitHub repository address

Run:

```powershell
git remote get-url origin
```

Copy the URL it displays.

## 3. Clone into a completely separate folder

Move outside your existing project:

```powershell
cd "C:\Users\shayn\OneDrive\Desktop\Uni 3rd Yr\SDP"
```

Clone it using a new folder name:

```powershell
git clone YOUR_REPOSITORY_URL todo_app_readme_test
cd todo_app_readme_test
```

Do not copy anything from your original project folder, especially:

- `node_modules`
- `.next`
- `data/tasks.db`
- environment files

## 4. Confirm the required software versions

Run:

```powershell
node -v
npm.cmd -v
```

You should get:

```text
v24.14.0
11.9.0
```

These match the versions stated in your README. fileciteturn2file0L7-L19

## 5. Follow only the README installation command

Run:

```powershell
npm.cmd ci
```

Check that:

- Installation finishes without errors.
- `node_modules` is created.
- You do not need to install anything manually.
- You do not need to change any files.

## 6. Start the application using only the README

Run:

```powershell
npm.cmd run dev
```

Your `package.json` has a `predev` script, so npm should automatically run the database initialisation before starting Next.js. fileciteturn2file1L5-L13

The terminal should show both:

```text
npm run db:init
```

and the Next.js development server starting.

Open:

```text
http://localhost:3000
```

Confirm that:

- The application opens.
- There are no database errors.
- Active and Archived tabs work.
- The database was created without manually running `npm run db:init`.

## 7. Confirm persistence

Create one task containing:

- Title
- Description
- Due date
- Topic

Refresh the browser. The task should remain.

Stop the server:

```text
Ctrl+C
```

Start it again:

```powershell
npm.cmd run dev
```

The task should still appear. This confirms that the startup instructions create and use a persistent SQLite database.

## 8. Test the documented test command

Stop the server and run:

```powershell
npm.cmd test
```

You should see all five tests pass.

Your README correctly explains that the tests use an in-memory database rather than the developer’s local database. fileciteturn2file0L48-L56

## 9. Test the complete check command

Run:

```powershell
npm.cmd run check
```

It should successfully run:

1. ESLint
2. Jest tests
3. The Next.js production build

That matches the actual script in `package.json`. fileciteturn2file1L5-L13

## 10. Test manual database initialisation

Delete the test database from the clean clone:

```powershell
Remove-Item data\tasks.db -ErrorAction SilentlyContinue
Remove-Item data\tasks.db-shm -ErrorAction SilentlyContinue
Remove-Item data\tasks.db-wal -ErrorAction SilentlyContinue
```

Then run the separately documented command:

```powershell
npm.cmd run db:init
```

Confirm that `data/tasks.db` is recreated.

## Final README audit

Your **Running It** section should clearly contain this exact information:

```markdown
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

The tests use a fresh in-memory SQLite database and do not depend on the developer's local database or its contents.

### Check the project

To run the linter, automated tests and production build:

```bash
npm run check
```

### Initialise the database manually

```bash
npm run db:init
```
```

Use `npm` in the README, not `npm.cmd`, because `npm` is the normal cross-platform instruction. You only use `npm.cmd` locally because of your PowerShell execution-policy configuration.

Once all four commands work in the clean clone without using any outside instructions, your README meets the installation, running and testing requirement.

#### **User** (8/3/2026, 3:21:10 PM):
 Now the lecturer sent this. what is documentation and how to add it?
For clarity of the submission, please have your documentation in the repo under a folder called 'docs' or something similar. Please submit the transcripts the same way under an 'ai' folder.
That means your submission should be just the repo link.

#### **ChatGPT** (8/3/2026, 3:21:12 PM):
 “Documentation” means the written Markdown files explaining how the project works and how to run it. It is **not the JavaScript code or code comments**.

For this lab, the required documentation is:

1. **Third-Party Code** — installed packages and why each was chosen.
2. **Database Design** — the table, columns, constraints and relationships.
3. **Running It** — Node version and exact install, run and test commands. fileciteturn0file1L20-L28

The lecturer now wants these files inside a `docs` folder, and all AI transcripts inside an `ai` folder. The repository link will then be the entire submission.

# Recommended repository structure

Your project should look approximately like this:

```text
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

```powershell
New-Item -ItemType Directory -Force docs
New-Item -ItemType Directory -Force ai
```

# Step 2: Create the documentation files

## `docs/running-it.md`

Create the file and add:

````markdown
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

You must still keep the essential install and startup commands in the main `README.md`, because the functional walkthrough requires the application to install and start by following the README alone. fileciteturn0file1L39-L43

## `docs/third-party-code.md`

Add:

```markdown
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

```markdown
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

These individual declarations matter because the AI policy says submitted documents must contain an AI usage or non-usage declaration. fileciteturn0file0L36-L51

# Step 3: Add an index inside `docs`

Create:

```text
docs/README.md
```

Add:

```markdown
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

The brief requires transcripts covering planning, code generation and debugging. fileciteturn0file1L29-L32

This conversation contains all three:

- Planning and reviewing the design.
- Generating and revising code.
- Debugging the hydration warning.
- Your correction of the original required-field decision.
- Your correction of the task-creation-page design.

Save or export the **complete, unedited conversation** and place it in the `ai` folder using a clear name, for example:

```text
ai/chatgpt-lab-1-transcript.pdf
```

Do not remove unsuccessful suggestions or errors. The rubric rewards transcripts that show you identifying an unsuitable output and redirecting it. fileciteturn0file1L136-L150

# Step 5: Create an AI index

Create:

```text
ai/README.md
```

Add:

```markdown
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

The AI policy requires the tool, model and purpose of use to be recorded. fileciteturn0file0L14-L20

# Step 6: Link the folders from the main README

Near the bottom of your main `README.md`, before the AI Usage section, add:

```markdown
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

```powershell
Get-ChildItem docs
Get-ChildItem ai
git status
```

You should see all the documentation and transcript files listed as new files.

# Step 8: Commit and push

```powershell
git add README.md docs ai

git commit -m "Organise documentation and AI transcripts" `
  -m "Adds the required Running It, Third-Party Code and Database Design files under docs, and stores the complete AI usage transcript under ai for repository-only submission." `
  -m "Assisted-by: ChatGPT-Web[GPT-5.6 Thinking]"

git push origin main
```

Finally, open the repository on GitHub and confirm that both `docs` and `ai` are visible and that every link in the main README opens correctly. You will then submit only the GitHub repository link, as instructed by the lecturer.

