const lyricsFinder = require("lyrics-finder");
const SlashCommand = require("../../lib/SlashCommand");
const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");

const command = new SlashCommand()
  .setName("lyrics")
  .setDescription("Shows lyrics of a song")
  // get user input
  .addStringOption((option) =>
    option
      .setName("song")
      .setDescription("The song to get lyrics for")
      .setRequired(false)
  )
  .setRun(async (client, interaction, options) => {
    await interaction.reply({
      embeds: [client.Embed(":mag_right: **Searching...**")],
    });

    const args = interaction.options.getString("song");

    let player = client.manager.players.get(interaction.guild.id);

    if (!args && !player)
      return interaction.editReply({
        embeds: [client.ErrorEmbed("**There's nothing playing**")],
      });

    // if no input, search for the current song. if no song console.log("No song input");
    let search = args ? args : player.queue.current.title;
    try {
      lyrics = await lyricsFinder("", search);
      if (!lyrics) return void interaction.editReply({
        embeds: [client.ErrorEmbed(`No lyrics found for ${search}.`)],
      });
    } catch (error) {
      return void interaction.editReply({
        embeds: [client.ErrorEmbed(`No lyrics found for ${search}.`)],
      });
    }
    
    let lyricsEmbed = new MessageEmbed()
        .setColor(client.config.embedColor)
        .setTitle(`${search}`)
        .setDescription(lyrics);
    if (lyricsEmbed.description.length >= 2048)
      lyricsEmbed.description = `${lyricsEmbed.description.substr(0, 4094)}...`;    
      return interaction.editReply({ embeds: [lyricsEmbed] });
  });
module.exports = command;
