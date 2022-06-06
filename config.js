module.exports = {
  adminId: "939150022115741767", // Admin of the bot
  token: process.env.token || "", //Bot's Token
  avatar: "https://media.discordapp.net/attachments/961341212449722419/961351880003428412/IMG_20220407_011757.jpg",
  clientId: process.env.clientId || "", //ID of the bot
  clientSecret: process.env.clientSecret || "", //Client Secret of the bot
  port: 9896, //Port of the API and Dashboard
  scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  serverDeafen: true, //If you want bot to stay deafened
  defaultVolume: 110, //Sets the default volume of the bot, You can change this number anywhere from 1 to 100
  supportServer: "https://discord.gg/6HFQBmQDtS", //Support Server Link
  permissions: 277083450689, //Bot Inviting Permissions
  disconnectTime: 30000, //How long should the bot wait before disconnecting from the voice channel. in miliseconds. set to 1 for instant disconnect.
  alwaysplay: true, // when set to true music will always play no matter if theres no one in voice channel.
  debug: false, //Debug mode
  // Lavalink server; optional public lavalink -> https://lavalink-list.darrennathanael.com/
  // The default one should work fine.
  nodes: [
    {
      identifier: "Apna dk", //- Used for indentifier in stats commands.
      host: "lava.sanikava.ml",
      port: 443,
      password: "JustSanikava",
      retryAmount: 100, //- The amount of times to retry connecting to the node if connection got dropped.
      retryDelay: 6000, //- Delay between reconnect attempts if connection is lost.
      secure: true, //- Can be either true or false. Only use true if ssl is enabled!
    },
  ],
  embedColor: "#738cd5", //Color of the embeds, hex supported
  presence: {
    //PresenceData object | https://discord.js.org/#/docs/main/stable/typedef/PresenceData
    status: "online", // You can have online, idle, and dnd(invisible too but it make people think the bot is offline)
    activities: [
      {
        name: "Playing games with dk sir love you forever!", //Status Text
        type: "STREAMING", // PLAYING, WATCHING, LISTENING, STREAMING
        url: "https://www.twitch.tv/monstercat/",
      },
    ],
  },
  iconURL: "https://media.discordapp.net/attachments/961282717612404816/961338694818742292/logo.gif", //This icon will be in every embed's author field
};
