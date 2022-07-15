const { fstat } = require("fs")
const os = require("os")
const path = require("path")
const fs = require("fs")

// console.log(os.homedir())
// console.log(os.type())
// console.log(os.version())
// console.log(os.cpus())

// console.log(path.dirname(__dirname))
// console.log(path.dirname(__filename))
// console.log(path.basename(__dirname))

// fs.readFile("read1.txt", (err, data) => {
//     console.log(data.toString());
// });

// fs.writeFile('write1.txt', "I am going to practice 10 times daily", () => {
//     console.log(`Successfully written`)
// })

// fs.writeFile('write1.js', "I am going to practice 10 times daily", () => {
//     console.log(`Successfully written`)
// })

// console.log(os.arch())
// console.log(os.freemem())

// const calculate = require('./modules');

// const calc = new calculate()

// console.log(calc.add(4, 3, 2))

// console.log(greet())
// console.log(add(2, 4, 6))
// console.log(sub(6, 2))
// console.log(divide(8, 4))
// console.log(mul(2, 4))

const display = require('./modules');

console.log(display("Ebenezer"))



