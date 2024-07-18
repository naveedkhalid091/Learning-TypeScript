#! /usr/bin/env node 

import inquirer from "inquirer"; // you should read the documentation of inquirer.   
import chalk from "chalk";
import { sum }  from "./functions.js";
import { sub } from "./functions.js";
import { mul } from "./functions.js";
import { div } from "./functions.js";
import showBanner from "node-banner";  // import and Install method is mentioned https://www.npmjs.com/package/node-banner
import gradient from "gradient-string"; // import and install from https://www.npmjs.com/package/gradient-string

let answers=[
    {
        name:"num1",
        type:"number",
        message: gradient.rainbow("Enter first number"),
        validate:(input:number)=>{
            if(isNaN(input)){
                return "Please enter numbers only"
            }
            return true;
        }
    },{
        name:"num2",
        type:"number",
        message:gradient.rainbow("Enter second number"), // use gradient.rainbow for rainbow colours only otherwise not req.
        validate:(input:number)=>{
            if(isNaN(input)){
                return "Please enter numbers only"
            }
            return true;
        }

    },{
        name:"operation",
        type:"list",
        choices:["add","sub","mul","div"],
        message:"Enter your Operation",
        validate:(input:number)=>{
            if(isNaN(input)){
                return "Please enter numbers only"
            }
            return true;
        }
    }
];

let answer=[
    {
        name:"again",
        type:"confirm",
        message:"do you want to calculate again?"
    }
];

/* for inclusion of Banner in CLI following code is taken from 
    https://www.npmjs.com/package/node-banner
*/

(async () => {
    await showBanner(`Calculator`, 'A calculator for Basic calculations',`yellow`,`green`);
})();


// myself code starts again.

async function calculator(){
    let condition=true;
    while(condition){
        let {num1,num2,operation}=await inquirer.prompt(answers)
        if(operation==="add"){
            console.log(chalk.redBright("The sum is:", sum(num1,num2)))
            }else if (operation==="sub"){
            console.log(chalk.redBright("The result is", sub(num1,num2)))
            }else if (operation==="mul"){
            console.log(chalk.redBright("The result is", mul(num1,num2)))
            }else if (operation==="div"){
            console.log(chalk.redBright("The result is", div(num1,num2)))
        }
        let {again}=await inquirer.prompt(answer);
        condition=again;
    }
}

/*calculator function is called inside the "setTimeout function"

    The setTimeout function in TypeScript, 
    is used to execute a specified piece of code after 
    a specified amount of time (in milliseconds). 
    It is a way to delay the execution of code. 
    where "1000 mili-seconds = 1sec", so code will be displayed after one second 
    of displaying a banner
*/

setTimeout(() => {
    calculator();    
}, 1000);