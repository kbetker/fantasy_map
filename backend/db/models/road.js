'use strict';
module.exports = (sequelize, DataTypes) => {
  const Road = sequelize.define('Road', {
    location_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    show_on_map: DataTypes.BOOLEAN,
    start_vertex: DataTypes.INTEGER,
    road_color: DataTypes.STRING,
    road_dash_length: DataTypes.INTEGER,
    road_dash_gap: DataTypes.INTEGER,
    min_visible_scale: DataTypes.INTEGER,
    max_visible_scale: DataTypes.INTEGER,
  }, {});
  Road.associate = function(models) {


    const columnMappingOne = {
      through: 'Joined_Vertex',
      otherKey: 'vertex_id',
      foreignKey: 'road_id',
      as: 'road_vertices'
    }

    Road.belongsToMany(models.Vertex, columnMappingOne);

    Road.belongsTo(models.Location, { foreignKey: "location_id"})

  };
  return Road;
};
