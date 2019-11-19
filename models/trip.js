'use strict';
module.exports = (sequelize, DataTypes) => {
  const Trips = sequelize.define('Trips', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    notes: DataTypes.STRING
  }, {});
  Trips.associate = function(models) {
    // associations can be defined here
  };
  return Trips;
};