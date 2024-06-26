let myName:string|null;

myName="Naveed Khalid"   // narrowing done 

/* "narrowing" means making a variable's type more specific as the code runs*/ 

// After narrowing we to would be able to use the methods of strings or null. e.g

console.log(typeof(myName));

console.log(myName.toLowerCase());  // method/property of string

console.log(myName.toUpperCase()); // method/property of string

myName=null;

console.log(myName);


//  myName=10, Error: Numbers can't be assigned
//  myName=undefined Error: Undefined can't be assigned.

let myAge:string|number;

myAge=10.3333333333;  // Narrowing  

console.log(typeof(myAge));  // type of varibale.

console.log(myAge.toFixed());   // Method of number type. 


let myAge2:number|string;

myAge2=13;

console.log(typeof(myAge2)); 

    /* Ternary operators- 

    These are used to perform the conditional expressions in the concise way.
    These are similar to the if-else conditions but normally these are used for simple and short conditions. 
    for the complex and Nested if-esle conditions it is adviseable to use the if-else statemtents. 

    syntax is `condition ? expressionIfconditionIsTrue : expressionIfConditionIsFalse` 

    */


let newAge= Math.random()>0.6 ? "khan" : 60;

// newAge.toUpperCase() Error: toUpperCase  method is not available in both the string and number. 


// narrowing of ternary operators.

if (newAge==="khan"){
    // Type of newAge=String 
    console.log(newAge.toUpperCase)   // can be called now bcz of narrowing
}else{
    console.log(newAge)
}

// using if-esle
if(typeof newAge==="string"){
    console.log(newAge.toUpperCase)   // narrowing - string method can be used

} else{
    console.log(newAge.toFixed)       // narrowing - number method can be used
}

// using ternary operator

typeof newAge==="string"              // condition
? console.log(newAge.toUpperCase)     // String
: console.log(newAge.toFixed)         // number



// Specific Strings using unions and litterals


let age:number|"died"|"unknown"

age=10;
age="died";
age="unknown"
// age="hello"   // Error: bcz you can't assign other than specified.


/*
   Type Alias 
   A type alias is a way to create a new name for an existing type. 
   Type aliases can be used for any kind of type, 
   including primitive types, object types, union types, and more.

   Basic Syntax

   type AliasName = ExistingType;

   When to use

   Use type aliases when you have complex types that 
   you want to reuse and when you want to make your code more readable
*/ 

type RawData = string|number|null|undefined

let data:RawData;

data=10;

// you can even combine new types

type Id=string|number;

type Id2=null|boolean;


let a:Id|Id2=10;
a=true;
a="Naveed Khalid"

// a=undefined; Error: You can't write undefined bcz this type is not available in Id and Id2. 

