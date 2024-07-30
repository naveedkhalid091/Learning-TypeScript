/**  More Conditional Tests: 
You don’t have to limit the number of tests you create to 10. 
If you want to try more comparisons, write more tests. 
Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array

*/


let car="Cultus";


// Eqaulity test with true result
if(car=="Cultus"){
    console.log("Car=Cultus:", true)
};

// Ineqaulity test with false result
if(car!=="Cultus"){
    console.log("Car is equal to cultus:", true)
}else{
    console.log("Car is not equal to cultus:", false)

}

// Lower case test with true result


let alpha:string="naveed";

if(alpha==alpha.toLowerCase()){
    console.log(`Is ${alpha} in lowerCase?`, true)
}

// Lower case test with false result

let alpha2:string="Naveed";

if(alpha2==alpha2.toLowerCase()){
    console.log(`Is ${alpha} in lowerCase?`, true)
}else{
    console.log(`Is ${alpha} in lowerCase?`, false)
}

// Numerical Tests - Eqaulity
let num:number=23;

if(num===23){
    console.log("Is the given number in equal state?", true)
}else{
    console.log("Is the given number in equal state?", false)
}


// Numerical Tests - Ineqaulity

if(num!==23){
    console.log("Is the given number in equal state?", true)
}else{
    console.log("Is the given number in equal state?", false)
}

// Numerical Tests - `using Less then operator` with true result

if(num<=23){
    console.log("Is the given number less than or equal to 23?", true)
}else{
    console.log("Is the given number less than or equal to 23?", false)
}


// Numerical Tests - `using Less then operator` with false result

let num1=24

if(num1<=23){
    console.log("Is the given number less than or equal to 23?", true)
}else{
    console.log("Is the given number less than or equal to 23?", false)
}

// Numerical Tests - `using greater then operator` with true result

if(num1>=23){
    console.log("Is the given number Greater than or equal to 24?", true)
}else{
    console.log("Is the given number Greater than or equal to 24?", false)
}

// Numerical Tests - `using greater then operator` with false result

if(num1>=25){
    console.log("Is the given number greater than or equal to 24?", true)
}else{
    console.log("Is the given number greater than or equal to 24?", false)
}

let num2:number=3;
let num3:number=5;


// Using AND Operator

if(num2 && num3 <= 5){
    console.log("Both condistions are satisfied", true)
}else{
    console.log("Both conditions are not ture", false)
}

// Using OR Operator

if(num2 > 6 || num3 >6){
    console.log("Either one or two conditions are satisfied",true)
}else{
    console.log("None of the mentioned condition is satisfied",false)
}


// Array Test - True block execution


let names=["Naveed","Khalid"];


if(Array.isArray(names)){
    console.log("names is the array", true)
}else{
    console.log("names is not an Array", false)
}

// Array Test - false block execution


let name="Naveed";


if(Array.isArray(name)){
    console.log("names is the array", true)
}else{
    console.log("names is not an Array", false)
}
