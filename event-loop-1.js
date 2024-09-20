const fs = require("fs");

const a = 100;

setImmediate(() => console.log("setImmediate"));

fs.readFile("./file.txt", (err, data) => {
    console.log("file read successfully!", err, data);
});

setTimeout(() => {
    console.log("set timeout");
}, 0);

const printA = () => {
    console.log("a = ", a);
};

printA();
console.log("last line of the code");
