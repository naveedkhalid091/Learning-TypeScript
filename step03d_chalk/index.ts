import chalk from "chalk";

import inquirer from "inquirer";

let answers = await inquirer.prompt({
    name: "age",
    type: "number",
    message: "Enter your Age:"
});


let a=10;
let b=20;

// chalk.selectColor will change the color while in terminal.
console.log(chalk.bgCyan(a+b))
console.log(chalk.bgBlue("Insha Allah, in " + (60 - answers.age) + " years you will be 60 years old."));

// cholk.bold will bold the text in terminal
console.log(chalk.bold("Insha Allah, in " + (60 - answers.age) + " years you will be 60 years old."));

console.log(chalk.italic("Insha Allah, in " + (60 - answers.age) + " years you will be 60 years old."));
