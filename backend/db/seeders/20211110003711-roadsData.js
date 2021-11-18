'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Roads', [

      {
        location_id: 1,
        name: "FireshearRoad",
        show_on_map: true,
        start_vertex: 1,
        road_color: "red",
        road_dash_length: 2,
        road_dash_gap: 2,
        min_visible_scale: 25,
        max_visible_scale: 500,
        createdAt: new Date(),
        updatedAt: new Date()
      }, //1


      {
        location_id: 1,
        name: "Blackford Road",
        show_on_map: true,
        start_vertex: 1,
        road_color: "red",
        road_dash_length: 2,
        road_dash_gap: 2,
        min_visible_scale: 25,
        max_visible_scale: 500,
        createdAt: new Date(),
        updatedAt: new Date()
      }, //2


      {
        location_id: 1,
        name: "High Road",
        show_on_map: true,
        start_vertex: 1,
        road_color: "red",
        road_dash_length: 2,
        road_dash_gap: 2,
        min_visible_scale: 25,
        max_visible_scale: 500,
        createdAt: new Date(),
        updatedAt: new Date()
      }, //3


      {
        location_id: 1,
        name: "Long Road",
        show_on_map: true,
        start_vertex: 1,
        road_color: "red",
        road_dash_length: 2,
        road_dash_gap: 2,
        min_visible_scale: 25,
        max_visible_scale: 500,
        createdAt: new Date(),
        updatedAt: new Date()
      }, //4


      {
        location_id: 1,
        name: "Triboar Trail",
        show_on_map: true,
        start_vertex: 1,
        road_color: "red",
        road_dash_length: 2,
        road_dash_gap: 2,
        min_visible_scale: 25,
        max_visible_scale: 500,
        createdAt: new Date(),
        updatedAt: new Date()
      }, //5


    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Roads', null, {});

  }
};
