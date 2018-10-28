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
io.on('connection', (clientSocket) => {
    console.log('New User Connected !');

    clientSocket.on('disconnect', () => {
        console.log('User was disconnected')
    });
});

server.listen(port, () => {
    console.log(`Server is running on port : ${port}`)
});