'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vertex = sequelize.define('Vertex', {
    coord_x: DataTypes.INTEGER,
    coord_y: DataTypes.INTEGER
  }, {});
  Vertex.associate = function(models) {

    const columnMappingOne = {
      through: 'Joined_Vertex',
      foreignKey: 'vertex_id',  vertex_id,
      otherKey: 'road_id',
      as: 'theVertex'
    }
    Road.hasManyMany(models.Vertex, columnMappingOne);


    const neighborMapOne = {
      through: 'Neighbors',
      otherKey: 'child_vertex_id',
      foreignKey: 'parent_vertex_id',
      as: 'parent'
    }
    const neighborMapTwo = {
      through: 'Neighbors',
      otherKey: 'parent_vertex_id',
      foreignKey: 'child_vertex_id',
      as: 'child'
    }

    Location.belongsToMany(models.Location, neighborMapOne);
    Location.belongsToMany(models.Location, neighborMapTwo);


    Vertex.hasOne(models.Location, { foreignKey: "vertex_id" });
  };
  return Vertex;
};
