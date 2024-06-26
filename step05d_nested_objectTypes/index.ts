interface Author {
    firstName:string
    lastName:string
};

interface Book {
    name:string
    author:Author   // Declaration of Nested ObjectType
};


let myBook:Book = {
    name:"My Best Book",
    author:{                 // initialization of Author Nested type   
        firstName:"Naveed",
        lastName:"Khalid",
    }

}

