const { expect } = require("chai");

describe("TodoList Contract", function () {
  let Todo, todo, owner;

  beforeEach(async function () {
    [owner] = await ethers.getSigners();

    Todo = await ethers.getContractFactory("TodoList");
    todo = await Todo.deploy();
    await todo.waitForDeployment();
  });

  it("should add a task", async function () {
    await todo.addTask("Learn Solidity");

    const tasks = await todo.getMyTasks();

    expect(tasks.length).to.equal(1);
    expect(tasks[0].content).to.equal("Learn Solidity");
    expect(tasks[0].completed).to.equal(false);
  });

  it("should toggle task completion", async function () {
    await todo.addTask("Build Web3 app");

    await todo.toggleTask(0);

    const task = await todo.getTask(0);

    expect(task.completed).to.equal(true);
  });
});