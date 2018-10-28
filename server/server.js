const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const app = express();
const publicPath = path.join(__dirname, '../public/');
const port = process.env.PORT || 3000;
const server = http.createServer(app);
const io = socketIO(server);

// middleware to set public path
app.use(express.static(publicPath));

// Register event listener
io.on('connection', (serverSocket) => {
    console.log('New User Connected !');

    /* serverSocket.emit('newMessage', {
        from: "Server bot",
        text: "Hello from Server",
        createdAt: new Date().getTime()
    }); */

    serverSocket.on('createMessage', (newMessage) => {
        console.log('Create new message', newMessage);

        io.emit('broadcastMessage', {
            from: newMessage.from,
            text: newMessage.text,
            createdAt: new Date().getTime()
        })
    });

    serverSocket.on('disconnect', () => {
        console.log('User was disconnected')
    });
});

server.listen(port, () => {
    console.log(`Server is running on port : ${port}`)
});