
// Type Alias Objects

type stuTypes={
name: string
age: number
class:number|string,
section:string
}

let student:stuTypes={
    name:"Naveed",
    age:25,
    class:"MBA",
    section:"A"
}

console.log(student.name);
console.log(student.class);

// using optional property in Type Alias Objects

type stuTypes1={
    name: string
    age?: number  // Optional marked due to ?
     class:number|string,
    section:string
    }
    
    let student1:stuTypes1={
        name:"Zahra",
        // age is missing but will not produce error bcz age is optional. 
        class:"BBA",
        section:"A"
    }
    
    console.log(student.name);
    console.log(student.class);


 /* Interface Alias  - 
    
    This is same like type alias but this is only worked in objects. 
    while the tpye alias used in all othertypes including objects 
    
*/

 interface stuTypes2 {
    name: string
    age: number
    class:number|string,
    section:string
    }
    
    let student2:stuTypes2={
        name:"Ibrahim",
        age:2,
        class:"KG",
        section:"Indigo"
    }
    
    console.log(student.name);
    console.log(student.class);





    