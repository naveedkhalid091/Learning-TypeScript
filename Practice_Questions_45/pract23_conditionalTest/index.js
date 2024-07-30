/*  Conditional Tests: Write a series of conditional tests.
Print a statement describing each test and your prediction for the
results of each test. Your code should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
• Look closely at your results, and make sure you understand
why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and a
nother 5 tests evaluate to False.
*/
let car = {
    name: "Civic",
    model: 2024,
    manufactured: "Honda",
    price: 5000,
    condition: "new"
};
let car2 = {
    name: "Cultus",
    model: 2023,
    manufactured: "Suzuki",
    price: 3000,
    condition: "old"
};
//test-1  - True result
if (car.name === "Civic") {
    console.log(`The car name is civic then prediction is`, true);
}
else {
    console.log(`The car name is not civic hence prediction is`, false);
}
//test-2 - True result
if (car.model >= 2024) {
    console.log(`The car's model is 2024, prediction is`, true);
}
else {
    console.log(`The car's model is not 2024, prediction is`, false);
}
//test-3 - True result
if (car.manufactured === "Honda") {
    console.log(`The car is made by Honda, prediction is`, true);
}
else {
    console.log(`The car is not made by Honda, prediction is`, false);
}
//test-4 -True result
if (car.price >= 5000) {
    console.log(`The car is equal or more than 5000, prediction is`, true);
}
else {
    console.log(`The car is less then 5000, prediction is`, false);
}
//test-5 - True result
if (car.condition === "new") {
    console.log(`The car condition is new so prediction is`, true);
}
else {
    console.log(`The car condition is old then prediction is`, false);
}
//test-6  - false result
if (car2.name === "Civic") {
    console.log(`The car name is Civic then prediction is`, true);
}
else {
    console.log(`The car name is not civic hence prediction is`, false);
}
//test-7 - false result
if (car2.model >= 2024) {
    console.log(`The car's model is 2024, prediction is`, true);
}
else {
    console.log(`The car's model is not 2024, prediction is`, false);
}
//test-8 - false result
if (car2.manufactured === "Honda") {
    console.log(`The car is made by Honda, prediction is`, true);
}
else {
    console.log(`The car is not made by Honda, prediction is`, false);
}
//test-9 -false result
if (car2.price >= 5000) {
    console.log(`The car is equal or more than 5000, prediction is`, true);
}
else {
    console.log(`The car is less then 5000, prediction is`, false);
}
//test-10 - false result
if (car2.condition === "new") {
    console.log(`The car condition is new so prediction is`, true);
}
else {
    console.log(`The car condition is old then prediction is`, false);
}
export {};
