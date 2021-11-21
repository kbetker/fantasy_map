'use strict';
module.exports = (sequelize, DataTypes) => {
  const Road = sequelize.define('Road', {
    location_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    name_font_size: DataTypes.INTEGER,
    name_color: DataTypes.STRING,
    name_stroke: DataTypes.STRING,
    name_rotation: DataTypes.INTEGER,
    description:DataTypes.STRING,
    thumbnail: DataTypes.STRING,
    show_on_map: DataTypes.BOOLEAN,
    discovered: DataTypes.BOOLEAN,
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

    Road.belongsTo(models.Vertex, { foreignKey: "start_vertex" });
    Road.belongsTo(models.Location, { foreignKey: "location_id"})

  };
  return Road;
};
