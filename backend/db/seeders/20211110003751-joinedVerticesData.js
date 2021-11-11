'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Joined_Vertices', [

      { road_id: 1,  vertex_id: 1, createdAt: new Date(), updatedAt: new Date()}, // FireshearRoad
      { road_id: 1,  vertex_id: 2, createdAt: new Date(), updatedAt: new Date()},
      { road_id: 1,  vertex_id: 3, createdAt: new Date(), updatedAt: new Date()},
      { road_id: 1,  vertex_id: 4, createdAt: new Date(), updatedAt: new Date()},
      { road_id: 1,  vertex_id: 5, createdAt: new Date(), updatedAt: new Date()},
      { road_id: 1,  vertex_id: 6, createdAt: new Date(), updatedAt: new Date()},

      { road_id: 2,  vertex_id: 6, createdAt: new Date(), updatedAt: new Date()}, //Blackford Road",
      { road_id: 2,  vertex_id: 7, createdAt: new Date(), updatedAt: new Date()},
      { road_id: 2,  vertex_id: 8, createdAt: new Date(), updatedAt: new Date()},
      { road_id: 2,  vertex_id: 9, createdAt: new Date(), updatedAt: new Date()},
      { road_id: 2,  vertex_id: 10, createdAt: new Date(), updatedAt: new Date()},

      { road_id: 3,  vertex_id: 6, createdAt: new Date(), updatedAt: new Date()}, // "High Road"
      { road_id: 3,  vertex_id: 25, createdAt: new Date(), updatedAt: new Date()},
      { road_id: 3,  vertex_id: 26, createdAt: new Date(), updatedAt: new Date()},
      { road_id: 3,  vertex_id: 27, createdAt: new Date(), updatedAt: new Date()},
      { road_id: 3,  vertex_id: 28, createdAt: new Date(), updatedAt: new Date()},
      { road_id: 3,  vertex_id: 29, createdAt: new Date(), updatedAt: new Date()},
      { road_id: 3,  vertex_id: 30, createdAt: new Date(), updatedAt: new Date()},
      { road_id: 3,  vertex_id: 31, createdAt: new Date(), updatedAt: new Date()},
      { road_id: 3,  vertex_id: 32, createdAt: new Date(), updatedAt: new Date()},
      { road_id: 3,  vertex_id: 33, createdAt: new Date(), updatedAt: new Date()},
      { road_id: 3,  vertex_id: 34, createdAt: new Date(), updatedAt: new Date()},
      { road_id: 3,  vertex_id: 35, createdAt: new Date(), updatedAt: new Date()},
      { road_id: 3,  vertex_id: 36, createdAt: new Date(), updatedAt: new Date()},
      { road_id: 3,  vertex_id: 37, createdAt: new Date(), updatedAt: new Date()},
      { road_id: 3,  vertex_id: 38, createdAt: new Date(), updatedAt: new Date()},
      { road_id: 3,  vertex_id: 39, createdAt: new Date(), updatedAt: new Date()},
      { road_id: 3,  vertex_id: 40, createdAt: new Date(), updatedAt: new Date()},
      { road_id: 3,  vertex_id: 41, createdAt: new Date(), updatedAt: new Date()},

      { road_id: 4,  vertex_id: 10, createdAt: new Date(), updatedAt: new Date()}, // "Long Road"
      { road_id: 4,  vertex_id: 11, createdAt: new Date(), updatedAt: new Date()},
      { road_id: 4,  vertex_id: 12, createdAt: new Date(), updatedAt: new Date()},
      { road_id: 4,  vertex_id: 13, createdAt: new Date(), updatedAt: new Date()},
      { road_id: 4,  vertex_id: 14, createdAt: new Date(), updatedAt: new Date()},
      { road_id: 4,  vertex_id: 15, createdAt: new Date(), updatedAt: new Date()},
      { road_id: 4,  vertex_id: 16, createdAt: new Date(), updatedAt: new Date()},
      { road_id: 4,  vertex_id: 17, createdAt: new Date(), updatedAt: new Date()},
      { road_id: 4,  vertex_id: 18, createdAt: new Date(), updatedAt: new Date()},
      { road_id: 4,  vertex_id: 19, createdAt: new Date(), updatedAt: new Date()},
      { road_id: 4,  vertex_id: 20, createdAt: new Date(), updatedAt: new Date()},
      { road_id: 4,  vertex_id: 21, createdAt: new Date(), updatedAt: new Date()},
      { road_id: 4,  vertex_id: 22, createdAt: new Date(), updatedAt: new Date()},
      { road_id: 4,  vertex_id: 23, createdAt: new Date(), updatedAt: new Date()},
      { road_id: 4,  vertex_id: 24, createdAt: new Date(), updatedAt: new Date()},
      { road_id: 4,  vertex_id: 25, createdAt: new Date(), updatedAt: new Date()},


      { road_id: 5,  vertex_id: 18, createdAt: new Date(), updatedAt: new Date()}, //"Triboar Trail"
      { road_id: 5,  vertex_id: 35, createdAt: new Date(), updatedAt: new Date()},
      { road_id: 5,  vertex_id: 41, createdAt: new Date(), updatedAt: new Date()},
      { road_id: 5,  vertex_id: 42, createdAt: new Date(), updatedAt: new Date()},
      { road_id: 5,  vertex_id: 43, createdAt: new Date(), updatedAt: new Date()},
      { road_id: 5,  vertex_id: 44, createdAt: new Date(), updatedAt: new Date()},




  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Joined_Vertices', null, {});

  }
};
