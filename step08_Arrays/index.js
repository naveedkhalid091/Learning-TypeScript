//Adding Members in Array in different methods
//Method 1
let array1 = [1, 2, 3];
console.log(array1[1]);
//Method 2
let array2 = [1, 2, 3]; // Alternate method.
//Method 3
let array3 = [];
array3.push(1234); //dynamically adding
console.log(array3);
// Map method
/* This method works like a loop in typeScript but the Loop method doesn't work in
react.js and that's why have to learn this map method. and tihs map method is specifically
for the arrays.
*/
let cars = [
    {
        name: "Cultus",
        model: "2024",
        price: "$2000",
    },
    {
        name: "GLI",
        model: "2024",
        price: "$3000",
    },
    {
        name: "BMW",
        model: "2024",
        price: "$10000",
    },
];
// 1.implicit type method
let carPrice = cars.map((car) => {
    return car.price;
});
/*where `car` is the the new array name in the loop and
new array has implicit array type same is `cars`.
We have given the command to print prices of new array called `car`
*/
/*
We can also explicitly type the data types of object as below
but both methods are same.
*/
// 2. Explicit type method
let carName = cars.map((car) => {
    return car.name;
    car.price;
});
console.log(`My car:${carName}`);
export {};
