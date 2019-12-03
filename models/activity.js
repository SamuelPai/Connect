'use strict';
module.exports = (sequelize, DataTypes) => {
  const Activity = sequelize.define('Activity', {
    title: DataTypes.STRING,
    link: DataTypes.STRING,
    notes: DataTypes.STRING,
    eventDate: DataTypes.DATEONLY,
    confirmed: DataTypes.BOOLEAN,
    votesYes: DataTypes.INTEGER,
    votesNo: DataTypes.INTEGER,
    tripId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Trips',
        key: 'id'
      }
    }
  }, {});
  Activity.associate = function(models) {
    // associations can be defined here
    Activity.belongsTo(models.Trips, {foreignKey: 'tripId', as:'trip'})
  };
  return Activity;
};