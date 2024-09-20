const fs = require("node:fs");

setImmediate(() => console.log("setImmediate"));

setTimeout(() => console.log("setTimeout"), 0);

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt", () => {
    setTimeout(() => {
        console.log("2nd timer");
    }, 0);

    process.nextTick(() => console.log("2nd nexttick"));

    setImmediate(() => console.log("2nd setimmediate"));

    console.log("file reading cb");
});

process.nextTick(() => console.log("nexttick"));

setTimeout(() => {
    console.log("settimeout 100ms");
}, 100);

console.log("last line of the file");

// last line of the file
// nexttick
// Promise
// setTimeout
// setImmediate
// file reading cb
// 2nd nexttick
// 2nd setimmediate
// 2nd timer
