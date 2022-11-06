const { AttachmentBuilder, Client, Events, GatewayIntentBits, SlashCommandBuilder } = require('discord.js');
const Canvas = require('@napi-rs/canvas');
const axios = require("axios");
const fs = require('fs');

const API = axios.create({
    timeout:60000
})

module.exports = {
	data: new SlashCommandBuilder()
		.setName('make_image')
		.setDescription('make image !')
        .addStringOption(option =>
			option
				.setName('text')
                .setDescription('text'))
        ,
	async execute(interaction) {
        
        await interaction.deferReply() // ephemeral option is valid inside of this function
        await API.post("https://main-dalle-server-scy6500.endpoint.ainize.ai/generate", {
            "text":interaction.options.getString("text") || "snow",
            "num_images":1,
        }).then(async (res)=>{

            // This uses the canvas dimensions to stretch the image onto the entire canvas
            var bitmap = await new Buffer(res.data[0], 'base64');  
            // await interaction.reply({ files: attachment });
            
            const attachment = new AttachmentBuilder(bitmap, { name: 'profile-image.png' });
            interaction.editReply({ files: [attachment] })

        }).error(err => console.log(err))
		
	},
};