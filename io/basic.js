const http = require('http')
const socket = require('socket.io')

const server = http.createServer((req, res) => {
    res.end("I am connected!")
})

const io = socket(server)
io.on('connection', socket => {
    socket.emit("You are connected to ws server.")
    socket.on
})

server.listen(8000)
