const { AttachmentBuilder,  SlashCommandBuilder } = require('discord.js');
const fs = require('fs');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('resume')
		.setDescription('twice_see_is_fun'),
	async execute(interaction) {
        await interaction.reply('https://career.programmers.co.kr/pr/hpyho33_5919');
	},
};