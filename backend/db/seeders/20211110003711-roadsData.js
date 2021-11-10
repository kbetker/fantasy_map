'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Roads', [

      { location_id: 1, name: "High Roads"},
      { location_id: 1, name: "Triboar Trail"},


  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Roads', null, {});

  }
};
