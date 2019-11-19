'use strict';
module.exports = (sequelize, DataTypes) => {
  const Activity = sequelize.define('Activity', {
    title: DataTypes.STRING,
    link: DataTypes.STRING,
    notes: DataTypes.STRING,
    eventDate: DataTypes.DATE,
    confirmed: DataTypes.BOOLEAN,
    votesYes: DataTypes.INTEGER,
    votesNo: DataTypes.INTEGER
  }, {});
  Activity.associate = function(models) {
    // associations can be defined here
  };
  return Activity;
};