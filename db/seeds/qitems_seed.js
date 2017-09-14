const models = require('../models');

exports.seed = function (knex, Promise) {

  for (var i = 0; i < items.length; i++) {
    models.Items.forge({
      name: items[i].name,
      type: items[i].type,
      equippable: items[i].equippable,
      puzzle_id: items[i].puzzle_id,
      description: items[i].description,
      img_url: items[i].img_url
    }).save()
      .error(err => {
        console.error('ERROR: failed to create items');
        throw err;
      })
      .catch(() => {
        console.log('WARNING: default items already exists.');
      });
  }
};

var items = [
  {
    name: 'Phone',
    description: 'A cell phone you wake up holding.',
    type: 'Consumable', /* Miscellaneous, Reward, etc. */
    equippable: 0, /* Yes, No, Not Possible */
    img_url: '/assets/items/paper.jpg',
    puzzle_id: 0 //0
  },
  {
    name: 'Scrap of Paper',
    description: 'You woke up with this scrap of paper in your pocket. On it is written: "Trust me"',
    type: 'Support', /* Miscellaneous, Reward, etc. */
    equippable: 1, /* Yes, No, Not Possible */
    img_url: '/assets/items/paper.jpg',
    puzzle_id: 1
  },
  {
    name: 'Stack of Papers',
    description: 'Small stack of papers you took from the desk of the room you woke up in.',
    type: 'Storyline', /* Miscellaneous, Reward, etc. */
    equippable: 0, /* Yes, No, Not Possible */
    img_url: '/assets/items/paper.jpg',
    puzzle_id: 2
  },
  {
    name: 'Blank Paper',
    description: 'Some of the pieces of paper you picked up off the desk were blank.',
    type: 'Storyline', /* Miscellaneous, Reward, etc. */
    equippable: 0, /* Yes, No, Not Possible */
    img_url: '/assets/items/paper.jpg',
    puzzle_id: 5
  },
  {
    name: 'Pocketknife',
    description: 'A small pocketnkife you found in the backpack.',
    type: 'Support', /* Miscellaneous, Reward, etc. */
    equippable: 1, /* Yes, No, Not Possible */
    img_url: '/assets/items/paper.jpg',
    puzzle_id: 5
  },
  {
    name: 'Map',
    description: 'A map of the surface.',
    type: 'Miscellaneous', /* Miscellaneous, Reward, etc. */
    equippable: 0, /* Yes, No, Not Possible */
    img_url: '/assets/items/paper.jpg',
    puzzle_id: 5
  },
  {
    name: 'Bottle of Water',
    description: 'A bottle of water you found in the lockbox.',
    type: 'Miscellaneous', /* Miscellaneous, Reward, etc. */
    equippable: 0, /* Yes, No, Not Possible */
    img_url: '/assets/items/paper.jpg',
    puzzle_id: 8
  },
  {
    name: 'Bottle of Water',
    description: 'A bottle of water you found in the lockbox.',
    type: 'Miscellaneous', /* Miscellaneous, Reward, etc. */
    equippable: 0, /* Yes, No, Not Possible */
    img_url: '/assets/items/paper.jpg',
    puzzle_id: 8
  },
  {
    name: 'MRE Meal',
    description: 'An MRE you found in the lockbox.',
    type: 'Miscellaneous', /* Miscellaneous, Reward, etc. */
    equippable: 0, /* Yes, No, Not Possible */
    img_url: '/assets/items/paper.jpg',
    puzzle_id: 8
  },
  {
    name: 'MRE Meal',
    description: 'An MRE you found in the lockbox.',
    type: 'Miscellaneous', /* Miscellaneous, Reward, etc. */
    equippable: 0, /* Yes, No, Not Possible */
    img_url: '/assets/items/paper.jpg',
    puzzle_id: 8
  },
  {
    name: 'MRE Meal',
    description: 'An MRE you found in the lockbox.',
    type: 'Miscellaneous', /* Miscellaneous, Reward, etc. */
    equippable: 0, /* Yes, No, Not Possible */
    img_url: '/assets/items/paper.jpg',
    puzzle_id: 8
  },
  {
    name: 'Snack Bar',
    description: 'A snack bar you found in the lockbox.',
    type: 'Miscellaneous', /* Miscellaneous, Reward, etc. */
    equippable: 0, /* Yes, No, Not Possible */
    img_url: '/assets/items/paper.jpg',
    puzzle_id: 8
  },
  {
    name: 'Snack Bar',
    description: 'A snack bar you found in the lockbox.',
    type: 'Miscellaneous', /* Miscellaneous, Reward, etc. */
    equippable: 0, /* Yes, No, Not Possible */
    img_url: '/assets/items/paper.jpg',
    puzzle_id: 8
  },
  {
    name: 'Snack Bar',
    description: 'A snack bar you found in the lockbox.',
    type: 'Miscellaneous', /* Miscellaneous, Reward, etc. */
    equippable: 0, /* Yes, No, Not Possible */
    img_url: '/assets/items/paper.jpg',
    puzzle_id: 8
  },
  {
    name: 'Snack Bar',
    description: 'A snack bar you found in the lockbox.',
    type: 'Miscellaneous', /* Miscellaneous, Reward, etc. */
    equippable: 0, /* Yes, No, Not Possible */
    img_url: '/assets/items/paper.jpg',
    puzzle_id: 8
  },
  {
    name: 'Snack Bar',
    description: 'A snack bar you found in the lockbox.',
    type: 'Miscellaneous', /* Miscellaneous, Reward, etc. */
    equippable: 0, /* Yes, No, Not Possible */
    img_url: '/assets/items/paper.jpg',
    puzzle_id: 8
  },
  {
    name: 'Handgun',
    description: 'The handgun you found in the lockbox.',
    type: 'Miscellaneous', /* Miscellaneous, Reward, etc. */
    equippable: 0, /* Yes, No, Not Possible */
    img_url: '/assets/items/paper.jpg',
    puzzle_id: 8
  },
  {
    name: 'Pen',
    description: 'A pen you found took from a desk in an empty room.',
    type: 'Miscellaneous', /* Miscellaneous, Reward, etc. */
    equippable: 0, /* Yes, No, Not Possible */
    img_url: '/assets/items/paper.jpg',
    puzzle_id: 8
  },
  {
    name: 'Pictures',
    description: 'Various pictures you took from the wall of your room.',
    type: 'Miscellaneous', /* Miscellaneous, Reward, etc. */
    equippable: 0, /* Yes, No, Not Possible */
    img_url: '/assets/items/paper.jpg',
    puzzle_id: 9
  },
  {
    name: 'Newspaper Clipping',
    description: 'A newspaper clipping of a headstone with the words: "Charles Milo Ender, Beloved"',
    type: 'Miscellaneous', /* Miscellaneous, Reward, etc. */
    equippable: 0, /* Yes, No, Not Possible */
    img_url: '/assets/items/paper.jpg',
    puzzle_id: 9
  }
];
