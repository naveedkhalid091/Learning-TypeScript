// use const for constant values. 
// You can't assign values through const by using assignmment operators
// However, you can change values through const by using the method, e.g in arrays you can use push method to add values. 
var a = "Hello World";
// a="Hello naveed"   , this will give error
var arr = [1, 2, 3];
// const arr=[4,5,6] using assignment operators it will give error. 
arr.push(34);
console.log(arr);
// let vs var
// It is better to use let variable instead of var 
// Becasue let has a block scoped 
if (true) {
    var z = 4;
    //use z inside the block
}
else {
    var z = "string";
    //use z inside block
}
// console.log(z) you can't use z outside the block.  
