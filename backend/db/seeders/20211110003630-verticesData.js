'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Vertices', [

      { coord_x: 1243, coord_y: 258, createdAt: new Date(), updatedAt: new Date()}, // 1 * Fireshear, --FireshearRoad

      { coord_x: 1271, coord_y: 235, createdAt: new Date(), updatedAt: new Date()}, // 2 FireshearRoad (from Fireshear to Luskan)
      { coord_x: 1308, coord_y: 244, createdAt: new Date(), updatedAt: new Date()}, // 3 FireshearRoad
      { coord_x: 1335, coord_y: 259, createdAt: new Date(), updatedAt: new Date()}, // 4 FireshearRoad
      { coord_x: 1365, coord_y: 275, createdAt: new Date(), updatedAt: new Date()}, // 5 FireshearRoad

      { coord_x: 1381, coord_y: 304, createdAt: new Date(), updatedAt: new Date()}, // 6 * Luskan, --FireshearRoad, --BlackfordRoad, --HighRoad

      { coord_x: 1440, coord_y: 279, createdAt: new Date(), updatedAt: new Date()}, // 7 BlackfordRoad (from Luskan to Mirabar)
      { coord_x: 1485, coord_y: 263, createdAt: new Date(), updatedAt: new Date()}, // 8 BlackfordRoad
      { coord_x: 1529, coord_y: 244, createdAt: new Date(), updatedAt: new Date()}, // 9 BlackfordRoad

      { coord_x: 1552, coord_y: 227, createdAt: new Date(), updatedAt: new Date()}, // 10 * Mirabar, --BlackfordRoad, --LongRoad

      { coord_x: 1585, coord_y: 246, createdAt: new Date(), updatedAt: new Date()}, // 11 LongRoad (From Mirabar to LongSaddle)
      { coord_x: 1583, coord_y: 285, createdAt: new Date(), updatedAt: new Date()}, // 12 LongRoad
      { coord_x: 1596, coord_y: 321, createdAt: new Date(), updatedAt: new Date()}, // 13 LongRoad
      { coord_x: 1618, coord_y: 354, createdAt: new Date(), updatedAt: new Date()}, // 14 LongRoad


      { coord_x: 1620, coord_y: 399, createdAt: new Date(), updatedAt: new Date()}, // 15 * LongSaddle, --LongRoad

      { coord_x: 1635, coord_y: 438, createdAt: new Date(), updatedAt: new Date()}, // 16 LongRoad
      { coord_x: 1657, coord_y: 467, createdAt: new Date(), updatedAt: new Date()}, // 17 LongRoad

      { coord_x: 1666, coord_y: 505, createdAt: new Date(), updatedAt: new Date()}, // 18 * Triboar, --TriboarTrail, --LongRoad

      { coord_x: 00000, coord_y: 000000, createdAt: new Date(), updatedAt: new Date()}, // 19 LongRoad (from Triboar to Waterdeep)
      { coord_x: 00000, coord_y: 000000, createdAt: new Date(), updatedAt: new Date()}, // 20 LongRoad
      { coord_x: 00000, coord_y: 000000, createdAt: new Date(), updatedAt: new Date()}, // 21 LongRoad
      { coord_x: 00000, coord_y: 000000, createdAt: new Date(), updatedAt: new Date()}, // 22 LongRoad
      { coord_x: 00000, coord_y: 000000, createdAt: new Date(), updatedAt: new Date()}, // 23 LongRoad
      { coord_x: 00000, coord_y: 000000, createdAt: new Date(), updatedAt: new Date()}, // 24 LongRoad


      { coord_x: 00000, coord_y: 000000, createdAt: new Date(), updatedAt: new Date()}, // 25 * WaterDeep, --HighRoad --LongRoad

      { coord_x: 00000, coord_y: 000000, createdAt: new Date(), updatedAt: new Date()}, // 26 HighRoad (From Waterdeep to Daggerford)
      { coord_x: 00000, coord_y: 000000, createdAt: new Date(), updatedAt: new Date()}, // 27 HighRoad


      { coord_x: 00000, coord_y: 000000, createdAt: new Date(), updatedAt: new Date()}, // 28 * Daggerford, --HighRoad


      { coord_x: 00000, coord_y: 000000, createdAt: new Date(), updatedAt: new Date()}, // 29 HighRoad (from Luskan to NeverWinter )
      { coord_x: 00000, coord_y: 000000, createdAt: new Date(), updatedAt: new Date()}, // 30 HighRoad
      { coord_x: 00000, coord_y: 000000, createdAt: new Date(), updatedAt: new Date()}, // 31 HighRoad

      { coord_x: 00000, coord_y: 000000, createdAt: new Date(), updatedAt: new Date()}, // 32 * NeverWinter, --HighRoad

      { coord_x: 00000, coord_y: 000000, createdAt: new Date(), updatedAt: new Date()}, // 33 --HighRoad (from NeverWinter to Hels Hold)

      { coord_x: 00000, coord_y: 000000, createdAt: new Date(), updatedAt: new Date()}, // 34 * Helms Hold, -- HighRoad

      { coord_x: 00000, coord_y: 000000, createdAt: new Date(), updatedAt: new Date()}, // 35 --HighRoad, --TriboarTrail (intersection)
      { coord_x: 00000, coord_y: 000000, createdAt: new Date(), updatedAt: new Date()}, // 36 --HighRoad, (from Triboar intersection to Waterdeep)
      { coord_x: 00000, coord_y: 000000, createdAt: new Date(), updatedAt: new Date()}, // 37 --HighRoad
      { coord_x: 00000, coord_y: 000000, createdAt: new Date(), updatedAt: new Date()}, // 38 --HighRoad
      { coord_x: 00000, coord_y: 000000, createdAt: new Date(), updatedAt: new Date()}, // 39 --HighRoad
      { coord_x: 00000, coord_y: 000000, createdAt: new Date(), updatedAt: new Date()}, // 40 --HighRoad



      { coord_x: 00000, coord_y: 000000, createdAt: new Date(), updatedAt: new Date()}, // 41 --TriboarTrail (from HighRoad intersection to Triboar)
      { coord_x: 00000, coord_y: 000000, createdAt: new Date(), updatedAt: new Date()}, // 42
      { coord_x: 00000, coord_y: 000000, createdAt: new Date(), updatedAt: new Date()}, // 43
      { coord_x: 00000, coord_y: 000000, createdAt: new Date(), updatedAt: new Date()}, // 44


      // { coord_x: 00000, coord_y: 000000, createdAt: new Date(), updatedAt: new Date()}, // 46
      // { coord_x: 00000, coord_y: 000000, createdAt: new Date(), updatedAt: new Date()}, // 47
      // { coord_x: 00000, coord_y: 000000, createdAt: new Date(), updatedAt: new Date()}, // 48
      // { coord_x: 00000, coord_y: 000000, createdAt: new Date(), updatedAt: new Date()}, // 49
      // { coord_x: 00000, coord_y: 000000, createdAt: new Date(), updatedAt: new Date()}, // 50
      // { coord_x: 00000, coord_y: 000000, createdAt: new Date(), updatedAt: new Date()}, // 51
      // { coord_x: 00000, coord_y: 000000, createdAt: new Date(), updatedAt: new Date()}, // 52
      // { coord_x: 00000, coord_y: 000000, createdAt: new Date(), updatedAt: new Date()}, // 53
      // { coord_x: 00000, coord_y: 000000, createdAt: new Date(), updatedAt: new Date()}, // 54
      // { coord_x: 00000, coord_y: 000000, createdAt: new Date(), updatedAt: new Date()}, // 55
      // { coord_x: 00000, coord_y: 000000, createdAt: new Date(), updatedAt: new Date()}, // 56




  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Vertices', null, {});

  }
};
