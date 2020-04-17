const Discord = require('discord.js');

module.exports = class test {
    constructor(){
        this.name = 'test',
        this.alias = [],
        this.usage = '!test'
    }

    run(client, message, args){

        if (!message.member.hasPermission("ADMINISTRATOR")) {
            message.channel.send("Yetkin yok och!");
        };

        if (!message.member.hasPermission("ADMINISTRATOR")) {
            return;
        } else {
            message.reply(this.name + " çalıştı!");
        };
    };
};