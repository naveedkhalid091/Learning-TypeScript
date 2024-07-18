/* <---Rest Parameter-----> 
Rest Parameters are defined using three dots along with name of parameter
i.e. "...NameOfParameter". 

Rest parameter allow us to represent an indefinte number of aurguments as an Array.
Rest parameter must be an Array type.
*/


function dynamicName(fname:string, ...lname:string[]){  
    console.log(lname);  // Will print in Array
    return fname+" "+lname.join(" "); // this means, we are joining (Array method) rest parameters with space.
}

let result=dynamicName("Naveed","Khalid")
let result1=dynamicName("Naveed","Khalid","Malik")
let result2=dynamicName("Naveed","Khalid" , "Malik" , "Khokhar")

console.log(result);
console.log(result1);
console.log(result2);

