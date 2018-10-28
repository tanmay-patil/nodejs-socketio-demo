$('#form_message').on('submit', function (e) {
    e.preventDefault();

    // create new clientsocket class object
    let clientSocketInstance = Utils.getClientSocket();

    // Emit send message event
    clientSocketInstance.emit('newClientMessage', {
        from: $('#input_user_name').val(),
        text: Utils.getMessageValue()
    })
});