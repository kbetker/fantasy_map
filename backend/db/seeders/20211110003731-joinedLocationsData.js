'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Joined_Locations', [

      { parent_location_id: 1,  child_location_id: 2, createdAt: new Date(), updatedAt: new Date()},
      { parent_location_id: 1,  child_location_id: 3, createdAt: new Date(), updatedAt: new Date()},


  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Joined_Locations', null, {});

  }
};
