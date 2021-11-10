'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Joined_Vertices', [

      { raods_id: 1,  vertices_id: 1},
      { raods_id: 1,  vertices_id: 2},
      { raods_id: 1,  vertices_id: 3},
      { raods_id: 2,  vertices_id: 4},
      { raods_id: 2,  vertices_id: 5},
      { raods_id: 2,  vertices_id: 6},



  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Joined_Vertices', null, {});

  }
};
