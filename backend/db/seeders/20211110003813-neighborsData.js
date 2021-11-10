'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Neighbors', [
      { prev_vertex_id: 1, next_vertex_id: 2, distance: 100},
      { prev_vertex_id: 2, next_vertex_id: 3, distance: 100},
      { prev_vertex_id: 3, next_vertex_id: 4, distance: 100},
      { prev_vertex_id: 4, next_vertex_id: 5, distance: 100},
      { prev_vertex_id: 5, next_vertex_id: 6, distance: 100},
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Campaigns', null, {});

  }
};
