const fs = require("fs")
const path = require("path")
const text = "Hello World"

fs.writeFile("./myStack.txt", `${text}` , () =>{
    console.log("Done");
    
    fs.readFile(path.join("./myStack.txt"), "utf-8", (err, data) => {
        console.log(err);
        console.log(data);
        console.log("It has been read");
    })

    fs.rename('./myStack.txt', './devStack.txt', () => {
        console.log('Done too');
    })
    })