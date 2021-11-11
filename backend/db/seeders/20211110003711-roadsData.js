'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Roads', [

      {
        location_id: 1,
        name: "FireshearRoad",
        createdAt: new Date(),
        updatedAt: new Date()
      }, //1


      {
        location_id: 1,
        name: "Blackford Road",
        createdAt: new Date(),
        updatedAt: new Date()
      }, //2


      {
        location_id: 1,
        name: "High Road",
        createdAt: new Date(),
        updatedAt: new Date()
      }, //3


      {
        location_id: 1,
        name: "Long Road",
        createdAt: new Date(),
        updatedAt: new Date()
      }, //4


      {
        location_id: 1,
        name: "Triboar Trail",
        createdAt: new Date(),
        updatedAt: new Date()
      }, //5


    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Roads', null, {});

  }
};
