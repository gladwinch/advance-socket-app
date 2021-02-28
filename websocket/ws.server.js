const http = require('http')
const websocket = require('ws')

const server = http.createServer((req, res) => {
    res.end("I am connected!")
})

const wss = new websocket.Server({ server })

wss.on('headers', (header, req) => {
    console.log(header)
})

wss.on('connection', (ws) => {
    ws.send("You are connected to ws server.")
})

server.listen(8000)