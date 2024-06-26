"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const first_1 = require("./first");
const first_2 = require("./first");
const second_1 = __importDefault(require("./second")); // you can give any name instead of z, example is below.
const second_2 = __importDefault(require("./second"));
console.log(first_1.b + first_1.c + first_1.d); // "as" keyword is used to rename/change module's variable"
console.log(first_2.b + first_2.c + first_2.d); // Import variables without changing the names. 
console.log(second_1.default); // Import module from second.js 
console.log(second_2.default); // Import module without knowing the exact name of variable in second.ts, here you don't need to know the variable name because you can only write one export default.
const aa = 5;
const bb = 6;
console.log(first_2.b + first_2.c + first_2.d + second_2.default + aa + bb); // combining export module, export default module and local variables  
