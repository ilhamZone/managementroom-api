'use strict';
module.exports = (sequelize, DataTypes) => {
  const customer = sequelize.define('customer', {
    name: DataTypes.STRING,
    identity_number: DataTypes.INTEGER,
    phone_number: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  customer.associate = function (models) {
    // associations can be defined here
  };
  return customer;
};
