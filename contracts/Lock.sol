// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

contract TodoList {

    struct Task {
        string todo;
        bool completed;
    }

    Task[] public tasks;

    function addTask(string memory _todo) public {
        tasks.push(Task(_todo, false));
    }

    function getTask(uint256 _index) public view returns (Task memory) {
        return tasks[_index];
    }

    function toggleCompleted(uint256 _index) public {
        Task storage task = tasks[_index];
        task.completed = !task.completed;
    }
}