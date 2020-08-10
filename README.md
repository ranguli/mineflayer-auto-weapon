# mineflayer-auto-weapon

Automatically equips the best weapon your bot has. This is just like the "Auto Weapon" module in many hacked
minecraft clients, but now for your mineflayer bot!

# Usage

```javascript

const mineflayer = require('mineflayer');
const autoWeapon = require('mineflayer-auto-weapon');

const bot = mineflayer.createBot({...}); // Create your bot here

bot.loadPlugin(autoWeapon); // Load the plugin

bot.on('login', () => {
  bot.enableAutoWeapon(); // Enable auto weapon
});

```
