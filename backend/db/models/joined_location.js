'use strict';
module.exports = (sequelize, DataTypes) => {
  const Joined_Location = sequelize.define('Joined_Location', {
    parent_location_id: DataTypes.INTEGER,
    child_location_id: DataTypes.INTEGER
  }, {});
  Joined_Location.associate = function(models) {
    // associations can be defined here
  };
  return Joined_Location;
};