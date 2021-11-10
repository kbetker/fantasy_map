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
      vertex_id: {
        type: Sequelize.INTEGER,
        references: {model: "Vertices"},

      },
      image_url: {
        type: Sequelize.STRING
      },
      // coord_x: {
      //   type: Sequelize.INTEGER
      // },
      // coord_y: {
      //   type: Sequelize.INTEGER
      // },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Locations');
  }
};
