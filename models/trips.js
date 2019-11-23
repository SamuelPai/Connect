'use strict';
module.exports = (sequelize, DataTypes) => {
  const Trips = sequelize.define('Trips', {
    title: DataTypes.STRING,
    location: DataTypes.STRING,
    description: DataTypes.STRING,
    date: DataTypes.DATEONLY,
    image: DataTypes.STRING
  }, {});
  Trips.associate = function(models) {
    // associations can be defined here
  };
  return Trips;
};