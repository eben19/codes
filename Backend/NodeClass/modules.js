// const greet = () => console.log(`Hello World`)

 //module.exports = greet;

// exports.add = (x, y, z) => x + y + z
// exports.sub = (x, y) => x - y
// exports.divide = (x, y) => x / y
// exports.mul = (x, y) => x * y

// // module.exports = {greet, add, sub, divide, mul}

// class calculate {
//     add  (x, y, z) { return x + y + z};
//     sub  (x, y) { return x - y};
//     divide  (x, y) {return x / y};
//     mul  (x, y) {return x * y};
//


const display = (name) => {
    let time = new Date().toLocaleTimeString()
    return `Hello ${name}, you are welcome, the time is ${time}`;
};


 module.exports = display;