// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

contract TodoList {
    struct Task {
        uint256 id;
        string todo;
        bool completed;
        uint256 createdAt;
    }

    Task[] public tasks;
    uint256 private nextId;

    function addTask(string memory _todo) public {
        tasks.push(Task({id: nextId, todo: _todo, completed: false, createdAt: block.timestamp})); nextId++;
    }

    function getTask(uint256 _index) public view returns (Task memory) {
        return tasks[_index];
    }

    function toggleCompleted(uint256 _index) public {
        Task storage task = tasks[_index];
        task.completed = !task.completed;
    }
}
