'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Vertices', [

      { coord_x: 1243, coord_y: 258, createdAt: new Date(), updatedAt: new Date()}, // 1 * Fireshear, --FireshearRoad [2]

      { coord_x: 1271, coord_y: 235, createdAt: new Date(), updatedAt: new Date()}, // 2 FireshearRoad (from Fireshear to Luskan) [1,3]
      { coord_x: 1308, coord_y: 244, createdAt: new Date(), updatedAt: new Date()}, // 3 FireshearRoad [2,4]
      { coord_x: 1335, coord_y: 259, createdAt: new Date(), updatedAt: new Date()}, // 4 FireshearRoad [3,5]
      { coord_x: 1365, coord_y: 275, createdAt: new Date(), updatedAt: new Date()}, // 5 FireshearRoad [4,6]

      { coord_x: 1381, coord_y: 304, createdAt: new Date(), updatedAt: new Date()}, // 6 * Luskan, --FireshearRoad, --BlackfordRoad, --HighRoad [5,7,29]

      { coord_x: 1440, coord_y: 279, createdAt: new Date(), updatedAt: new Date()}, // 7 BlackfordRoad (from Luskan to Mirabar) [6,8]
      { coord_x: 1485, coord_y: 263, createdAt: new Date(), updatedAt: new Date()}, // 8 BlackfordRoad [7,9]
      { coord_x: 1529, coord_y: 244, createdAt: new Date(), updatedAt: new Date()}, // 9 BlackfordRoad [8,10]

      { coord_x: 1552, coord_y: 227, createdAt: new Date(), updatedAt: new Date()}, // 10 * Mirabar, --BlackfordRoad, --LongRoad [9,11]

      { coord_x: 1585, coord_y: 246, createdAt: new Date(), updatedAt: new Date()}, // 11 LongRoad (From Mirabar to LongSaddle) [10,12]
      { coord_x: 1583, coord_y: 285, createdAt: new Date(), updatedAt: new Date()}, // 12 LongRoad [11,13]
      { coord_x: 1596, coord_y: 321, createdAt: new Date(), updatedAt: new Date()}, // 13 LongRoad [12,14]
      { coord_x: 1618, coord_y: 354, createdAt: new Date(), updatedAt: new Date()}, // 14 LongRoad [13,15]


      { coord_x: 1620, coord_y: 399, createdAt: new Date(), updatedAt: new Date()}, // 15 * LongSaddle, --LongRoad [14,16]

      { coord_x: 1635, coord_y: 438, createdAt: new Date(), updatedAt: new Date()}, // 16 LongRoad [15,17]
      { coord_x: 1657, coord_y: 467, createdAt: new Date(), updatedAt: new Date()}, // 17 LongRoad [16,18]

      { coord_x: 1666, coord_y: 505, createdAt: new Date(), updatedAt: new Date()}, // 18 * Triboar, --TriboarTrail, --LongRoad [17,19,44]

      { coord_x: 1677, coord_y: 539, createdAt: new Date(), updatedAt: new Date()}, // 19 LongRoad (from Triboar to Waterdeep) [18,20]
      { coord_x: 1662, coord_y: 610, createdAt: new Date(), updatedAt: new Date()}, // 20 LongRoad [19,21]
      { coord_x: 1646, coord_y: 662, createdAt: new Date(), updatedAt: new Date()}, // 21 LongRoad [20,22]
      { coord_x: 1646, coord_y: 720, createdAt: new Date(), updatedAt: new Date()}, // 22 LongRoad [21,23]
      { coord_x: 1634, coord_y: 761, createdAt: new Date(), updatedAt: new Date()}, // 23 LongRoad [22,24]
      { coord_x: 1614, coord_y: 806, createdAt: new Date(), updatedAt: new Date()}, // 24 LongRoad [23,25]


      { coord_x: 1614, coord_y: 856, createdAt: new Date(), updatedAt: new Date()}, // 25 * WaterDeep, --HighRoad --LongRoad [24,26,40]

      { coord_x: 1653, coord_y: 870, createdAt: new Date(), updatedAt: new Date()}, // 26 HighRoad (From Waterdeep to Daggerford) [25,27]
      { coord_x: 1690, coord_y: 906, createdAt: new Date(), updatedAt: new Date()}, // 27 HighRoad [26,28]


      { coord_x: 1731, coord_y: 929, createdAt: new Date(), updatedAt: new Date()}, // 28 * Daggerford, --HighRoad [27]


      { coord_x: 1398, coord_y: 339, createdAt: new Date(), updatedAt: new Date()}, // 29 HighRoad (from Luskan to NeverWinter ) [6, 30]
      { coord_x: 1408, coord_y: 372, createdAt: new Date(), updatedAt: new Date()}, // 30 HighRoad [29,31]
      { coord_x: 1417, coord_y: 428, createdAt: new Date(), updatedAt: new Date()}, // 31 HighRoad [30,32]

      { coord_x: 1424, coord_y: 465, createdAt: new Date(), updatedAt: new Date()}, // 32 * NeverWinter, --HighRoad [31,33]

      { coord_x: 1448, coord_y: 481, createdAt: new Date(), updatedAt: new Date()}, // 33 --HighRoad (from NeverWinter to Hels Hold) [32,34]

      { coord_x: 1465, coord_y: 494, createdAt: new Date(), updatedAt: new Date()}, // 34 * Helm's Hold, -- HighRoad [33,35]

      { coord_x: 1471, coord_y: 553, createdAt: new Date(), updatedAt: new Date()}, // 35 --HighRoad, --TriboarTrail (intersection) [34,36,41]
      { coord_x: 1475, coord_y: 604, createdAt: new Date(), updatedAt: new Date()}, // 36 --HighRoad, (from Triboar intersection to Waterdeep) [35,37]
      { coord_x: 1529, coord_y: 644, createdAt: new Date(), updatedAt: new Date()}, // 37 --HighRoad [35,38]
      { coord_x: 1526, coord_y: 725, createdAt: new Date(), updatedAt: new Date()}, // 38 --HighRoad [37,39]
      { coord_x: 1559, coord_y: 794, createdAt: new Date(), updatedAt: new Date()}, // 39 --HighRoad [38,40]
      { coord_x: 1587, coord_y: 830, createdAt: new Date(), updatedAt: new Date()}, // 40 --HighRoad [39,41]



      { coord_x: 1507, coord_y: 546, createdAt: new Date(), updatedAt: new Date()}, // 41 --TriboarTrail (from HighRoad intersection to Triboar) [35,42]
      { coord_x: 1539, coord_y: 519, createdAt: new Date(), updatedAt: new Date()}, // 42 --TriboarTrail [41,43]
      { coord_x: 1579, coord_y: 497, createdAt: new Date(), updatedAt: new Date()}, // 43 --TriboarTrail   [42,44]
      { coord_x: 1627, coord_y: 496, createdAt: new Date(), updatedAt: new Date()}, // 44 --TriboarTrail  [43,18]


  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Vertices', null, {});

  }
};
