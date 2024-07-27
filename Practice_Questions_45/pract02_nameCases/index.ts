let myName:string="Naveed Khalid";

// convert to lower case
let myName_lower=myName.toLowerCase();
console.log(myName_lower);

// convert to upper case 
let myName_upper=myName.toUpperCase();
console.log(myName_upper);

// converting into title case in following steps; 

// 1) First Name conversion into Title Case
let word_split=myName_lower.slice(1,7);
let capWord="N";
let firstName=capWord.concat(word_split);
console.log(firstName);

// 2) Last Name conversion into Title Case
let word_split2=myName_lower.slice(8,13);
let capWord2="K";
let lastName=capWord2.concat(word_split2);
console.log(lastName);

// 3) Title Case Done
let titleCaseName=firstName.concat("",lastName);
console.log(titleCaseName);