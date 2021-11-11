'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Locations', [

      { campaign_id: 1, name: "Sword Coast", show_on_map: true, vertex_id: 3, image_url: "http://www.homestarrunner.com", createdAt: new Date(), updatedAt: new Date() }, //1

      { campaign_id: 1,
        name: "Sword Coast",
        show_on_map: true,
        vertex_id: null,
        image_url: "http://www.homestarrunner.com",
        createdAt: new Date(), updatedAt: new Date()
      }, //1

      { campaign_id: 1,
        name: "Fireshear",
        show_on_map: true,
        vertex_id: 1,
        image_url: "http://www.homestarrunner.com",
        createdAt: new Date(), updatedAt: new Date()
      }, //2

      { campaign_id: 1,
        name: "Luskan",
        show_on_map: true,
        vertex_id: 6,
        image_url: "http://www.homestarrunner.com",
        createdAt: new Date(), updatedAt: new Date()
      }, //3

      { campaign_id: 1,
        name: "Mirabar",
        show_on_map: true,
        vertex_id: 10,
        image_url: "http://www.homestarrunner.com",
        createdAt: new Date(), updatedAt: new Date()
      }, //4

      { campaign_id: 1,
        name: "LongSaddle",
        show_on_map: true,
        vertex_id: 15,
        image_url: "http://www.homestarrunner.com",
        createdAt: new Date(), updatedAt: new Date()
      }, //5

      { campaign_id: 1,
        name: "Triboar",
        show_on_map: true,
        vertex_id: 18,
        image_url: "http://www.homestarrunner.com",
        createdAt: new Date(), updatedAt: new Date()
      }, //6

      { campaign_id: 1,
        name: "WaterDeep",
        show_on_map: true,
        vertex_id: 25,
        image_url: "http://www.homestarrunner.com",
        createdAt: new Date(), updatedAt: new Date()
      }, //7

      { campaign_id: 1,
        name: "Daggerford",
        show_on_map: true,
        vertex_id: 28,
        image_url: "http://www.homestarrunner.com",
        createdAt: new Date(), updatedAt: new Date()
      }, //8

      { campaign_id: 1,
        name: "NeverWinter",
        show_on_map: true,
        vertex_id: 32,
        image_url: "http://www.homestarrunner.com",
        createdAt: new Date(), updatedAt: new Date()
      }, //9

      { campaign_id: 1,
        name: "Helm's Hold",
        show_on_map: true,
        vertex_id: 34,
        image_url: "http://www.homestarrunner.com",
        createdAt: new Date(), updatedAt: new Date()
      }, //10




  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Locations', null, {});

  }
};
