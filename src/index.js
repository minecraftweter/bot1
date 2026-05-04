require("dotenv").config();
const { Client, IntentsBitField } = require("discord.js");
const { configDotenv } = require("dotenv");

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

bot_client.on("messageCreate", (msg) => {
  if (!(msg.author.id === "1500537945827049724")) {
    
    return;
  }
});

bot_client.login(process.env.TOKEN);