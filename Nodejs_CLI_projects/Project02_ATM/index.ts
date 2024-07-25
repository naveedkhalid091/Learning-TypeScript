#! /usr/bin/env node

import inquirer from "inquirer";


// Targets
// 1. Show Insert your Card message
// 2. Enter your PIN Prompt
// 3. Showing of a message of PIN Validation.
// 4. Propmt further operations if PIN is validated
// 5. Selection of Different Operations i.e. Cash Withdrawal, balance enquiry etc. 
// 5. Remaining balance after your cash withdraw
// 6. Response in case of PIN Invalid
// 7. A Greeting Message for Choosing Naveed's Banking


let myBalance=100000;
const myPIN=3693;

// 1. Show Insert your Card message

console.log("Insert you ATM Card")

// 2. Enter your Pin Prompt
const enterPin= await inquirer.prompt(   
    {
        name:"PINQ",
        type:"number",
        message:"Enter your PIN"
    }
)
 // 3. Showing of a message of PIN Validation Operations if your PIN is validated.
if(enterPin.PINQ===myPIN){
    console.log("Your PIN is validated")   
     // 4. Propmt further operations if PIN is validated
    let enterOperation=await inquirer.prompt(
    {
        name:"operation",
        message:"Please Select the option",
        type:"list",
        choices:["Balance Inquiry","Cash Withdrawal","Mini Statement","Other Services"]
    })
    // 5. Selection of Different Operations 
    if(enterOperation.operation==="Balance Inquiry"){
        setTimeout(() => {
            console.log("Please wait...!")    
        }, 1000);

        setTimeout(() => {
            console.log(`Your Total Balance is:`+ myBalance)
        }, 3000);
        setTimeout(() => {
            console.log("Thank you for Choosing Naveed's Banking")
        }, 5000); 
    };
    // 5. Selection of Different Operations
    if(enterOperation.operation==="Mini Statement"){
        setTimeout(() => {
            console.log("Printing.....!!!!")    
        }, 1000);
        setTimeout(() => {
            console.log("Please Take your Mini statment.")    
        }, 3000);
        setTimeout(() => {
            console.log("Thank you for Choosing Naveed's Banking")
        }, 5000);
    };
    // 5. Selection of Different Operations
    if(enterOperation.operation==="Other Services"){
        setTimeout(() => {
            console.log("This Feature is COMING SOON.....!!!!")    
        }, 2000);
        setTimeout(() => {
            console.log("Thank you for Choosing Naveed's Banking")
        }, 3000);
    }
    // 5. Selection of Different Operations
    if(enterOperation.operation==="Cash Withdrawal"){
        let enterAmount=await inquirer.prompt({
        name:"amount",
        type: "number",
        message:"Enter your amount",
        })
        console.log("Please Wait....!")    
            if(myBalance<enterAmount.amount){
                console.log("You don't have sufficient Balance");
                setTimeout(() => {
                    console.log("Thank you for Choosing Naveed's Banking")
                }, 2000);
                }else {
                    setTimeout(() => {
                        console.log("Please take your Cash")    
                    }, 2000);
                    setTimeout(() => {
                        console.log("Your Remaining Balance is:",myBalance-enterAmount.amount)    
                    }, 4000);
                    setTimeout(() => {
                        console.log("Thank you for Choosing Naveed's Banking")
                    }, 5000);
                }
    } 
    // 6. Response in case of PIN Invalid
}else{
    console.log("Invalid PIN")
    setTimeout(() => {
        console.log("Thank you for Choosing Naveed's Banking")
    }, 2000);
}


