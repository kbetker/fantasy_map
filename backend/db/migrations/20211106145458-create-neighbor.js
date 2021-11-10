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
      prev_vertex_id: {
        type: Sequelize.INTEGER,
        references: {model: "Vertices"},

      },
      next_vertex_id: {
        type: Sequelize.INTEGER,
        references: {model: "Vertices"},

      },
      distance: {
        type: Sequelize.INTEGER,
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
