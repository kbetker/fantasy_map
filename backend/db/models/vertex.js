'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vertex = sequelize.define('Vertex', {
    coord_x: DataTypes.INTEGER,
    coord_y: DataTypes.INTEGER
  }, {});
  Vertex.associate = function(models) {

    const columnMappingOne = {
      through: 'Joined_Vertex',
      foreignKey: 'vertex_id',
      otherKey: 'road_id',
      as: 'theVertex'
    }
    Vertex.belongsToMany(models.Vertex, columnMappingOne);


    const neighborMapOne = {
      through: 'Neighbors',
      otherKey: 'next_vertex_id',
      foreignKey: 'prev_vertex_id',
      as: 'prev'
    }
    const neighborMapTwo = {
      through: 'Neighbors',
      otherKey: 'prev_vertex_id',
      foreignKey: 'next_vertex_id',
      as: 'next'
    }

    Vertex.belongsToMany(models.Vertex, neighborMapOne);
    Vertex.belongsToMany(models.Vertex, neighborMapTwo);


    Vertex.hasOne(models.Location, { foreignKey: "vertex_id" });
  };
  return Vertex;
};
