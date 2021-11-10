'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Campaigns', [
      {name: 'LMoP', owner_id: 1},
      {name: 'SKT', owner_id: 1},
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Campaigns', null, {});
  }
};
