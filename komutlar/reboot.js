const Discord = require('discord.js');

module.exports = class reboot {
    constructor(){
        this.name = 'reboot',
        this.alias = ['yenidenbaslat'],
        this.usage = '!reboot'
    }

    run(client, message, args){

        if (!message.member.hasPermission("ADMINISTRATOR")) {
            message.channel.send("Bu komuta yetkin yetmiyor dostum!");
        };

        if (!message.member.hasPermission("ADMINISTRATOR")) {
            return;
        } else { 
        message.reply(":robot: Bot yeniden başlatılıyor... :arrows_counterclockwise:").then(message => {
            console.log("Bot yeniden başlatılıyor...")
            process.exit(0);
        });
    }
    }
}