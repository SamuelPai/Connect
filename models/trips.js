'use strict';
module.exports = (sequelize, DataTypes) => {
  const Trips = sequelize.define('Trips', {
    title: DataTypes.STRING,
    location: DataTypes.STRING,
    Description: DataTypes.STRING,
    tripDate: DataTypes.DATEONLY,
    image: DataTypes.STRING
  }, {});
  Trips.associate = function(models) {
    // associations can be defined here
    Trips.hasMany(models.Activity, {as: 'activities'})    
  };
  return Trips;
};