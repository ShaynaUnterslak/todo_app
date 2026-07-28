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