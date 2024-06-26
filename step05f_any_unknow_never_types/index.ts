let x:any;  // this is not a preffered method to use in 
            //typeScript bcz the features of typescript 
            // went lost  (using types in typescript)

x="Naveed";  // Any type Accepting string
x=123; // Any type Accepting number
x=true; // Any type Accepting boolean
x=Math.random; // Any type Accepting Math Random
x={}; // // Any type Accepting Objects
x=[]; // Any type Accepting Arrays
x=undefined; // Any type Accepting undefined
x=null;    // Any type Accepting null 
x=()=>{ }; // Any type Accepting function

let y:unknown;

y="Naveed";  // unknown type Accepting string
y=123; // unknown type Accepting number
y=true; // unknown type Accepting boolean
y=Math.random; // unknown type Accepting Math Random
y={}; // // unknown type Accepting Objects
y=[]; // unknown type Accepting Arrays
y=undefined; // unknown type Accepting undefined
y=null;    // unknown type Accepting null 
y=()=>{ }; // unknown type Accepting function


// Assigning "unknown" to any other types 

let value:unknown;

/* use cased of unkown type. 
It is used when you don't know the data type, it can be string, number
etc, then we use unkown data type.
*/

const value1:unknown=value; // accepting
const value2:any=value;     // accepting
// const value3:string=value;  // Throw Error bcz unkown can't be assigned to string
// const value4:number=value;  // Throw Error
// const value5:boolean=value; // Throw Error


/* Never type
The never type in TypeScript represents values that 
never occur, It is used to indicate that a function 
never returns. (e.g., it always throws an error or 
it has an infinite loop), or that a variable should 
never hold a value
*/

function throwError(message: string): never {
    // console.log("Hello"), will Throw Error, bcz it has reachable value.
    // throw new Error (message);  // It has no reachable value.
  throw new Error (message);
};


// Inferred return type is never

// Function returning "never" must not have a reachable end point.

function infiniteLoop():never {
    while (true){}
}
