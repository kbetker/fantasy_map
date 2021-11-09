'use strict';
module.exports = (sequelize, DataTypes) => {
  const Road = sequelize.define('Road', {
    location_id: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {});
  Road.associate = function(models) {


    const columnMappingOne = {
      through: 'Joined_Vertex',
      otherKey: 'vertex_id',
      foreignKey: 'road_id',
      as: 'theRoad'
    }

    Road.belongsToMany(models.Vertex, columnMappingOne);

    Road.belongsTo(models.Location, { foreignKey: "location_id"})

  };
  return Road;
};
