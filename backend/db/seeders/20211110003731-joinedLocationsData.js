'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Joined_Locations', [

      { parent_location_id: 1,  child_location_id: 2},
      { parent_location_id: 1,  child_location_id: 3},


  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Joined_Locations', null, {});

  }
};
