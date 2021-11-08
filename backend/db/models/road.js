'use strict';
module.exports = (sequelize, DataTypes) => {
  const Road = sequelize.define('Road', {
    location_id: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {});
  Road.associate = function(models) {
    Road.belongsTo(models.Location, { foreignKey: "location_id", onDelete: "CASCADE", hooks: "true"})
    Road.hasMany(models)
  };
  return Road;
};
