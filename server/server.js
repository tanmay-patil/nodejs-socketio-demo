const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const app = express();
const publicPath = path.join(__dirname, '../public/');
const port = process.env.PORT || 3000;
const server = http.createServer(app);
const io = socketIO(server);

// Use utils
const {
    generateClientMessage,
    generateServerMessage
} = require('./utils/message.js');

// middleware to set public path
app.use(express.static(publicPath));

// Register event listener
io.on('connection', (serverSocket) => {
    console.log('New User Connected !');

    // Listen for connection notice from client
    serverSocket.on('joinChatRoom', (newUser) => {
        // Broadcast
        // Socket Broadcast emits to everyone except the one who sent the message
        serverSocket.broadcast.emit('newBroadcast', generateServerMessage(`New user ${newUser.name} has joined the chat room`));
    })



    serverSocket.on('createMessage', (newMessage) => {
        console.log('Create new message', newMessage);

        // Announcement
        // IO Emit sends message to everyone including the one who send message
        // IO EMIT = Announcement
        io.emit('newAnnouncement', generateClientMessage(newMessage.from, newMessage.text));

        // Emit message from Admin to new user who has joined the chat room
        serverSocket.emit('newServerMessage', generateServerMessage(`Welcome to the chat room ${newMessage.from}!!`))
    });

    serverSocket.on('disconnect', () => {
        console.log('User was disconnected')
    });
});

server.listen(port, () => {
    console.log(`Server is running on port : ${port}`)
});