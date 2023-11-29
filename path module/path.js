const path = require('path');
// This provide us directory name
// console.log(path.dirname('/home/vboxuser/Documents/node js/async filesystem/Operating system Module/path module/path.js'));
// This provide us information about file extension
// console.log(path.extname('/home/vboxuser/Documents/node js/async filesystem/Operating system Module/path module/path.js'))
// This provide us the basename of file
// console.log(path.basename('/home/vboxuser/Documents/node js/async filesystem/Operating system Module/path module/path.js'))
// This command of "path.parse()" provide all above information  
// it returns information in form of object and we can desired information only using "." or  
const myPath = path.parse('/home/vboxuser/Documents/node js/async filesystem/Operating system Module/path module/path.js')
console.log(myPath.name);
// console.log(myPath.dir);
// console.log(myPath.base);

