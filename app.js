const express = require('express')
const app = express()
const socketio = require('socket.io')

app.use(express.static(__dirname + '/public'))

const es = app.listen(8080, () => console.log("Server is started on port 8080"))

const options = {
    
}
const io = socketio(es, options)

// io.on('connection', socket => {
//     socket.emit('server_msg', "Welcome to jobiie world")
//     socket.on('client_msg', msg => console.log(msg))
// })

io.of('/user').on('connection', socket => {
    socket.emit('user-connect', "Welcome to jobiie world(user)")
    socket.on('user-msg', msg => console.log(msg))
})

io.of('/admin').on('connection', socket => {
    socket.emit('admin-connect', "Welcome to jobiie world(admin)")
    socket.on('admin-msg', msg => console.log(msg))
})