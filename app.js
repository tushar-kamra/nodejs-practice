// console.log(this);  // return an empty object in nodejs

// console.log(globalThis);

const { calculateMultiply, calculateSum } = require("./calculate");

// calculateMultiply(3, 4);
// calculateSum(3, 4);

// console.log(require("./data.json"));

require("./test");
// require("./test2");

console.log(__filename, __dirname);

// console.log(globalThis);
