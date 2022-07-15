const http = require("http")
const fs = require("fs")
const self = require('./self.html')
const students = require('./students.json')
// const design = require('./design.html')

const newStudents = JSON.stringify(students)

fs.readFile(path.join('self.html'), function (err, data){
    
    res.write(err)
    res.write(data)
})
// fs.readFile('./design.html'), function (err, data){
//     res.writeHead(200, {"Content-type": "text/html"})
// }


const newServer = http.createServer((req, res) => {
    const pathName = req.url

    if(pathName === '/' || pathName === '/home') {
        res.end("Welcome to my server");
    } else if (pathName === "/eben") {
        res.writeHead(200, {"Content-type": "text/html"})
        res.end(self);
    } else if (pathName === "/students") {
         res.writeHead(200, {
             "Content-type": "application/json"
         })
        res.end(newStudents);
    // } else if (pathName === "/about") {
        
    //     res.write(data)
    //     res.end(design);
    } else {
        res.writeHead(404, {
            "Content-type": "text/html",
        });
        res.end("<h1>Not found</h1>");
    }
})

const newPort = 5003
newServer.listen(newPort, 'localhost', () => {
    console.log(`Now running, server: ${newPort}`)
})