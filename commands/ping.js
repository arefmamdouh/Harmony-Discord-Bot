module.exports = {
    name: 'ping',
    description: 'ping command',
    execute(message, args){
        return message.channel.send('pong!');
    }
}