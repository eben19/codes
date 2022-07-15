// PROMISES - it manages call-back, to avoid call-back error

const fsPromises = require('fs').promises
// const path = require('path')

const docs = `Testing Promises`

const operation = async () => {
    try{
        await fsPromises.writeFile('./textPromises.txt', `${docs}`)
        await fsPromises.appendFile('./textPromises.txt', '\n And it is so cool')
        const read = await fsPromises.readFile('./textPromises.txt', 'utf-8')
        console.log(read)
    } catch(error){
        console.log(error.message)
    } 
};

operation();

