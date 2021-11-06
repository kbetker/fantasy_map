'use strict';
module.exports = (sequelize, DataTypes) => {
  const Joined_Vertex = sequelize.define('Joined_Vertex', {
    road_id: DataTypes.INTEGER,
    vertex_id: DataTypes.INTEGER
  }, {});
  Joined_Vertex.associate = function(models) {
    // associations can be defined here
  };
  return Joined_Vertex;
};