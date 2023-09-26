const fs = require("fs");
console.log("1");
// fs.writeFile("./test.txt", "Hello World Async", (err) => {});
// const result = fs.readFileSync("./c.txt", "utf-8");
// console.log(result);
// console.log("2");
//Non Blocking Request
fs.readFile("./c.txt","utf-8",(err,result)=>{
    if(err){
        console.log("Error",err);
    }
    else{
        console.log(result);
    } 
});
console.log("2");
// fs.appendFileSync("./test.txt", `Hey there\n`);