'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Joined_Vertices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      road_id: {
        type: Sequelize.INTEGER,
        references: {model: "Roads"},

      },
      vertex_id: {
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
    return queryInterface.dropTable('Joined_Vertices');
  }
};
