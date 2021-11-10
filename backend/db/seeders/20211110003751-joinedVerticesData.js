'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Joined_Vertices', [

      { road_id: 1,  vertex_id: 1, createdAt: new Date(), updatedAt: new Date()},
      { road_id: 1,  vertex_id: 2, createdAt: new Date(), updatedAt: new Date()},
      { road_id: 1,  vertex_id: 3, createdAt: new Date(), updatedAt: new Date()},
      { road_id: 2,  vertex_id: 4, createdAt: new Date(), updatedAt: new Date()},
      { road_id: 2,  vertex_id: 5, createdAt: new Date(), updatedAt: new Date()},
      { road_id: 2,  vertex_id: 6, createdAt: new Date(), updatedAt: new Date()},



  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Joined_Vertices', null, {});

  }
};
