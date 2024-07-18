/* promise start with "new Promise" function, the first word of Promise 
must be in capitalized form i.e (Promise), the fuction created is an arrow function.
Inside the arrow function there are two buit-in handlers one is reject and 
other is resolve, The resolve means "your promise is complete and sucessful" while 
the reject means "your promise will be fulfiled but with an error".   
*/

let promise=new Promise((resolve,reject)=>{
   console.log("I am Promise");
   resolve("success");
})

// Higher Order Function 

// suppose below is an API, if we will call getData(), it will return us new promises as follows
function getData(dataId,getNextdata){
    return new Promise((resolve,reject)=>{      // returning new promise
        setTimeout(() => {                      // API will wait for 2 sec to print the data. 
            console.log("data",dataId);         // data got with relevent dataID and printed 
            resolve("success");                 // call resolve(), data is fetched succesfully.    
            if(getNextdata){
                getNextdata()
            }   
        }, 2000);
    })    
    }

let promise1=getData(123);

// Above is the example to create and use the promise. 

/*The most important section is to use the promises when already received promises from others though APIs. 
lets discuss below:
*/  

/* You will need to only handle the promise through promise methods, when you receive a ready made promise through APIs. 
The methods are 
.then()- is used when promise get success or data received.  
.catch() - is used when promise get failed or data doesn't receive. 
*/

const getPromise=()=>{
return new Promise ((resolve,reject)=>{
    console.log("I am a promise in another website")
    resolve("success")
    })
};

let promise3=getPromise(); // if this get resolved or "success"

promise3.then((res)=>{
    console.log("Promise fulfilled",res)
}
)

// Promise Chaining or Adv to callback hell. 

function asyncFunction1(){
    return new Promise ((resolve,reject)=>{
         setTimeout(()=>{
            console.log("Data1")
            resolve("Success Data 1")
        }, 4000);
    })
};

function asyncFunction2(){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data2")
            resolve("Success Data 2")
        }, 6000);
    })
};
 
// Promise Chaining applied
console.log("Fetching Data1.....") 
asyncFunction1().then((res)=>{
    console.log("Feching Data 2.....")
asyncFunction2().then((res)=>{})
});
// This is better and more readable code than the callback hell code.
