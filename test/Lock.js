const { expect } = require("chai");

describe("TodoList Contract", function () {
  let todo;

  beforeEach(async function () {
    const Todo = await ethers.getContractFactory("TodoList");
    todo = await Todo.deploy();
    await todo.waitForDeployment();
  });

  it("should add a task", async function () {
    await todo.addTask("Learn Solidity");

    const task = await todo.getTask(0);

    expect(task.todo).to.equal("Learn Solidity");
    expect(task.completed).to.equal(false);
  });

  it("should toggle task completion", async function () {
    await todo.addTask("Learn Solidity");

    await todo.toggleCompleted(0);

    const task = await todo.getTask(0);

    expect(task.completed).to.equal(true);
  });
});