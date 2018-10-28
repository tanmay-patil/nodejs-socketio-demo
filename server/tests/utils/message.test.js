const expect = require('expect');
const {
    generateClientMessage,
    generateServerMessage
} = require('../../utils/message.js');

describe('generateClientMessage', () => {
    it('Should generate correct client message object', () => {
        let from = 'Tanmay';
        let text = 'Hello World';
        let message = generateClientMessage(from, text);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({
            from,
            text
        });
        /* expect(message.createdAt).toBeA('number');
        expect(message).toInclude({
            from,
            text
        }); */
    })
});

describe('generateServerMessage', () => {
    it('Should generate correct server message object', () => {
        let text = 'Hello World';
        let message = generateServerMessage(text);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({
            text
        });
    })
});