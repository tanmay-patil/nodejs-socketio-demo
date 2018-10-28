// $(window).on('load', function () {
const clientSocket = io();

clientSocket.on('connect', function () {
    console.log('Connected to Server!');

    // Emit email event;
    /* clientSocket.emit('createMessage', {
        from: "Client bot",
        text: "Hello from Client !"
    }) */
});


clientSocket.on('disconnect', function () {
    console.log('Disconnected from the server!')
})


clientSocket.on('broadcastMessage', function (newMessage) {
    console.log('New Broadcast Message !');
    console.log(newMessage)
});
// });