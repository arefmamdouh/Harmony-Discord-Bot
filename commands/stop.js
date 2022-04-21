const { Client } = require("discord.js");

module.exports = {
    name: 'stop',
    description: 'leaving command or stopping music',
    async execute(message, args){
        const voiceChannel = message.member.voice.channel;
        const Msg = [`Adios`, `Aight then`, `Ay man is that how it\'s gon be`, `Peace out brotha`, `Man fuck you ill see you at work`, `Bye bye`, `Okay...`, `ur mom`, `leaving :smiling_face_with_tear:`]
        const randomMessage = Msg[Math.floor(Math.random() * Msg.length)];
        if(!voiceChannel){
            return message.reply('You need to be in a voice channel to stop the music lol');
        }
        await voiceChannel.leave();
        if(randomMessage == 'Man fuck you ill see you at work'){
            await message.channel.send(randomMessage, {files: ['./gta_image.png']});
        }
        else{
            await message.channel.send(randomMessage);
        }
    }
}