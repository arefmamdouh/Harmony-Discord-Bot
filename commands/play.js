//npm install @discordjs/opus ffmpeg-static yt-search ytdl-core 
const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
const yts = require('yt-search');
const { createReadStream } = require('fs');
const { join } = require('path');
module.exports = {
    name: 'play',
    description: 'joins the voice channel and plays a video from youtube',
    async execute(message, args){
        // if(message.member.roles.cache.has('954854909960929301')) {
            const voiceChannel = message.member.voice.channel;

            if(!message.member.voice.channel){
                return message.reply('You are not in a voice channel idiot!');
            }
            
            const permissions = voiceChannel.permissionsFor(message.client.user);
            if(!permissions.has('CONNECT')){
                return message.reply('You do not have permission :/');
            }
            if(!permissions.has('SPEAK')){
                return message.reply('You do not have permission :/');
            }

            if(!args.length){
                return message.reply('Play what dumbass?');
            }

            message.reply('One sec...');

            const validURL = (str) =>{
                var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
                if(!regex.test(str)){
                    return false;
                } else {
                    return true;
                }
            }

            if(validURL(args[0])){
                const connection = await voiceChannel.join();
                const stream = ytdl(args[0], {filter: 'audioonly'});

                connection.play(stream, {seek: 0, volume: 1})
                .on('finish', () =>{
                    console.log("Finished")
                    message.channel.send('No more songs, adios amigo');
                    voiceChannel.leave();
                });

                await message.channel.send(`playing your link`)

                return
            }

            const connection = await voiceChannel.join();

            const videoFinder = async (query) => {
                const videoResult = await ytSearch(query);

                return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
            }

            const video = await videoFinder(args.join(' '));

            if(video) {
                const stream = ytdl(video.url, {filter: 'audioonly', highWaterMark: 1 << 25});
                connection.play(stream, {seek: 0, volume: 1})
                .on('finish', () =>{
                    console.log("Finished")
                    message.channel.send('No more songs, adios amigo');
                    voiceChannel.leave();
                });

                await message.channel.send(`playing ***${video.title}***`);
            }
            else {
                message.reply('I have no idea what song that is');
            }
        // }
        // else {
        //     message.reply('You ain\'t a damn DJ bitch');
        // }
    }
}