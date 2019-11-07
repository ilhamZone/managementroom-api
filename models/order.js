'use strict';
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order', {
    is_booked: DataTypes.BOOLEAN,
    is_done: DataTypes.BOOLEAN,
    duration: DataTypes.INTEGER,
    order_end_time: DataTypes.DATE,
    customer_id: DataTypes.INTEGER,
    room_id: DataTypes.INTEGER
  }, {});
  order.associate = function (models) {
    // associations can be defined here
    order.belongsTo(models.customer, {
      as: 'Customer',
      foreignKey: 'customer_id'
    });
    order.belongsTo(models.room, {
      as: 'Room',
      foreignKey: 'room_id'
    });
  };
  return order;
};
