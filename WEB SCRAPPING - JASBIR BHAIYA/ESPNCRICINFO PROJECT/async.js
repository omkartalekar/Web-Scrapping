const fs=require("fs");
console.log("before");

// let data=fs.readFileSync("f1.txt",cb);

let data=fs.readFile("f1.txt",cb);
function cb(err,data){
    if(err){
        console.error("error")
    }
    else{
        console.log("data: "+data);
    }
    
}

console.log("After");

