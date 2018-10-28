// $(window).on('load', function () {
const clientSocket = io();

clientSocket.on('connect', function () {
    console.log('Connected to Server!');

    // Emit email event;
    clientSocket.emit('joinChatRoom', {
        name: "Tanmay",
        text: "Hello from Tanmay!"
    })
});


clientSocket.on('disconnect', function () {
    console.log('Disconnected from the server!')
})


clientSocket.on('newAnnouncement', function (newMessage) {
    console.log(`New Announcement, ${newMessage.from} has texted !`);
    console.log(newMessage);
});

clientSocket.on('newBroadcast', function (newMessage) {
    console.log('New Broadcast Message !');
    console.log(newMessage.text)
});
clientSocket.on('newServerMessage', function (newMessage) {
    console.log('New Message from Server Admin!');
    console.log(newMessage)
});
// });