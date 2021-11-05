'use strict';
module.exports = (sequelize, DataTypes) => {
  const Campaign = sequelize.define('Campaign', {
    owner_id: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {});
  Campaign.associate = function(models) {
    // associations can be defined here
  };
  return Campaign;
};
