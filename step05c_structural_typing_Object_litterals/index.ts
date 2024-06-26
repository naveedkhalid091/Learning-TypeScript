
// declaring types with interface keyword

interface typeA {
    name:string,
    age:number
};

interface typeB {
    name: string,
    age:number,
}

interface typeC {
    name:string,
    age:number,
    email:string
}


// initializing Object with explicit types mentioned above
 
// Fresh members 
let ObjectA:typeA={
    name:"Naveed Khalid",
    age:25,
}

// fresh members
let ObjectB:typeB={
    name:"Zahra Naveed",
    age:23,
}

// fresh members
let ObjectC:typeC={
    name:"Eshaal Naveed",
    age:3,
    email:"naveed@exmaple.com"
}

// stale concept

ObjectA=ObjectB;    // stale members- will accept each other because of the same strucuture.  
ObjectB=ObjectA;    // stale members- will accept each other because of the same strucuture.

ObjectA=ObjectC;    // stale members- ObjectA will add email property into it and 
                    // will accept equalance type with Object C.

ObjectB=ObjectC;    // stale members- ObjectB will add email property into it and 
                    // will accept equalance type with Object C.

// ObjectC=ObjectA;   //Error: ObjectC have to deduct email property to become an equalent with ObjectA.
                      // deduction can't be done through this way, hence Error will produce. 

// ObjectC=ObjectB;   //Error: ObjectC have to deduct email property to become an equalent with ObjectA.
                      // deduction can't be done through this way, hence Error will produce.

console.log(ObjectA);
console.log(ObjectB);
console.log(ObjectC);
