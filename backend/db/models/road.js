'use strict';
module.exports = (sequelize, DataTypes) => {
  const Road = sequelize.define('Road', {
    location_id: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {});
  Road.associate = function(models) {
    // associations can be defined here
  };
  return Road;
};