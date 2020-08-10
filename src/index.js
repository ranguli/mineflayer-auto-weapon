const weapons = require('./lib/weapons');

function init() {
  return inject;
}

function inject(bot) {
  let enabled = false;

  bot.enableAutoWeapon = () => {
    enabled = true;
  };

  bot.disableAutoWeapon = () => {
    enabled = false;
  };

  bot.inventory.on('windowUpdate', () => {
    setTimeout(() => {
      if (enabled) {
        const items = bot.inventory.items();
        if (Array.isArray(items) && items.length) {
          bot.equip(weapons.getBestWeapon(items), 'hand', (err) => {
            if (err) {
              console.error(err);
            }
          });
        }
      }
    }, 0); // We must wait until after windowUpdate for bot.heldItem to change
  });
}

module.exports = init;
