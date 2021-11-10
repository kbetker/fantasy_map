'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Locations', [

      { campaign_id: 1, name: "Sword Coast", show_on_map: true, vertex_id: 3, image_url: "http://www.homestarrunner.com", createdAt: new Date(), updatedAt: new Date() }, //1
      { campaign_id: 1, name: "Neverwinter", show_on_map: true, vertex_id: 2, image_url: "http://www.homestarrunner.com", createdAt: new Date(), updatedAt: new Date() }, //2
      { campaign_id: 1, name: "Blackrun", show_on_map: true, vertex_id: 1, image_url: "http://www.homestarrunner.com", createdAt: new Date(), updatedAt: new Date() }, //3

  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Locations', null, {});

  }
};
