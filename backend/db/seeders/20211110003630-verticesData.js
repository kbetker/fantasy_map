'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Vertices', [

      { coord_x: 20, coord_y: 20, createdAt: new Date(), updatedAt: new Date()}, //1
      { coord_x: 40, coord_y: 40, createdAt: new Date(), updatedAt: new Date()}, //2
      { coord_x: 20, coord_y: 60, createdAt: new Date(), updatedAt: new Date()}, //3
      { coord_x: 10, coord_y: 70, createdAt: new Date(), updatedAt: new Date()}, //4
      { coord_x: 40, coord_y: 80, createdAt: new Date(), updatedAt: new Date()}, //5
      { coord_x: 60, coord_y: 100, createdAt: new Date(), updatedAt: new Date()}, //6


  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Vertices', null, {});

  }
};
