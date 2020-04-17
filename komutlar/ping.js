const Discord = require('discord.js');
const math = require('math');

module.exports = class reboot {
    constructor(){
        this.name = 'ping',
        this.alias = ['p'],
        this.usage = '!ping'
    }

    run(client, message, args){

        let botMsg = message.channel.send("Pingleniyor...");

        const pingEmbed = new Discord.MessageEmbed()
        .setDescription("**Sunucu**: `" + client.ws.ping + " milisaniye`\n**API**: `" + math.round(client.ws.ping) + " milisaniye`\n**Kök**: `" + math.sqrt(client.ws.ping) + " milisaniye`")
        .setColor("#2ecc71");

        message.channel.send(pingEmbed);

    };
};