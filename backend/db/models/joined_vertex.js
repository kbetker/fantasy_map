'use strict';
module.exports = (sequelize, DataTypes) => {
  const Joined_Vertex = sequelize.define('Joined_Vertex', {
    road_id: DataTypes.INTEGER,
    vertex_id: DataTypes.INTEGER
  }, {});
  Joined_Vertex.associate = function(models) {
    Joined_Vertex.belongsTo(models.Road, { foreignKey: "road_id" })
    Joined_Vertex.belongsTo(models.Vertex, { foreignKey: "vertex_id" })  };
  return Joined_Vertex;
};
