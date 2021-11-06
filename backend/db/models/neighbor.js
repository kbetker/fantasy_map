'use strict';
module.exports = (sequelize, DataTypes) => {
  const Neighbor = sequelize.define('Neighbor', {
    prev_vertex_id: DataTypes.INTEGER,
    next_vertex_id: DataTypes.INTEGER
  }, {});
  Neighbor.associate = function(models) {
    // associations can be defined here
  };
  return Neighbor;
};