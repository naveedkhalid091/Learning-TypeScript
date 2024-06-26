import {a as ab ,b as bc,c as cb,d as dc} from "./first.js";
import {a,b,c,d} from "./first.js";
import z from "./second.js";  // you can give any name instead of z, example is below.
import y from "./second.js";   

console.log(bc+cb+dc);  // "as" keyword is used to rename/change module's variable"
console.log(b+c+d);     // Import variables without changing the names. 

console.log(z);   // Import module from second.js 
console.log(y);  // Import module without knowing the exact name of variable in second.ts, here you don't need to know the variable name because you can only write one export default.


const aa=5;
const bb=6; 

console.log(b+c+d+y+aa+bb) ; // combining export module, export default module and local variables  

