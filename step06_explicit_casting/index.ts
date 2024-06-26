/* explicit casting is a way to manually convert a value 
from one type (unknown & any) to another
Explicit casting in TypeScript is most commonly used 
with the "any" and "unknown" types because these types 
allow for any kind of value, and TypeScript's type system 
cannot guarantee the safety of operations performed 
on these values. 
For Example
*/

/*<-----------as keyword----------------->*/

// You can Convert data types using "as" keyword.

let myName:unknown="NaveedKhalid";

/* you can't use string methods here bcz it is unkown type, 
so first convert it to "string" type to use its methods
 */

let myName2=myName as string;  // data type conversion

console.log(myName2.toLowerCase());

let a:unknown="2";

let b=a as number; // data type conversion
console.log(a);   
console.log(b);


let z:any="Hello world!";

let y=z as string;  // conversion done

console.log(y.toUpperCase()); // now you can use string methods.


// conversion using functions 

interface User {
    name: string;
    age: number;
  }
  
let response: any = {
    name: "John Doe",
    age: 30
  };
  
let user = response as User; // conversion done from any to User.

console.log(user.name);

