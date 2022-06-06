const { ContextMenuCommandBuilder } = require("@discordjs/builders");

module.exports = {
  command: new ContextMenuCommandBuilder().setName("hi").setType(2),

  /**
   * This function will handle context menu interaction
   * @param {import("../lib/DiscordMusicBot")} client
   * @param {import("discord.js").GuildContextMenuInteraction} interaction
   */
  run: (client, interaction, options) => {
    interaction.reply(`<@${interaction.options.getUser("user").id}>, Hello!`);
  },
};
