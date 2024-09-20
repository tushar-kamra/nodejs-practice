const fs = require("fs");

const a = 100;

setImmediate(() => console.log("setImmediate"));

fs.readFile("./file.txt", (err, data) => {
    console.log("file read successfully!", err, data);
});

setTimeout(() => {
    console.log("set timeout");
}, 100);

setTimeout(() => {
    console.log("set timeout 1");
}, 0);

setTimeout(() => {
    console.log("set timeout 2");
}, 0);

const printA = () => {
    console.log("a = ", a);
};

printA();
console.log("last line of the code");


// a =  100
// last line of the code
// set timeout 1
// set timeout 2
// setImmediate
// file read successfully! null <Buffer 66 69 6c 65 20 63 6f 6e 74 65 6e 74>
// set timeout