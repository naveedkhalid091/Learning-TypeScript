/* <---Default Parameter-->
call with = equals sign and put value in required parameter.

The default parameter is automatically called upon even if you don't call it, 
but if you mention the default parameter with different value 
then the new value overwrite with the default one. 
*/

function myName(fname:string,lname:string="Khalid"){
    let fullName=fname+" "+lname;
    return fullName;
}

let x=myName("Naveed");  // default value will print "Naveed Khalid"
let y=myName("Naveed","Malik");  // Output:Naveed Malik

console.log(x);
console.log(y);

