'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Neighbors', [
      { curr_vertex_id: 1, neighbor_vertex_id: 2, createdAt: new Date(), updatedAt: new Date()},

      { curr_vertex_id: 2, neighbor_vertex_id: 1, createdAt: new Date(), updatedAt: new Date()},
      { curr_vertex_id: 2, neighbor_vertex_id: 3, createdAt: new Date(), updatedAt: new Date()},

      { curr_vertex_id: 3, neighbor_vertex_id: 2, createdAt: new Date(), updatedAt: new Date()},
      { curr_vertex_id: 3, neighbor_vertex_id: 4, createdAt: new Date(), updatedAt: new Date()},

      { curr_vertex_id: 4, neighbor_vertex_id: 3, createdAt: new Date(), updatedAt: new Date()},
      { curr_vertex_id: 4, neighbor_vertex_id: 5, createdAt: new Date(), updatedAt: new Date()},

      { curr_vertex_id: 5, neighbor_vertex_id: 4, createdAt: new Date(), updatedAt: new Date()},
      { curr_vertex_id: 5, neighbor_vertex_id: 6, createdAt: new Date(), updatedAt: new Date()},

      { curr_vertex_id: 6, neighbor_vertex_id: 5, createdAt: new Date(), updatedAt: new Date()},
      { curr_vertex_id: 6, neighbor_vertex_id: 7, createdAt: new Date(), updatedAt: new Date()},
      { curr_vertex_id: 6, neighbor_vertex_id: 29, createdAt: new Date(), updatedAt: new Date()},

      { curr_vertex_id: 7, neighbor_vertex_id: 6, createdAt: new Date(), updatedAt: new Date()},
      { curr_vertex_id: 7, neighbor_vertex_id: 8, createdAt: new Date(), updatedAt: new Date()},

      { curr_vertex_id: 8, neighbor_vertex_id: 7, createdAt: new Date(), updatedAt: new Date()},
      { curr_vertex_id: 8, neighbor_vertex_id: 9, createdAt: new Date(), updatedAt: new Date()},

      { curr_vertex_id: 9, neighbor_vertex_id: 8, createdAt: new Date(), updatedAt: new Date()},
      { curr_vertex_id: 9, neighbor_vertex_id: 10, createdAt: new Date(), updatedAt: new Date()},

      { curr_vertex_id: 10, neighbor_vertex_id: 9, createdAt: new Date(), updatedAt: new Date()},
      { curr_vertex_id: 10, neighbor_vertex_id: 11, createdAt: new Date(), updatedAt: new Date()},

      { curr_vertex_id: 11, neighbor_vertex_id: 10, createdAt: new Date(), updatedAt: new Date()},
      { curr_vertex_id: 11, neighbor_vertex_id: 12, createdAt: new Date(), updatedAt: new Date()},

      { curr_vertex_id: 12, neighbor_vertex_id: 11, createdAt: new Date(), updatedAt: new Date()},
      { curr_vertex_id: 12, neighbor_vertex_id: 13, createdAt: new Date(), updatedAt: new Date()},

      { curr_vertex_id: 13, neighbor_vertex_id: 12, createdAt: new Date(), updatedAt: new Date()},
      { curr_vertex_id: 13, neighbor_vertex_id: 14, createdAt: new Date(), updatedAt: new Date()},

      { curr_vertex_id: 14, neighbor_vertex_id: 13, createdAt: new Date(), updatedAt: new Date()},
      { curr_vertex_id: 14, neighbor_vertex_id: 15, createdAt: new Date(), updatedAt: new Date()},

      { curr_vertex_id: 15, neighbor_vertex_id: 14, createdAt: new Date(), updatedAt: new Date()},
      { curr_vertex_id: 15, neighbor_vertex_id: 16, createdAt: new Date(), updatedAt: new Date()},

      { curr_vertex_id: 16, neighbor_vertex_id: 15, createdAt: new Date(), updatedAt: new Date()},
      { curr_vertex_id: 16, neighbor_vertex_id: 17, createdAt: new Date(), updatedAt: new Date()},

      { curr_vertex_id: 17, neighbor_vertex_id: 16, createdAt: new Date(), updatedAt: new Date()},
      { curr_vertex_id: 17, neighbor_vertex_id: 18, createdAt: new Date(), updatedAt: new Date()},

      { curr_vertex_id: 18, neighbor_vertex_id: 17, createdAt: new Date(), updatedAt: new Date()},
      { curr_vertex_id: 18, neighbor_vertex_id: 19, createdAt: new Date(), updatedAt: new Date()},
      { curr_vertex_id: 18, neighbor_vertex_id: 44, createdAt: new Date(), updatedAt: new Date()},

      { curr_vertex_id: 19, neighbor_vertex_id: 18, createdAt: new Date(), updatedAt: new Date()},
      { curr_vertex_id: 19, neighbor_vertex_id: 20, createdAt: new Date(), updatedAt: new Date()},

      { curr_vertex_id: 20, neighbor_vertex_id: 19, createdAt: new Date(), updatedAt: new Date()},
      { curr_vertex_id: 20, neighbor_vertex_id: 21, createdAt: new Date(), updatedAt: new Date()},

      { curr_vertex_id: 21, neighbor_vertex_id: 20, createdAt: new Date(), updatedAt: new Date()},
      { curr_vertex_id: 21, neighbor_vertex_id: 22, createdAt: new Date(), updatedAt: new Date()},

      { curr_vertex_id: 22, neighbor_vertex_id: 21, createdAt: new Date(), updatedAt: new Date()},
      { curr_vertex_id: 22, neighbor_vertex_id: 23, createdAt: new Date(), updatedAt: new Date()},

      { curr_vertex_id: 23, neighbor_vertex_id: 22, createdAt: new Date(), updatedAt: new Date()},
      { curr_vertex_id: 23, neighbor_vertex_id: 24, createdAt: new Date(), updatedAt: new Date()},

      { curr_vertex_id: 24, neighbor_vertex_id: 23, createdAt: new Date(), updatedAt: new Date()},
      { curr_vertex_id: 24, neighbor_vertex_id: 25, createdAt: new Date(), updatedAt: new Date()},

      { curr_vertex_id: 25, neighbor_vertex_id: 24, createdAt: new Date(), updatedAt: new Date()},
      { curr_vertex_id: 25, neighbor_vertex_id: 26, createdAt: new Date(), updatedAt: new Date()},
      { curr_vertex_id: 25, neighbor_vertex_id: 40, createdAt: new Date(), updatedAt: new Date()},

      { curr_vertex_id: 26, neighbor_vertex_id: 25, createdAt: new Date(), updatedAt: new Date()},
      { curr_vertex_id: 26, neighbor_vertex_id: 27, createdAt: new Date(), updatedAt: new Date()},

      { curr_vertex_id: 27, neighbor_vertex_id: 26, createdAt: new Date(), updatedAt: new Date()},
      { curr_vertex_id: 27, neighbor_vertex_id: 28, createdAt: new Date(), updatedAt: new Date()},

      { curr_vertex_id: 28, neighbor_vertex_id: 27, createdAt: new Date(), updatedAt: new Date()},

      { curr_vertex_id: 29, neighbor_vertex_id: 6, createdAt: new Date(), updatedAt: new Date()},
      { curr_vertex_id: 29, neighbor_vertex_id: 30, createdAt: new Date(), updatedAt: new Date()},

      { curr_vertex_id: 30, neighbor_vertex_id: 29, createdAt: new Date(), updatedAt: new Date()},
      { curr_vertex_id: 30, neighbor_vertex_id: 31, createdAt: new Date(), updatedAt: new Date()},

      { curr_vertex_id: 31, neighbor_vertex_id: 30, createdAt: new Date(), updatedAt: new Date()},
      { curr_vertex_id: 31, neighbor_vertex_id: 32, createdAt: new Date(), updatedAt: new Date()},

      { curr_vertex_id: 32, neighbor_vertex_id: 31, createdAt: new Date(), updatedAt: new Date()},
      { curr_vertex_id: 32, neighbor_vertex_id: 33, createdAt: new Date(), updatedAt: new Date()},

      { curr_vertex_id: 33, neighbor_vertex_id: 32, createdAt: new Date(), updatedAt: new Date()},
      { curr_vertex_id: 33, neighbor_vertex_id: 34, createdAt: new Date(), updatedAt: new Date()},

      { curr_vertex_id: 34, neighbor_vertex_id: 33, createdAt: new Date(), updatedAt: new Date()},
      { curr_vertex_id: 34, neighbor_vertex_id: 35, createdAt: new Date(), updatedAt: new Date()},

      { curr_vertex_id: 35, neighbor_vertex_id: 34, createdAt: new Date(), updatedAt: new Date()},
      { curr_vertex_id: 35, neighbor_vertex_id: 36, createdAt: new Date(), updatedAt: new Date()},
      { curr_vertex_id: 35, neighbor_vertex_id: 41, createdAt: new Date(), updatedAt: new Date()},

      { curr_vertex_id: 36, neighbor_vertex_id: 35, createdAt: new Date(), updatedAt: new Date()},
      { curr_vertex_id: 36, neighbor_vertex_id: 37, createdAt: new Date(), updatedAt: new Date()},

      { curr_vertex_id: 37, neighbor_vertex_id: 35, createdAt: new Date(), updatedAt: new Date()},
      { curr_vertex_id: 37, neighbor_vertex_id: 38, createdAt: new Date(), updatedAt: new Date()},

      { curr_vertex_id: 38, neighbor_vertex_id: 37, createdAt: new Date(), updatedAt: new Date()},
      { curr_vertex_id: 38, neighbor_vertex_id: 39, createdAt: new Date(), updatedAt: new Date()},

      { curr_vertex_id: 39, neighbor_vertex_id: 38, createdAt: new Date(), updatedAt: new Date()},
      { curr_vertex_id: 39, neighbor_vertex_id: 40, createdAt: new Date(), updatedAt: new Date()},

      { curr_vertex_id: 40, neighbor_vertex_id: 39, createdAt: new Date(), updatedAt: new Date()},
      { curr_vertex_id: 40, neighbor_vertex_id: 25, createdAt: new Date(), updatedAt: new Date()},

      { curr_vertex_id: 41, neighbor_vertex_id: 35, createdAt: new Date(), updatedAt: new Date()},
      { curr_vertex_id: 41, neighbor_vertex_id: 42, createdAt: new Date(), updatedAt: new Date()},

      { curr_vertex_id: 42, neighbor_vertex_id: 41, createdAt: new Date(), updatedAt: new Date()},
      { curr_vertex_id: 42, neighbor_vertex_id: 43, createdAt: new Date(), updatedAt: new Date()},

      { curr_vertex_id: 43, neighbor_vertex_id: 42, createdAt: new Date(), updatedAt: new Date()},
      { curr_vertex_id: 43, neighbor_vertex_id: 44, createdAt: new Date(), updatedAt: new Date()},

      { curr_vertex_id: 44, neighbor_vertex_id: 43, createdAt: new Date(), updatedAt: new Date()},
      { curr_vertex_id: 44, neighbor_vertex_id: 18, createdAt: new Date(), updatedAt: new Date()},

  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Campaigns', null, {});

  }
};
