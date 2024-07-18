/* 
    Explaination mentioned in .md file 
*/

// simple functions
function sum(a,b){
    console.log(a+b);
}

function sub(a,b){
    console.log(a-b)
}

// higher order function
function calculator(a,b,Callback){
    Callback(a,b); // this invoking callback as a function- this method made it possible to write inside the function see below.     
}

calculator(2,3,sum);  // CallBack executed in arguments- only sum will be called without () e.g sum().  
calculator(2,3,sub);  // CallBack executed in arguments- only sum will be called without () e.g sum().


// Higher Order Function 
function getData(dataId,getNextdata){
setTimeout(() => {
    console.log("data",dataId);
    if(getNextdata){
        getNextdata()
    }   
}, 2000);
}
// Callback Hell - Nested Get Data, each Data will receive 2 mins later, bcz of settimeout. 
 
getData(1, ()=>{
    getData(2, ()=>{
        getData(3, ()=>{
        })
    })
 }
)
// This Nested code in real life projects becomes complex and hard to understand. 
// Other programers in the same company might not understand your build code. 
// to solve this problem, JavaScript has introduced a concept of "Promises"

