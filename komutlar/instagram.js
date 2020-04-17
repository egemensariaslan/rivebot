const Discord = require('discord.js');
const instagramUser = require('instagram-user');

module.exports = class reboot {
    constructor(){
        this.name = 'instagram',
        this.alias = ['insta'],
        this.usage = '!instagram'
    }

    run(client, message, args){

        instagramUser('justrive0').then((state) => {
            console.log(state);
            const embed = new Discord.MessageEmbed()
            .setTimestamp()
            .setTitle("Official Instagram Hesabım için Tıkla!")
            .setURL("https://instagram.com/justrive0")
            .setColor("#E1306C")
            .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1024px-Instagram_logo_2016.svg.png")
            .addFields(
                { name: 'Takipçi Sayım', value: state.followers, inline: true },
                { name: 'Takip Sayım', value: state.following, inline: true }
            )
            .setImage(state.profile_pic_url_hd);

            message.channel.send(embed);
        });
            

    

    }
}