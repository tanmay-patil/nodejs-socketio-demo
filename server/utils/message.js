const generateClientMessage = (from, text) => {
    return {
        from,
        text,
        createdAt: new Date().getTime()
    };
}

const generateServerMessage = (text) => {
    return {
        text,
        createdAt: new Date().getTime()
    };
}

module.exports = {
    generateClientMessage,
    generateServerMessage

};