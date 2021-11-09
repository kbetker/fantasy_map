'use strict';
module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    campaign_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    show_on_map: DataTypes.BOOLEAN,
    vertex_id: DataTypes.INTEGER,
    image_url: DataTypes.STRING,
    coord_x: DataTypes.INTEGER,
    coord_y: DataTypes.INTEGER
  }, {});
  Location.associate = function(models) {


    const columnMappingOne = {
      through: 'Joined_Locations',
      otherKey: 'parent_location_id',
      foreignKey: 'child_location_id',
      as: 'parent'
    }
    const columnMappingTwo = {
      through: 'Joined_Locations',
      otherKey: 'child_location_id',
      foreignKey: 'parent_location_id',
      as: 'child'
    }

    Location.belongsToMany(models.Location, columnMappingOne);
    Location.belongsToMany(models.Location, columnMappingTwo);

    Location.belongsTo(models.Campaign, { foreignKey: "campaign_id" });
    Location.belongsTo(models.Vertex, { foreignKey: "vertex_id" });

    Location.hasMany(models.Road, { foreignKey: 'location_id', onDelete: 'CASCADE', hooks: 'true' });




  };
  return Location;
};
