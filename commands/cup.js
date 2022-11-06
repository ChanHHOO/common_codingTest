const { AttachmentBuilder, SlashCommandBuilder } = require('discord.js');
const fs = require('fs');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('water_please')
		.setDescription('using_pretty_cup'),
	async execute(interaction) {
        await interaction.deferReply() // ephemeral option is valid inside of this function
        fs.readFile('/home/ubuntu/discord-bot/images/cup.png', async (err, data) => {
            const attachment = new AttachmentBuilder(data, { name: 'cup-image.png' });
            interaction.editReply({ files: [attachment] })
        })

        
	},
};