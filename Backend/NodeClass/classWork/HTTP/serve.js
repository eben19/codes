const http = require('http')

const server = http.createServer((req, res) => {
    res.end(`Welcome to my server`)
    console.log(req)
})

const myPort = 5000
server.listen(myPort, 'localhost', () => {
    console.log(`Running: ${myPort}`)
})