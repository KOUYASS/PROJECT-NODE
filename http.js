const http = require('http')
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('welcom to my site web')
    }
    if (req.ulr === '/about') {
        res.end('is my history')
    }
    res.end(`<h1>ooops!!!</h1>

    
    <a href="/">back home</a>`)

})

server.listen(5000)