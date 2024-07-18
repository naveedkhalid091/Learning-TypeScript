TypeScript is fundamently a synchronous language (Execute its code line by line) or 
it execute one statement at a time. 

However, it also has a mechanism for handling asynchronous operations(Making it capable of managing tasks without blocking the main thread).

It achivees through  
# i) CallBack functions
# ii) Promises
# iii) Async/await


# i) CallBack functions
When a simple function is called/invoked into a higher order function, this situation is called "callback function". 

# Note: Only higher order functions accepts the simple functions into it. simple functions can't be passed into simple functions.

Now we will understand what are "higher order functions". How to crate them and how to use simple functions into higher order functions

# Higher Order Functions
1. Higher order functions are those functions that accept other functions as arguments. 
2. When the same parameter is invoked as a function inside the same function, this makes a simple function into a higher order function.  

i.e. 

function higherOrderFunction(a,b,callback){
    callback(a,b);  // second condition applied       
}


# callback Hell

A situation where multiple nested callbacks are used, making it difficult to read and maintain the code. 

## Code Example
doSomething(function(result) {
    doSomethingElse(result, function(newResult) {
        doAnotherThing(newResult, function(finalResult) {
            doFinalThing(finalResult, function() {
                console.log('All done!');
            });
        });
    });
});

## Problems with Callback Hell:
1. Readability: The code becomes difficult to read and understand due to deep nesting.
2. Error Handling: Managing errors and handling exceptions in deeply nested callbacks can be cumbersome.

## Solutions to Callback Hell:
    ## 1. Promises: 
    ## 2. async/await

## 1. Promises 

## Promises in real world:
    In the real world, suppose you have ordered on Amazon, when you initialize and order 
    then Amazon promise to deliver your order. 
    The order However can be: 
    Pending: pending to receive
    Fullfilled: Order has been delivered.
    Rejected: Order has been rejected due to any reason.

## Promises in programming world:
    A Promise is an object that represents the eventual completion (or failure) of task. 
    What does Eventual means? 
    The term "eventual" means that the operation may not complete immediately or right away. Instead, it will complete at some point in the future. 

## States of a Promise (Same like real world senario disucssed above). 
    i) Pending: Initial state, neither fulfilled nor rejected.
    ii) fulfilled/resolved: The operation completed successfully.
    iii) Rejected: The operation failed.

## Methods of a Promise 
    1. .then(): Used to specify what to do when the promise is fulfilled. 
    2. .catch(): Used to specify what to do when the promise is rejected.
    3. .finally(): Used to specify what to do when the promise is either fulfilled or rejected.

## Creating a Promise
In general programing we doesn't create promises we just handle the crated promises from other computers by calling APIs. First we normally send request to API and in return API send us a promise and then through that promise we deal with our data. But we have not yet learnt APIs that's why we are creating our own promise (see example in promises.js).

## Code Example
doSomething()
    .then(result => doSomethingElse(result))
    .then(newResult => doAnotherThing(newResult))
    .then(finalResult => doFinalThing(finalResult))
    .then(() => console.log('All done!'))
    .catch(error => console.error(error));

2. Async/Await: The async/await syntax in modern JavaScript allows you to write asynchronous code in a more synchronous style, further improving readability.
## Code Example
async function executeTasks() {
    try {
        const result = await doSomething();
        const newResult = await doSomethingElse(result);
        const finalResult = await doAnotherThing(newResult);
        await doFinalThing(finalResult);
        console.log('All done!');
    } catch (error) {
        console.error(error);
    }
}

executeTasks();

## Summary:
1. Callback Hell: A situation where deeply nested callbacks make code hard to read and maintain.
2. Solutions: Using Promises and async/await syntax to handle asynchronous operations more elegantly.



3. Async/Await
Async Function always returns a compulsory promise.

await keyword pauses the execution of its sorrounding async function untill the promise is settled. await will always be used within the async function. 