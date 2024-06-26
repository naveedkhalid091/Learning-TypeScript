enum Color {Red, Green, Blue};//starts with 0 index
let c: Color = Color.Green; // Output: 1
console.log(c);

enum Color1 {Red = 1, Green, Blue};  // customize the starting value with 1.
let colorName: string = Color1[2];
console.log(colorName); // Green

enum Color2 {Red = 1, Green = 2, Blue = 4};//can assign values to all
let colorIndex = Color2["Blue"];
console.log(colorIndex); // OutPut:4


// Using Const with anum.

const enum Color3 {Red = 1, Green, Blue}; // not Allowed with const
let colorName1: string = Color[2];  
console.log(colorName1); //OutPut: "Blue" starting from 0.

const enum Color4 {Red = 1, Green = 2, Blue = 4}; //can assign values to all
var colorIndex2 = Color2["Blue"];
console.log(colorIndex2); 