//Aref
const { Client, Intents, Attachment} = require('discord.js');
const Discord = require('discord.js');
require('dotenv').config();

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const prefix = 'harmony,';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Harmony is online!');

});

client.on('message', message => {

    client.on('guildCreate', joinedGuild => {
        message.channel.send('Hi, I\'m Harmony. Use "harmnoy, commands" to figure out how to use me.')
    });    

    message.content = message.content.toLowerCase();

    if(!message.content.startsWith(prefix) || message.author.bot) {
        return;
    }

    var args;
    var command;
    if(message.content.substring(prefix.length, prefix.length + 1) == ' '){
        args = message.content.slice(prefix.length + 1).split(/ +/);
        command = args.shift().toLowerCase();
    }
    else{
        args = message.content.slice(prefix.length).split(/ +/);
        command = args.shift().toLowerCase();
    }

    if(command == 'ping'){
        return client.commands.get('ping').execute(message, args);
    }
    if(command == 'help'){
        client.commands.get('help').execute(message, args, Discord);
    }
    else if(command == 'creator'){
        client.commands.get('creator').execute(message, args);
    }
    else if(command == 'hi' || command == 'hello' || command == 'yo' || command == 'hey' || command == 'sup'){
        client.commands.get('hi').execute(message, args);
    }
    else if(command == 'bye' || command == 'peace' || command == 'later' || command == 'cya' || command == 'stop' || command == 'leave'){
        client.commands.get('stop').execute(message, args);
    }
    else if(command == 'play'){
        client.commands.get('play').execute(message, args);
    }
    else if(command == 'prayer'){
        client.commands.get('prayers').execute(message, args);
    }
    else {
        if(message.content.substring(prefix.length, prefix.length + 1) == ' '){
            message.channel.send(`I dont know what the fuck you are saying, use "harmony, commands" to get help and if its an insult**${message.content.substring(prefix.length, message.length)}** too`);
        }
        else{
            message.channel.send(`I dont know what the fuck you are saying, use "harmony, commands" to get help and if its an insult **${message.content.substring(prefix.length, message.length)}** too`);
        }
    }
});



client.login(process.env.token);