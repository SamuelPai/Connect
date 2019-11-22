'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    // firstName: DataTypes.STRING,
    nickName: DataTypes.STRING,
    email: DataTypes.STRING
    // phoneNumber: DataTypes.STRING,
    // image: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};