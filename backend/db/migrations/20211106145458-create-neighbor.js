'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Neighbors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      curr_vertex_id: {
        type: Sequelize.INTEGER,
        references: {model: "Vertices"},

      },
      neighbor_vertex_id: {
        type: Sequelize.INTEGER,
        references: {model: "Vertices"},

      },
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
    return queryInterface.dropTable('Neighbors');
  }
};
