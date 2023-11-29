// This is main file and we can import or call our own created modules in this file.
// For example I am calling a simple function defined in file "export.js" 

// console.log(add(5,7));

// It will show error because this current file did not has any add() function defined
// So let's see how to solve it by importing the module from another file
// To use the required modules we need to export the module first from its main file.
// After adding the desired module for export we use it.

// this is the way to import one single function as module from other file 

// const add = require("./export");
// console.log(add(5,5));

// To import many functions and variable as modules we use object destructuring 
// Because it returns an object data type 
const expor = require("./export");
console.log(expor);

// Now if you want to access individual function and variable
// We use "Object destructuring"

console.log("seprated input is as follows:");


const {add,fullName, subTract} = require("./export");

console.log(add(6,66));
console.log(fullName);
console.log(subTract(88,7));
