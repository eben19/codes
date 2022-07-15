const fs = require('fs')

const text = 'Hey guys, I am learning nodejs'

// fs.writeFile("./writeone.txt", `${text}` , () =>{
//     console.log("I am done");
// });

// fs.writeFileSync("./writetwo.txt", `${text}` )
//     console.log("I am done too");

// fs.readFile('./writeone.txt', (err, data) => {
//     console.log(err);
//     console.log(data);
//     console.log(data.toString());
//     console.log("Done too");
// })

const path = require("path")

// fs.readFile(path.join('writeone.txt'), "utf-8", (err, data) => {
//     console.log(err);
//     console.log(data);
//     //.log(data.toString());
//     console.log("Done too");
// })

// fs.readFileSync("./writeone.txt");
// console.log("Done")

fs.writeFile("./writeone.txt", `${text}` , () =>{
    console.log("I am done");  
    fs.readFile(path.join('writeone.txt'), "utf-8", (err, data) => {
    console.log(err);
    console.log(data);
    console.log("Done too");
    fs.appendFile('./writetwo.txt', '\nLearning Nodejs is amazing', () => {
        console.log('Append Completed')
        fs.rename('/writetwo.txt', './newWrite.txt', () => {
            console.log('Done remaining');
        })
    })
})
});