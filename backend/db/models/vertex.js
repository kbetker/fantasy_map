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
      otherKey: 'curr_vertex_id',
      foreignKey: 'neighbor_vertex_id',
      distance: 'distance',
      as: 'curr'
    }
    const neighborMapTwo = {
      through: 'Neighbors',
      otherKey: 'neighbor_vertex_id',
      foreignKey: 'curr_vertex_id',
      distance: 'distance',
      as: 'neighbors'
    }

    Vertex.belongsToMany(models.Vertex, neighborMapOne);
    Vertex.belongsToMany(models.Vertex, neighborMapTwo);


    Vertex.hasOne(models.Location, { foreignKey: "vertex_id" });
    Vertex.hasOne(models.Road, { foreignKey: "start_vertex" });

  };
  return Vertex;
};
