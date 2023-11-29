const os = require('os');
console.log(os.arch());

const freeMemory = os.freemem();
console.log(freeMemory);
// it provide output in bytes
console.log(`${freeMemory /1024 / 1024/ 1024}`)

const totalMemory = os.totalmem();
console.log(totalMemory);
console.log(`${totalMemory /1024 /1024 /1024}`)

console.log(os.hostname());
console.log(os.type());
console.log(os.platform());
