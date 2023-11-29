// lets create a simple addition function which will take two numbers as arguments
// and return the sum of those two numbers.

const add = (a,b) => {
      return a + b;
};

// To use this function as modules in other files we need to export this function 

// let take a variable 

const fullName = "Muhammad Farooq";

// Another function

const subTract = (a,b) => {
    return  a - b;
};

// To export many functions and variables we use the followig syntax to use these 
// as modules in other files.

module.exports = {add, fullName, subTract};