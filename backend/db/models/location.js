'use strict';
module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    campaign_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    show_on_map: DataTypes.BOOLEAN,
    vertex_id: DataTypes.INTEGER,
    image_url: DataTypes.STRING,
    thumbnail_url: DataTypes.STRING,
    min_visible_scale: DataTypes.INTEGER,
    max_visible_scale: DataTypes.INTEGER,
    name_offset_x: DataTypes.INTEGER,
    name_offset_y: DataTypes.INTEGER,
    name_font_size_min: DataTypes.INTEGER,
    name_font_size_max: DataTypes.INTEGER,
    name_font_family: DataTypes.STRING,
    loc_vertex_size_min: DataTypes.INTEGER,
    loc_vertex_size_max: DataTypes.INTEGER,
    loc_vertex_stroke: DataTypes.INTEGER,
    location_color: DataTypes.STRING,
    location_stroke_color: DataTypes.STRING,
    location_description: DataTypes.STRING,
  }, {});
  Location.associate = function(models) {


    const columnMappingOne = {
      through: 'Joined_Locations',
      otherKey: 'parent_location_id',
      foreignKey: 'child_location_id',
      as: 'parent_locations'
    }
    const columnMappingTwo = {
      through: 'Joined_Locations',
      otherKey: 'child_location_id',
      foreignKey: 'parent_location_id',
      as: 'child_locations'
    }

    Location.belongsToMany(models.Location, columnMappingOne);
    Location.belongsToMany(models.Location, columnMappingTwo);

    Location.belongsTo(models.Campaign, { foreignKey: "campaign_id" });
    Location.belongsTo(models.Vertex, { foreignKey: "vertex_id" });

    Location.hasMany(models.Road, { foreignKey: 'location_id', onDelete: 'CASCADE', hooks: 'true' });




  };
  return Location;
};
