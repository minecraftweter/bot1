require("dotenv").config();
const { Client, IntentsBitField } = require("discord.js");

const bot_client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

bot_client.on("clientReady", (c) => {
  console.log(`✅ ${c.user.displayName} is online!`);
});

bot_client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  switch (interaction.commandName) {
    case "hey":
      interaction.reply("hey");
    case "ping":
      interaction.reply("pong");
  }
});

bot_client.login(process.env.TOKEN);
