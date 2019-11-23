'use strict';
module.exports = (sequelize, DataTypes) => {
  const Trips = sequelize.define('Trips', {
    tripName: DataTypes.STRING,
    destination: DataTypes.STRING,
    description: DataTypes.STRING,
    date: DataTypes.DATEONLY,
    image: DataTypes.STRING
  }, 
  {});
  Trips.associate = function(models) {
    // associations can be defined here
  };
  return Trips;
};