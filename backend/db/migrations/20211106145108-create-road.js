'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Roads', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      location_id: {
        type: Sequelize.INTEGER,
        references: { model: "Locations" },
      },
      name: {
        type: Sequelize.STRING
      },
      name_font_size: {
        type: Sequelize.INTEGER
      },
      name_color: {
        type: Sequelize.STRING
      },
      name_stroke: {
        type: Sequelize.STRING
      },
      name_rotation: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      thumbnail: {
        type: Sequelize.STRING
      },
      show_on_map: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      discovered: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      start_vertex: {
        type: Sequelize.INTEGER,
        references: {model: "Vertices"},
        allowNull: true,
      },
      road_color: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      road_dash_length: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      road_dash_gap: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      min_visible_scale: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      max_visible_scale: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },


    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Roads');
  }
};
