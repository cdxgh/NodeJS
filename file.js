const fs = require("fs");
// fs.writeFile("./test.txt", "Hello World Async", (err) => {});
// const result = fs.readFileSync("./c.txt", "utf-8");
// console.log(result);
fs.readFile("./c.txt","utf-8",(err,result)=>{
    if(err){
        console.log("Error",err);
    }
    else{
        console.log(result);
    } 
});
fs.appendFileSync("./test.txt", `Hey there\n`);