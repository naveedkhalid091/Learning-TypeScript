// Named functions 
function add(x:number, y:number):number{
    return x+y
}

let result=add(1,2);

console.log(result)

//":number" after () is a returned type.

/* <-------------->Annonymous function<------------> 

An annonynous function is a function that is called without a function name.
it is also called functions expression

*/

let zz=function(fname:string,Lname:string):string{
    let full_name=fname+" "+Lname;
    return full_name 
}

let result1=zz("Naveed","Khalid");

console.log(result1);

/* <--------->Lambda function or Arrow function<---------->

This is a concise way to use funtions, arrow functions can only be called
when you have only one line return, if you have more than one line return statements
then you can use curly braces with arrow function.

*/

let yy=(a:number,b:number)=> a+b;

let result3=yy(3,4);

console.log(result3);

// Another example with more than one return lines 

let xx=(a:number,b:number)=>{
    let c=a+b;
    return c;
    console.log(c);

} ;


let result4=xx(4,6);

console.log(result4);

/* <-----Making types in fucntions -----> */

type myType=number|string;

function myfunction(Param:myType){
// function implementation
}

// another method
type GreetFunction=(a:number,b:number)=>void

function greeter(fn:GreetFunction){
    //function implementation 
}

