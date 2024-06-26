"use strict";
// declaring types with interface keyword
;
// initializing Object with explicit types mentioned above
// Fresh members 
let ObjectA = {
    name: "Naveed Khalid",
    age: 25,
};
// fresh members
let ObjectB = {
    name: "Zahra Naveed",
    age: 23,
};
// fresh members
let ObjectC = {
    name: "Eshaal Naveed",
    age: 3,
    email: "naveed@exmaple.com"
};
// stale concept
ObjectA = ObjectB; // stale members- will accept each other because of the same strucuture.  
ObjectB = ObjectA; // stale members- will accept each other because of the same strucuture.
ObjectA = ObjectC; // stale members- ObjectA will add email property into it and 
// will accept equalance type with Object C.
ObjectB = ObjectC; // stale members- ObjectB will add email property into it and 
// will accept equalance type with Object C.
// ObjectC=ObjectA;   //Error: ObjectC have to deduct email property to become an equalent with ObjectA.
// deduction can't be done through this way, hence Error will produce. 
// ObjectC=ObjectB;   //Error: ObjectC have to deduct email property to become an equalent with ObjectA.
// deduction can't be done through this way, hence Error will produce.
console.log(ObjectA);
console.log(ObjectB);
console.log(ObjectC);
