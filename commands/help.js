module.exports = {
    name: 'help',
    description: 'Embeds',
    execute(message, args, Discord){
            const newEmbed = new Discord.MessageEmbed()
            .setColor('#f01347')
            .setDescription('An embed for the list of commands used by Harmony')
            .setTitle('Commands')
            .addFields(
                {name: 'harmony, hi', value: 'I say hello back :D I might say something weird though, you can also say hello.'},
                {name: 'harmony, play <music>', value: 'after using this command type in whatever song you want to listen to. Not just music btw you can also ask for a sound or a podcast.'},
                {name: 'harmony, stop', value: 'stops the music, you can use leave, bye, peace out...'},
                {name: 'harmony, ping', value: 'I\'ll leave it as a surprise.'},
                {name: 'harmony, creator', value: 'I\'ll tell you about the man that made me.'},
                {name: 'harmony, prayer <prayer name>', value: "Use harmony, prayer followed by the name of the prayer.\n" +
                "prayer names: fajr, sunrise, dhuhr, asr, maghrib, isha, and imsak."}
            )
            .setFooter('Have fun homies. With love, Aref Mamdouh')
            .setAuthor('Aref Mamdouh');

            message.channel.send(newEmbed);
    }
}