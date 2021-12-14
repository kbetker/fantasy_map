'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Locations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      campaign_id: {
        type: Sequelize.INTEGER,
        references: {model: "Campaigns"},
      },
      name: {
        type: Sequelize.STRING(50)
      },
      show_on_map: {
        type: Sequelize.BOOLEAN
      },
      discovered: {
        type: Sequelize.BOOLEAN
      },
      vertex_id: {
        type: Sequelize.INTEGER,
        references: {model: "Vertices"},
      },
      image_url: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      thumbnail_url:  {
        type: Sequelize.STRING,
        allowNull: true,
      },
      min_visible_scale:  {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      max_visible_scale:  {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      name_offset_x:  {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      name_offset_y:  {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      name_font_size_min:  {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      name_font_size:  {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      name_font_size_max:  {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      name_font_family:  {
        type: Sequelize.STRING,
        allowNull: true,
      },
      location_color:  {
        type: Sequelize.STRING,
        allowNull: true,
      },
      location_stroke_color:  {
        type: Sequelize.STRING,
        allowNull: true,
      },
      loc_vertex_size_min:  {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      loc_vertex_size:  {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      loc_vertex_size_max:  {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      loc_vertex_stroke:  {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      loc_vertex_color:  {
        type: Sequelize.STRING,
        allowNull: true,
      },
      loc_vertex_stroke_color:  {
        type: Sequelize.STRING,
        allowNull: true,
      },
      location_description:  {
        type: Sequelize.STRING(2000),
        allowNull: true,
      },
      map_scale_start_x:  {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      map_scale_start_y:  {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      map_scale_end_x:  {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      map_scale_end_y:  {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      map_scale_measurement:  {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      interface_scale_min:  {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      interface_scale_max:  {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      map_scale_measurement_name:  {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        default: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        default: new Date(),
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Locations');
  }
};
