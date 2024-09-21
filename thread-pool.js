const fs = require("fs");
const crypto = require("crypto");

process.env.UV_THREADPOOL_SIZE = 5;

crypto.pbkdf2("password", "salt", 5000000, 8, "sha512", (err, key) => {
    console.log(`1 - ${key}`);
});

crypto.pbkdf2("password", "salt", 5000000, 8, "sha512", (err, key) => {
    console.log(`2 - ${key}`);
});

crypto.pbkdf2("password", "salt", 5000000, 8, "sha512", (err, key) => {
    console.log(`3 - ${key}`);
});

crypto.pbkdf2("password", "salt", 5000000, 8, "sha512", (err, key) => {
    console.log(`4 - ${key}`);
});

crypto.pbkdf2("password", "salt", 5000000, 8, "sha512", (err, key) => {
    console.log(`5 - ${key}`);
});
