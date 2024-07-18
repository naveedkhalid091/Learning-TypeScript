// Example 1- updating variables/properties
class Car {
    model;
    year;
    price;
    constructor(model, year, price) {
        this.model = model;
        this.year = year;
        this.price = price;
    }
    drive() {
        console.log("The Car has started");
    }
    stopped() {
        console.log("The Car has stopped");
    }
}
const tesla = new Car("Model X", 2024, "$114,000");
console.log(tesla);
// updating values 
tesla.year = 2022; // this is not a class method, this is object method. 
// tesla.price="1150000", Error: you can't update private method. 
console.log(tesla);
// Example - 2
// Inheritance (subclass extends SuperClass)
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log("What's for Dinner");
    }
    speak() {
        console.log(`My name is ${this.name} and I am ${this.age} years old`);
    }
}
const person = new Person("Naveed", 30);
console.log(person);
console.log(person.speak());
// Inheretance applied using extend keyword
class Chef extends Person {
    occupation;
    constructor(name, age, occupation) {
        super(name, age); // super call always call the parent's constructor, which has two properties to mention. 
        // Super will always be on the first line after constructor 
        this.occupation = occupation;
    }
    speak() {
        console.log(`I am a ${this.occupation}`);
    }
    cook() {
        console.log(`I am Cooking`);
    }
}
const chef = new Chef("Naveed", 30, "Chef");
console.log(chef.cook());
console.log(chef.eat());
console.log(chef.speak()); // As speak is available on both parent and child, so child content will be print here. 
export {};
