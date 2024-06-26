/* explicit casting is a way to manually convert a value
from one type (unknown & any) to another

For Example
*/
let myName = "NaveedKhalid";
/* Now by using "myName.uppercase()", try to call
 the methods of string it will not show string methods
 */
/*You can convert into another type using "as" keyword.
*/
let myName2 = myName; // data type conversion
console.log(myName2.toLowerCase());
let a = "2";
let b = a; // data type conversion
console.log(a);
console.log(b);
let z = "Hello world!";
let y = z; // conversion done
y.toUpperCase();
console.log(y.toUpperCase());
export {};
