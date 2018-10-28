class Utils {
    static createListElement(newMessage) {
        let li = document.createElement('li');
        li.innerHTML = `${newMessage.from} says : ${newMessage.text}`;
        return li;
    }

    static appendElementToList(li) {
        $('#ol_messages_list').append(li);
    }

    static getClientSocketClassObject() {

        let clientSocket = io();
        let clientSocketObj = new ClientSocket(clientSocket);
        return clientSocketObj;
    }

    static getClientSocket() {
        return io();
    }



    static getMessageValue() {
        return $('#input_message').val() !== undefined ? $('#input_message').val() : '';
    }
}