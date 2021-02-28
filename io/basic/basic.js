const http = require('http')
const socket = require('socket.io')

const server = http.createServer((req, res) => {
    res.end("I am connected!")
})

let options = {
    path: "/my-custom-path/"
}

const io = socket(server, options)
io.on('connection', socket => {
    socket.emit("You are connected to ws server.")
    socket.on
})

server.listen(8000, () => console.log("Server is running on port 8000"))
