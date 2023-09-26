const fs = require("fs");
fs.writeFile("./test.txt", "Hello World Async", (err) => {});
const result = fs.readFileSync("./c.txt", "utf-8");
console.log(result);
