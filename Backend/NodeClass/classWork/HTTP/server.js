// const http = require("fs")
// const port = 8080

// const server = https.createServer((res, res) =>{
//     res.end "my personal server"


const http = require("http")

// const server = http.createServer((req, res) => {
//     res.end('my first server')
//     console.log(req)
// })

// const port = 4000
// server.listen(port, 'localhost', () => {
//     console.log(`server is listening: ${port}`)
// })

const data = require('./data.json')

const file = JSON.stringify(data)

const server = http.createServer((req, res) => {
    const pathName = req.url;

    if(pathName === '/' || pathName === '/homepage') {
        res.end("This is homepage");
    } else if (pathName === "/products") {
        res.writeHead(200, {
            "Content-type": "plain/text",
        });
        res.end('This is product page');
    } else if (pathName === "/data") {
        res.end(file);
    } else {
        res.writeHead(404, {
            "Content-type": "text/html",
        });
        res.end("<h1>not found</h1>");
    }
});

// any four digits 
const port = 4000
server.listen(port, 'localhost', () => {
    console.log(`server is listening: ${port}`)
})


// console.log(http);
