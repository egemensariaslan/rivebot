const Discord = require('discord.js');
const path = require('path');

console.log("-----------------------------------------")

const client = new Discord.Client();

 // const cfg = require('./cfg.json');

  //////////////////////////////
 /////// Command Handler //////
//////////////////////////////

const { CommandHandler } = require('djs-commands');

const CH = new CommandHandler({
    folder: __dirname + "/komutlar/",
    prefix: ['!']
});

/////////////////////////////////////////////////

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  
    ///// Presence /////

    client.user.setStatus("online");

    client.user.setActivity("by Valor");

    ///////////////////

});

client.on("message", (message) => {
    if(message.channel.type === 'dm') return;
    if(message.author.type === 'bot') return;
    let args = message.content.split(" ");
    let command = args[0];
    let cmd = CH.getCommand(command);
    if(!cmd) return;

    try{
        cmd.run(client, message, args);
    }catch(e){
        console.log(e);
    }
})

client.login(process.env.token);

  //////////////////////////////
 //// Müzik Botu Kısmı ////////
//////////////////////////////

const MusicBot = require('@addict67/music-bot');

const musicBot = new MusicBot({
    discordToken: process.env.token,
    googleKey: process.env.googlekey,
    prefix: '!'
});

musicBot.start();

////////////////////////////////////////////

  ///////////////////////////////
 ////// Hoşgeldin Mesajı ///////
///////////////////////////////

client.on('guildMemberAdd', (member) => {

    let randomHexColor = ((1 << 24) * Math.random() | 0).toString(16); // Rastgele HEX renk değeri oluşturur.

    let hosgeldinizKanali = member.guild.channels.cache.find(channel => channel.name === "hosgeldiniz"); // Hoşgeldiniz kanalını bulur.

    let uyeRolu = member.guild.roles.cache.get('698523509537636433');

    if(!hosgeldinizKanali) return;

    const hosgeldinizEmbed = new Discord.MessageEmbed()
    .setColor(`#${randomHexColor}`)
    .setDescription("<@" + member.id + "> sunucuya katıldı! **GLHF!**")
    .setThumbnail(member.user.avatarURL())
    .setTimestamp()
    .addField("Sunucudaki Üye Sayısı Artık", member.guild.memberCount);

    if(!uyeRolu) return;

    member.roles.add(uyeRolu);

    hosgeldinizKanali.send(hosgeldinizEmbed);

});

///////////////////////////////////////////////////////////////////

  ///////////////////////////////
 ////// Güle Güle Mesajı ///////
///////////////////////////////

client.on('guildMemberRemove', (member) => {

    let randomHexColor = ((1 << 24) * Math.random() | 0).toString(16); // Rastgele HEX renk değeri oluşturur.

    let guleGuleKanali = member.guild.channels.cache.find(channel => channel.name === "güle-güle"); // Güle Güle kanalını bulur.

    if(!guleGuleKanali) return;

    const guleGuleEmbed = new Discord.MessageEmbed()
    .setColor(`#${randomHexColor}`)
    .setDescription("<@" + member.id + "> sunucudan ayrıldı! **Umarım tekrar gelirsin dostum!**")
    .setTimestamp()
    .addField("Sunucudaki Üye Sayısı Artık", member.guild.memberCount);

    guleGuleKanali.send(guleGuleEmbed);

});

//////////////////////////////////////////////////////////////////

/// Oto mesaj ///

client.on('message', message => {
    if (message.content.toLowerCase() === 'iyi geceler') {
        message.reply('İyi geceler babba :last_quarter_moon_with_face:');
    };
});

///////////////////////////
