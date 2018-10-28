function joinChatRoom() {

    let clientSocketObj = Utils.getClientSocketClassObject();

    $('#input_user_name').val() !== '' ? clientSocketObj.connect() : alert("Don't be lazy to fill in your name!");

}

class ClientSocket {
    constructor(clientSocket) {
        this.clientSocket = clientSocket;
        this.applyListeners();
        this.userName = $('#input_user_name').val()
    }

    getClientSocketInstance() {
        return this.clientSocket;
    }

    connect() {
        let THIS = this;
        this.clientSocket.on('connect', function () {
            console.log('Connected to Server!');

            // Emit join chat room event;
            THIS.clientSocket.emit('joinChatRoom', {
                name: THIS.userName,
                text: "Hello from Tanmay!"
            });

            // Close the modal popup
            $('#myModal').modal('hide');

            // Show the chat room container
            $('#chatRoomContainer').show();
        });
    }

    applyListeners() {
        this.addDisconnectListener();
        this.addAnnouncementListener();
        this.addBroadcastListener();
        this.addServerMessageListener();

    }

    addDisconnectListener() {
        this.clientSocket.on('disconnect', function () {
            console.log('Disconnected from the server!')
        });
    }

    addAnnouncementListener() {
        this.clientSocket.on('newAnnouncement', (newMessage) => {
            console.log(`New Announcement`);
            console.log(newMessage);

            let li = Utils.createListElement(newMessage);
            Utils.appendElementToList(li);
        });
    }

    addBroadcastListener() {
        this.clientSocket.on('newBroadcast', (newMessage) => {
            console.log('New Broadcast Message !');
            console.log(newMessage.text)
        });
    }

    addServerMessageListener() {
        this.clientSocket.on('newServerMessage', (newMessage) => {
            console.log('New Message from Server Admin!');
            console.log(newMessage)
        });
    }
}