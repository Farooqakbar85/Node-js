//                         Asynchronous File System
// Today we will discuss the "Asynchronous File System" in node JS.
// In asynchronous file system in node JS, it take a "callback function"
// as an argument otherwise it shows error in executing.
// 


// Here is example with "callback function".

// const noramlFunction = (callback) => {
//     //console.log(callback)
//     callback();   
// };
// const callback = () => {
//     console.log("hello world!........")
//     console.log("this is a callback function means a function inside another function")
// }

// noramlFunction(callback);

// Here is example without "callback function".
// const fs = require("fs");
// fs.writeFile("read.txt", "this file is created using the asynchronous file system");

// it does not create any file or perform any tasks because it misses
// a "callback function" as an argument.

// fs.writeFile("read.txt", "this file is created ", (err)=>{
//     console.log("file is created successfully.")
//     console.log(err)
// });

// how to append data in existing file.
// const fs = require("fs");

// fs.appendFile("read.txt", "this is the line added using the 'fs.appendFile()'.", (err)=>{
//     console.log("data is appended successfully.");
//     console.log("The error is " , err);
// });

// fs.readFile("read.txt","utf-8",(err,data)=>{
//     console.log(data);
//     console.log("the error during this process is", err);
// });

// fs.mkdir('Operating system Module', (err)=>{
//     console.log("folder is created successfully");
//     console.log('the error during this process is' , err);
// });

// code to delete a file 

// fs.unlink('osmod.js',(err)=>{
//     console.log('file is deleted successfully.')
//     console.log(err)
// });
