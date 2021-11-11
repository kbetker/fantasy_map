'use strict';
module.exports = (sequelize, DataTypes) => {
  const Neighbor = sequelize.define('Neighbor', {
    curr_vertex_id: DataTypes.INTEGER,
    neighbor_vertex_id: DataTypes.INTEGER,
  }, {});
  Neighbor.associate = function(models) {
    // associations can be defined here
  };
  return Neighbor;
};
