const fs = require("fs");

setImmediate(() => {
    setImmediate(() => {
        console.log("setimmediate 2");
    });
    console.log("setimmediate");
});

setTimeout(() => {
    console.log("timer expired");
    setTimeout(() => {
        console.log("timer 2 expired");
    }, 0);
}, 0);

Promise.resolve("promise").then(console.log);

fs.readFile("./file.txt", () => {
    console.log("file reading cb");
});

process.nextTick(() => {
    process.nextTick(() => console.log("inner nexttick"));
    console.log("next tick");
});

setTimeout(() => {
    console.log("timer 3 expired");
}, 0);

console.log("last line of the file");
