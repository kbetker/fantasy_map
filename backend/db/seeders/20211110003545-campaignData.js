'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Campaigns', [
      {name: 'LMoP', owner_id: 1, createdAt: new Date(), updatedAt: new Date()},
      {name: 'SKT', owner_id: 1, createdAt: new Date(), updatedAt: new Date()},
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Campaigns', null, {});
  }
};
