const mineflayer = require('mineflayer');
const autoWeapon = require('../src')(mineflayer);

const bot = mineflayer.createBot({
  host: 'localhost',
  port: 25565,
  username: 'autoweapon',
});

bot.loadPlugin(autoWeapon);
bot.on('login', () => {
  bot.enableAutoWeapon();
});
