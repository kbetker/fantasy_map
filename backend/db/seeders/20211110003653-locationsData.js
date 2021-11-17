'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Locations', [


      {
        campaign_id: 1,
        name: "Sword Coast",
        show_on_map: true,
        vertex_id: 3,
        image_url: "https://kevinbetker.com/fantasy_map/Sword-Coast-Map_LowRes2.jpg",
        thumbnail_url: "https://kevinbetker.com/fantasy_map/mapLowRez.jpg",
        min_visible_scale: 25,
        max_visible_scale: 500,
        name_offset_x: -450,
        name_offset_y: -50,
        name_font_size_min: 30,
        name_font_size_max: 30,
        name_font_family: "Verdana",
        loc_vertex_size_min: 8,
        loc_vertex_size_max: 30,
        loc_vertex_stroke: 4,
        location_color: "white",
        location_stroke_color: "black",
        location_description: "Lorem Ipsum",
        createdAt: new Date(),
        updatedAt: new Date()
      }, //1

      {
        campaign_id: 1,
        name: "Fireshear",
        show_on_map: true,
        vertex_id: 1,
        image_url: "http://www.homestarrunner.com",
        thumbnail_url: null,
        min_visible_scale: 25,
        max_visible_scale: 500,
        name_offset_x: -450,
        name_offset_y: -50,
        name_font_size_min: 30,
        name_font_size_max: 30,
        name_font_family: "Verdana",
        loc_vertex_size_min: 8,
        loc_vertex_size_max: 30,
        loc_vertex_stroke: 4,
        location_color: "white",
        location_stroke_color: "black",
        location_description: "Lorem Ipsum",
        createdAt: new Date(),
        updatedAt: new Date()
      }, //2

      {
        campaign_id: 1,
        name: "Luskan",
        show_on_map: true,
        vertex_id: 6,
        image_url: "http://www.homestarrunner.com",
        thumbnail_url: null,
        min_visible_scale: 25,
        max_visible_scale: 500,
        name_offset_x: -450,
        name_offset_y: -50,
        name_font_size_min: 30,
        name_font_size_max: 30,
        name_font_family: "Verdana",
        loc_vertex_size_min: 8,
        loc_vertex_size_max: 30,
        loc_vertex_stroke: 4,
        location_color: "white",
        location_stroke_color: "black",
        location_description: "Lorem Ipsum",
        createdAt: new Date(),
        updatedAt: new Date()
      }, //3

      {
        campaign_id: 1,
        name: "Mirabar",
        show_on_map: true,
        vertex_id: 10,
        image_url: "http://www.homestarrunner.com",
        thumbnail_url: null,
        min_visible_scale: 25,
        max_visible_scale: 500,
        name_offset_x: -450,
        name_offset_y: -50,
        name_font_size_min: 30,
        name_font_size_max: 30,
        name_font_family: "Verdana",
        loc_vertex_size_min: 8,
        loc_vertex_size_max: 30,
        loc_vertex_stroke: 4,
        location_color: "white",
        location_stroke_color: "black",
        location_description: "Lorem Ipsum",
        createdAt: new Date(),
        updatedAt: new Date()
      }, //4

      {
        campaign_id: 1,
        name: "LongSaddle",
        show_on_map: true,
        vertex_id: 15,
        image_url: "http://www.homestarrunner.com",
        thumbnail_url: null,
        min_visible_scale: 25,
        max_visible_scale: 500,
        name_offset_x: -450,
        name_offset_y: -50,
        name_font_size_min: 30,
        name_font_size_max: 30,
        name_font_family: "Verdana",
        loc_vertex_size_min: 8,
        loc_vertex_size_max: 30,
        loc_vertex_stroke: 4,
        location_color: "white",
        location_stroke_color: "black",
        location_description: "Lorem Ipsum",
        createdAt: new Date(),
        updatedAt: new Date()
      }, //5

      {
        campaign_id: 1,
        name: "Triboar",
        show_on_map: true,
        vertex_id: 18,
        image_url: "http://www.homestarrunner.com",
        thumbnail_url: null,
        min_visible_scale: 25,
        max_visible_scale: 500,
        name_offset_x: -450,
        name_offset_y: -50,
        name_font_size_min: 30,
        name_font_size_max: 30,
        name_font_family: "Verdana",
        loc_vertex_size_min: 8,
        loc_vertex_size_max: 30,
        loc_vertex_stroke: 4,
        location_color: "white",
        location_stroke_color: "black",
        location_description: "Lorem Ipsum",
        createdAt: new Date(),
        updatedAt: new Date()
      }, //6

      {
        campaign_id: 1,
        name: "WaterDeep",
        show_on_map: true,
        vertex_id: 25,
        image_url: "http://www.homestarrunner.com",
        thumbnail_url: null,
        min_visible_scale: 25,
        max_visible_scale: 500,
        name_offset_x: -450,
        name_offset_y: -50,
        name_font_size_min: 30,
        name_font_size_max: 30,
        name_font_family: "Verdana",
        loc_vertex_size_min: 8,
        loc_vertex_size_max: 30,
        loc_vertex_stroke: 4,
        location_color: "white",
        location_stroke_color: "black",
        location_description: "Lorem Ipsum",
        createdAt: new Date(),
        updatedAt: new Date()
      }, //7

      {
        campaign_id: 1,
        name: "Daggerford",
        show_on_map: true,
        vertex_id: 28,
        image_url: "http://www.homestarrunner.com",
        thumbnail_url: null,
        min_visible_scale: 25,
        max_visible_scale: 500,
        name_offset_x: -450,
        name_offset_y: -50,
        name_font_size_min: 30,
        name_font_size_max: 30,
        name_font_family: "Verdana",
        loc_vertex_size_min: 8,
        loc_vertex_size_max: 30,
        loc_vertex_stroke: 4,
        location_color: "white",
        location_stroke_color: "black",
        location_description: "Lorem Ipsum",
        createdAt: new Date(),
        updatedAt: new Date()
      }, //8

      {
        campaign_id: 1,
        name: "NeverWinter",
        show_on_map: true,
        vertex_id: 32,
        image_url: "http://www.homestarrunner.com",
        thumbnail_url: null,
        min_visible_scale: 25,
        max_visible_scale: 500,
        name_offset_x: -450,
        name_offset_y: -50,
        name_font_size_min: 30,
        name_font_size_max: 30,
        name_font_family: "Verdana",
        loc_vertex_size_min: 8,
        loc_vertex_size_max: 30,
        loc_vertex_stroke: 4,
        location_color: "white",
        location_stroke_color: "black",
        location_description: "Lorem Ipsum",
        createdAt: new Date(),
        updatedAt: new Date()
      }, //9

      {
        campaign_id: 1,
        name: "Helm's Hold",
        show_on_map: true,
        vertex_id: 34,
        image_url: "http://www.homestarrunner.com",
        thumbnail_url: null,
        min_visible_scale: 25,
        max_visible_scale: 500,
        name_offset_x: -450,
        name_offset_y: -50,
        name_font_size_min: 30,
        name_font_size_max: 30,
        name_font_family: "Verdana",
        loc_vertex_size_min: 8,
        loc_vertex_size_max: 30,
        loc_vertex_stroke: 4,
        location_color: "white",
        location_stroke_color: "black",
        location_description: "Lorem Ipsum",
        createdAt: new Date(),
        updatedAt: new Date()
      }, //10




    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Locations', null, {});

  }
};
