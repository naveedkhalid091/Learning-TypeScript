#! /usr/bin/env node
import inquirer from "inquirer";
// Target
// 1. Empty list of an Array. 
// 2. set prompt Questions 
// 3. Applying while Loop for rapetative tasks. 
// 1. Empty list of an Array.
let todo = [];
// 2. Applying while Loop for rapetative tasks and Inquirer prompt inside it.
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "Q1",
            type: "input",
            message: "What you want to add in your List?"
        }, {
            name: "Q2",
            type: "confirm",
            default: "false",
            message: "Do you want to add more?"
        }
    ]);
    todo.push(addTask.Q1);
    condition = addTask.Q2;
    console.log(todo);
}
