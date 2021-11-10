'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Roads', [

      { location_id: 1, name: "High Roads", createdAt: new Date(), updatedAt: new Date()},
      { location_id: 1, name: "Triboar Trail", createdAt: new Date(), updatedAt: new Date()},


  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Roads', null, {});

  }
};
