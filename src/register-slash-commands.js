require('dotenv').config();
const { REST, Routes } = require('discord.js');

const commands = [
  {
    name: 'hey',
    description: "Replies with hey",
  },
];

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log("Registring slash commands...");
    await rest.put(
      Routes.applicationGuildCommands(
        process.env.BOT_CLIENT_ID,
        process.env.SERVER_ID,
      ),
      { body: commands },
    );
    console.log("Succesfully registered slash commands!");
  } catch (error) {
    console.error(error);
  }
})();
