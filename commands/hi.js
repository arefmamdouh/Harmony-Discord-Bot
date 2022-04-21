module.exports = {
    name: 'hi',
    description: 'greetings command',
    execute(message, args){
            const Msg = [`Howdy`, `Howdily doodily`, `Hey`, `Hi :)`, `Hey there!`, `Hola`, `Bonjour`, `Cómo estás`]
            const randomMessage = Msg[Math.floor(Math.random() * Msg.length)];
            return message.reply(randomMessage);
    }
}