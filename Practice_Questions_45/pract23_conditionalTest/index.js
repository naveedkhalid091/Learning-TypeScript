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
//Test-1  - True result
if (car.name === "Civic") {
    console.log(`The car name is civic then prediction is`, true);
}
else {
    console.log(`The car name is not civic hence prediction is`, false);
}
//Test-2 - True result
if (car.model >= 2024) {
    console.log(`The car's model is 2024, prediction is`, true);
}
else {
    console.log(`The car's model is not 2024, prediction is`, false);
}
//Test-3 - True result
if (car.manufactured === "Honda") {
    console.log(`The car is made by Honda, prediction is`, true);
}
else {
    console.log(`The car is not made by Honda, prediction is`, false);
}
//Test-4 -True result
if (car.price >= 5000) {
    console.log(`The car is equal or more than 5000, prediction is`, true);
}
else {
    console.log(`The car is less then 5000, prediction is`, false);
}
//Test-5 - True result
if (car.condition === "new") {
    console.log(`The car condition is new so prediction is`, true);
}
else {
    console.log(`The car condition is old then prediction is`, false);
}
//Test-6  - false result
if (car2.name === "Civic") {
    console.log(`The car name is Civic then prediction is`, true);
}
else {
    console.log(`The car name is not civic hence prediction is`, false);
}
//Test-7 - false result
if (car2.model >= 2024) {
    console.log(`The car's model is 2024, prediction is`, true);
}
else {
    console.log(`The car's model is not 2024, prediction is`, false);
}
//Test-8 - false result
if (car2.manufactured === "Honda") {
    console.log(`The car is made by Honda, prediction is`, true);
}
else {
    console.log(`The car is not made by Honda, prediction is`, false);
}
//Test-9 -false result
if (car2.price >= 5000) {
    console.log(`The car is equal or more than 5000, prediction is`, true);
}
else {
    console.log(`The car is less then 5000, prediction is`, false);
}
//Test-10 - false result
if (car2.condition === "new") {
    console.log(`The car condition is new so prediction is`, true);
}
else {
    console.log(`The car condition is old then prediction is`, false);
}
export {};
