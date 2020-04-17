const Discord = require('discord.js');

module.exports = class reboot {
    constructor(){
        this.name = 'temizle',
        this.alias = [],
        this.usage = '!temizle <mesaj sayısı>'
    }

    run(client, message, args){

        let mesajSayisi = args.slice(1).join(' ');

        let siliniyorMesaji = message.channel.send("\`" + mesajSayisi + '\` tane mesaj siliniyor...');

        message.channel.bulkDelete(mesajSayisi).then(siliniyorMesaji => {
            siliniyorMesaji.delete(3000);
        })
            message.channel.send("\`" + mesajSayisi + "\` tane mesaj başarıyla silindi!");

    }
}