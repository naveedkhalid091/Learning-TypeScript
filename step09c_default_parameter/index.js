"use strict";
/* <---Default ParaMeter-->
When us set the default value then if you don't call the default parameter then
that default parameter is automatically called upon, but if you mention the default
parameter with different value then new value overwrite with the default one.
*/
Object.defineProperty(exports, "__esModule", { value: true });
function myName(fname, lname = "Khalid") {
    let fullName = fname + " " + lname;
    return fullName;
}
let x = myName("Naveed"); // default value will print "Naveed Khalid"
let y = myName("Naveed", "Malik");
console.log(x);
console.log(y);
