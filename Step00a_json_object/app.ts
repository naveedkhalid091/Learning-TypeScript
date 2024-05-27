    // JSON string 

const jsonString = 
`{
    "name": "John", 
    "age": 30, 
    "isStudent": false, 
    "skills": ["JavaScript", "Python", "Java"]
}`;

    // JSON Object (Parsed from the JSON String)

const jsonObject=JSON.parse(jsonString)  // We can't use JSON data without Parsing it.
console.log(jsonObject.name)    // Using JSON data through dot notation.
console.log(jsonObject["name"])    // Using JSON data through Array Method.

 // JSON Object (Defined Directly)

const jsonObject1 = 
{
    "name": "Naveed", 
    "age": 30, 
    "isStudent": true, 
    "skills": ["TypeScript", "Python", "HTML", "CSS"]
};

console.log(jsonObject1.name);  // Using JSON data using dot notation
console.log(jsonObject1["name"]); // Using JSON data using Array method. 

 // JavaScript Object (Defined Directly)

 const jsObject2 = 
{
    name: "Zahra", 
    age: 30, 
    isStudent: true, 
    skills: ["TypeScript", "Python", "HTML", "CSS"]
};

console.log(jsObject2.name);



