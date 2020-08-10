const fs = require('fs');

const rawdata = fs.readFileSync(`${__dirname}/../data/weapons.json`);
const weapons = JSON.parse(rawdata);

function getBestWeapon(items) {
  // TODO: This does not take enchantments into account, which is kind of
  // a big deal.

  let bestItem;

  // TODO: figure out a fancy filter/map to replace this with
  for (let i = 0; i < items.length; i += 1) {
    if (items[i]) {
      const dps = getWeaponDps(items[i]);

      if (!bestItem || dps > getWeaponDps(bestItem)) {
        bestItem = items[i];
      }
    }
  }

  return bestItem;
}

/** function getWeaponEnchantments(item) {
  if (!isWeaponItem(item)) {
    throw new TypeError('Item is not a weapon');
  }

  return nbt.simplify(item.nbt).Enchantments;
}* */

function getWeaponDps(item) {
  if (!isWeaponItem(item)) {
    throw new TypeError('Item is not a weapon');
  }

  // TODO: The combat update will likely change stats
  return weapons[item.type.toString()].dps['<=1.16'];
}

function isWeaponItem(item) {
  return (item.type in weapons);
}

module.exports = {
  weapons,
  isWeaponItem,
  getBestWeapon,
};
