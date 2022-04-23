module.exports = {
    name: 'help',
    description: 'Embeds',
    execute(message, args, Discord){
            const newEmbed = new Discord.MessageEmbed()
            .setColor('#f01347')
            .addFields(
                {name: `Commands`, 
                value: 
                "`harmony, hi                  : `I say hello back :D I might say something weird though, you can also say hello. \n" +
                "`harmony, play <music>        : `After using this command type in whatever song you want to listen to. Not just music btw you can also ask for a sound or a podcast. \n" +
                "`harmony, stop                : `Stops the music, you can use leave, bye, peace out...\n" +
                "`harmony, date                : `Tells you the date.\n" +
                "`harmony, ping                : `I\'ll leave it as a surprise.\n" +
                "`harmony, creator             : `I\'ll tell you about the man that made me.\n" +
                "`harmony, prayer <prayer name>: `Use harmony, prayer followed by the name of the prayer.\n" +
                "`prayer names                 : `fajr, sunrise, dhuhr, asr, maghrib, and isha." +
                "Also when i say <music> for example you type the name of the song/podcast without the <>."}
            )
            .setFooter('Have fun homies. With love, Aref Mamdouh');

            message.channel.send(newEmbed);
    }
}