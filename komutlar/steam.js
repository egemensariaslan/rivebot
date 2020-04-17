const Discord = require('discord.js');

module.exports = class reboot {
    constructor(){
        this.name = 'steam',
        this.alias = [],
        this.usage = '!steam'
    }

    run(client, message, args){

        const $ = cheerio.load('https://steamcommunity.com/id/revios0/');

        const steamLevel = $('<span class="friendPlayerLevelNum"></span>');

        const embed = new Discord.MessageEmbed()
        .setTitle("Steam Bağlantılarım:")
        .setTimestamp()
        .setColor("#3498db")
        .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/c/c1/Steam_Logo.png")
        .setDescription("\n\n[**Steam Profilim için Tıkla!**](https://steamcommunity.com/id/revios0/)\n\n[**Steam Grubumuz için Tıkla!**](https://steamcommunity.com/groups/justrive)\n\n");

        message.channel.send(embed);

    }
}