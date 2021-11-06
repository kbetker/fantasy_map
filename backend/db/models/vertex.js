'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vertex = sequelize.define('Vertex', {
    coord_x: DataTypes.INTEGER,
    coord_y: DataTypes.INTEGER
  }, {});
  Vertex.associate = function(models) {
    // associations can be defined here
  };
  return Vertex;
};