#! /usr/bin/env node
import inquirer from "inquirer";
// 1) Computer will generate a random number 
const randomNumber = Math.floor(Math.random() * 6 + 1);
// 2) Allowing User for number Input. 
const answer = await inquirer.prompt([
    {
        name: "UserGuessedNumber",
        type: "number",
        message: "Guess the number between 1 to 6 to win a GIFT!!!",
    }
]);
// 3) compare your guessed number with random number and show result?
if (answer.UserGuessedNumber === randomNumber) {
    console.log("Congratulations! You won a Burger!");
}
else {
    console.log("Wrong number! Better Luck Next Time ");
}
12
