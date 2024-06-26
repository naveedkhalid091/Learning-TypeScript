var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
; //starts with 0 index
let c = Color.Green; // Output: 1
console.log(c);
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Green"] = 2] = "Green";
    Color1[Color1["Blue"] = 3] = "Blue";
})(Color1 || (Color1 = {}));
; // customize the starting value with 1.
let colorName = Color1[2];
console.log(colorName); // Green
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 4] = "Blue";
})(Color2 || (Color2 = {}));
; //can assign values to all
let colorIndex = Color2["Blue"];
console.log(colorIndex); // OutPut:4
; // not Allowed with const
let colorName1 = Color[2];
console.log(colorName1); //OutPut: "Blue" starting from 0.
; //can assign values to all
var colorIndex2 = Color2["Blue"];
console.log(colorIndex2);
export {};
