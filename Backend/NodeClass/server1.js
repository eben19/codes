const http = require('http')

const eben = http.createServer((req, res) => {
    res.end(`This is the best server`)
    console.log(req)
})

const eben2 = 5002
eben.listen(eben2, 'localhost', () => {
    console.log(`server ${eben2} is running`)
})