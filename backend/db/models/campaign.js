'use strict';
module.exports = (sequelize, DataTypes) => {
  const Campaign = sequelize.define('Campaign', {
    owner_id: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {});
  Campaign.associate = function(models) {
    Campaign.belongsTo(models.User, { foreignKey: "owner_id" });
  };
  return Campaign;
};
