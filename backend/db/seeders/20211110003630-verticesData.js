'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Vertices', [

      { coord_x: 20, coord_y: 20}, //1
      { coord_x: 40, coord_y: 40}, //2
      { coord_x: 20, coord_y: 60}, //3
      { coord_x: 10, coord_y: 70}, //4
      { coord_x: 40, coord_y: 80}, //5
      { coord_x: 60, coord_y: 100}, //6


  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Vertices', null, {});

  }
};
