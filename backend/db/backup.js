'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Locations', [
      {
         "id": 1,
         "campaign_id": 1,
         "name": "Sword Coast",
         "show_on_map": true,
         "vertex_id": 3,
         "image_url": "https://kevinbetker.com/fantasy_map/swordCoastNoName_lowrez.jpg",
         "thumbnail_url": "https://kevinbetker.com/fantasy_map/mapLowRez.jpg",
         "min_visible_scale": 25,
         "max_visible_scale": 500,
         "name_offset_x": -450,
         "name_offset_y": -50,
         "name_font_size_min": 30,
         "name_font_size_max": 30,
         "name_font_family": "Verdana",
         "loc_vertex_size_min": 8,
         "loc_vertex_size_max": 30,
         "loc_vertex_stroke": 4,
         "location_color": "white",
         "location_stroke_color": "black",
         "location_description": "The Sword Coast, not to be confused with the Sword Coast North, was the region in western Faerûn that lay along the coast of the Sea of Swords and extended inward into the vale. It was bordered by the Delimbiyr Vale in the North, and to the south by the merchant nation of Amn.\r\n\r\nSome say the Sword Coast took its name from the white cliffs that rose up sharply for hundreds of miles along the coastline between the River Dessarin and Baldur's Gate. Traveling author Volothamp Geddarm attributed the region's name to its dangerous inhabitants, both humanoid and bestial.",
         "createdAt": "2021-08-22 00:00:00",
         "updateAt": "2021-08-22 00:00:00"
      },
      {
         "id": 9,
         "campaign_id": 1,
         "name": "NeverWinter",
         "show_on_map": true,
         "vertex_id": 32,
         "image_url": "https://kevinbetker.com/fantasy_map/Neverwinter_Map.jpg",
         "thumbnail_url": "https://kevinbetker.com/fantasy_map/neverThumb.jpg",
         "min_visible_scale": 25,
         "max_visible_scale": 500,
         "name_offset_x": -170,
         "name_offset_y": -25,
         "name_font_size_min": 30,
         "name_font_size_max": 30,
         "name_font_family": "Verdana",
         "loc_vertex_size_min": 8,
         "loc_vertex_size_max": 30,
         "loc_vertex_stroke": 4,
         "location_color": "white",
         "location_stroke_color": "black",
         "location_description": "Neverwinter, also known as the City of Skilled Hands and the Jewel of the North, was a bustling, cultured, and cosmopolitan city-state in northwest Faerûn. Neverwinter was regarded by Volo as the most cosmopolitan and civilized city in all of Faerûn. The city was a member in good standing of the Lords' Alliance. Known for its craftsfolk and gardeners, the city's multi-colored-glass lamps, precision water clocks, exquisite jewelry, and magnificent gardens ensured the warm winters were colorful and the summers were rich with fresh fruit.",
         "createdAt": "2021-08-22 00:00:00",
         "updateAt": "2021-08-22 00:00:00"
      },
      {
         "id": 2,
         "campaign_id": 1,
         "name": "Fireshear",
         "show_on_map": true,
         "vertex_id": 1,
         "image_url": "https://kevinbetker.com/fantasy_map/swordCoastHD_noNames.jpg",
         "thumbnail_url": null,
         "min_visible_scale": 45,
         "max_visible_scale": 500,
         "name_offset_x": -90,
         "name_offset_y": -15,
         "name_font_size_min": 30,
         "name_font_size_max": 20,
         "name_font_family": "Verdana",
         "loc_vertex_size_min": 8,
         "loc_vertex_size_max": 30,
         "loc_vertex_stroke": 4,
         "location_color": "white",
         "location_stroke_color": "black",
         "location_description": "Lorem Ipsum",
         "createdAt": "2021-08-22 00:00:00",
         "updateAt": "2021-08-22 00:00:00"
      },
      {
         "id": 3,
         "campaign_id": 1,
         "name": "Luskan",
         "show_on_map": true,
         "vertex_id": 6,
         "image_url": "http://www.homestarrunner.com",
         "thumbnail_url": null,
         "min_visible_scale": 25,
         "max_visible_scale": 500,
         "name_offset_x": -100,
         "name_offset_y": -15,
         "name_font_size_min": 30,
         "name_font_size_max": 30,
         "name_font_family": "Verdana",
         "loc_vertex_size_min": 8,
         "loc_vertex_size_max": 30,
         "loc_vertex_stroke": 4,
         "location_color": "white",
         "location_stroke_color": "black",
         "location_description": "Lorem Ipsum",
         "createdAt": "2021-08-22 00:00:00",
         "updateAt": "2021-08-22 00:00:00"
      },
      {
         "id": 4,
         "campaign_id": 1,
         "name": "Mirabar",
         "show_on_map": true,
         "vertex_id": 10,
         "image_url": "http://www.homestarrunner.com",
         "thumbnail_url": null,
         "min_visible_scale": 25,
         "max_visible_scale": 500,
         "name_offset_x": -90,
         "name_offset_y": -15,
         "name_font_size_min": 30,
         "name_font_size_max": 24,
         "name_font_family": "Verdana",
         "loc_vertex_size_min": 8,
         "loc_vertex_size_max": 30,
         "loc_vertex_stroke": 4,
         "location_color": "white",
         "location_stroke_color": "black",
         "location_description": "Lorem Ipsum",
         "createdAt": "2021-08-22 00:00:00",
         "updateAt": "2021-08-22 00:00:00"
      },
      {
         "id": 5,
         "campaign_id": 1,
         "name": "LongSaddle",
         "show_on_map": true,
         "vertex_id": 15,
         "image_url": "http://www.homestarrunner.com",
         "thumbnail_url": null,
         "min_visible_scale": 45,
         "max_visible_scale": 500,
         "name_offset_x": 15,
         "name_offset_y": -5,
         "name_font_size_min": 30,
         "name_font_size_max": 20,
         "name_font_family": "Verdana",
         "loc_vertex_size_min": 8,
         "loc_vertex_size_max": 30,
         "loc_vertex_stroke": 4,
         "location_color": "white",
         "location_stroke_color": "black",
         "location_description": "Lorem Ipsum",
         "createdAt": "2021-08-22 00:00:00",
         "updateAt": "2021-08-22 00:00:00"
      },
      {
         "id": 6,
         "campaign_id": 1,
         "name": "Triboar",
         "show_on_map": true,
         "vertex_id": 18,
         "image_url": "http://www.homestarrunner.com",
         "thumbnail_url": null,
         "min_visible_scale": 45,
         "max_visible_scale": 500,
         "name_offset_x": 10,
         "name_offset_y": -15,
         "name_font_size_min": 30,
         "name_font_size_max": 20,
         "name_font_family": "Verdana",
         "loc_vertex_size_min": 8,
         "loc_vertex_size_max": 30,
         "loc_vertex_stroke": 4,
         "location_color": "white",
         "location_stroke_color": "black",
         "location_description": "Lorem Ipsum",
         "createdAt": "2021-08-22 00:00:00",
         "updateAt": "2021-08-22 00:00:00"
      },
      {
         "id": 7,
         "campaign_id": 1,
         "name": "WaterDeep",
         "show_on_map": true,
         "vertex_id": 25,
         "image_url": "http://www.homestarrunner.com",
         "thumbnail_url": null,
         "min_visible_scale": 25,
         "max_visible_scale": 500,
         "name_offset_x": -170,
         "name_offset_y": -25,
         "name_font_size_min": 30,
         "name_font_size_max": 35,
         "name_font_family": "Verdana",
         "loc_vertex_size_min": 8,
         "loc_vertex_size_max": 30,
         "loc_vertex_stroke": 4,
         "location_color": "white",
         "location_stroke_color": "black",
         "location_description": "Lorem Ipsum",
         "createdAt": "2021-08-22 00:00:00",
         "updateAt": "2021-08-22 00:00:00"
      },
      {
         "id": 8,
         "campaign_id": 1,
         "name": "Daggerford",
         "show_on_map": true,
         "vertex_id": 28,
         "image_url": "http://www.homestarrunner.com",
         "thumbnail_url": null,
         "min_visible_scale": 25,
         "max_visible_scale": 500,
         "name_offset_x": -130,
         "name_offset_y": -15,
         "name_font_size_min": 30,
         "name_font_size_max": 25,
         "name_font_family": "Verdana",
         "loc_vertex_size_min": 8,
         "loc_vertex_size_max": 30,
         "loc_vertex_stroke": 4,
         "location_color": "white",
         "location_stroke_color": "black",
         "location_description": "Lorem Ipsum",
         "createdAt": "2021-08-22 00:00:00",
         "updateAt": "2021-08-22 00:00:00"
      },
      {
         "id": 10,
         "campaign_id": 1,
         "name": "Helm's Hold",
         "show_on_map": true,
         "vertex_id": 34,
         "image_url": "http://www.homestarrunner.com",
         "thumbnail_url": null,
         "min_visible_scale": 45,
         "max_visible_scale": 500,
         "name_offset_x": -130,
         "name_offset_y": -5,
         "name_font_size_min": 30,
         "name_font_size_max": 24,
         "name_font_family": "Verdana",
         "loc_vertex_size_min": 8,
         "loc_vertex_size_max": 30,
         "loc_vertex_stroke": 4,
         "location_color": "white",
         "location_stroke_color": "black",
         "location_description": "Lorem Ipsum",
         "createdAt": "2021-08-22 00:00:00",
         "updateAt": "2021-08-22 00:00:00"
      },
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Locations', null, {});

  }
};