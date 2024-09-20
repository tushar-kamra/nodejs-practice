const fs = require("node:fs");

const a = 100;

setImmediate(() => console.log("setImmediate"));

Promise.resolve(() => {
    console.log("Promise");
});

fs.readFile("./file.txt", () => {
    console.log("file reading");
});

fs.readFile("./file.txt", () => {
    console.log("file reading");
});

fs.readFile("./file.txt", () => {
    console.log("file reading");
});

fs.readFile("./file.txt", () => {
    console.log("file reading");
});

setTimeout(() => {
    console.log("set timeout");
}, 10);

process.nextTick(() => console.log("process.nextTick"));

const printA = () => {
    console.log("a = ", a);
};

printA();
console.log("last line of the file");

// output
// a =  100
// last line of the file
// process.nextTick
// setImmediate
// file reading
// file reading
// file reading
// file reading
// set timeout