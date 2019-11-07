'use strict';
module.exports = (sequelize, DataTypes) => {
  const room = sequelize.define('room', {
    name: DataTypes.STRING
  }, {});
  room.associate = function (models) {
    // associations can be defined here
    room.hasOne(models.order, {
      foreignKey: 'id',
      as: 'Order',
    });
  };
  return room;
};
