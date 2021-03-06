'use strict';
module.exports = (sequelize, DataTypes) => {
  const Campaign = sequelize.define('Campaign', {
    owner_id: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {});
  Campaign.associate = function(models) {
    Campaign.belongsTo(models.User, { foreignKey: "owner_id" });
    Campaign.hasMany(models.Location, { foreignKey: 'id', onDelete: 'CASCADE', hooks: 'true' });

  };
  return Campaign;
};
