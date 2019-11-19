module.exports = function(sequelize, DataTypes) {
    var Activity = sequelize.define("Activity", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
            },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      link: {
        type: DataTypes.STRING,
      },
      notes: {
        type: DataTypes.STRING,
      },
      eventDate: {
          type: DataTypes.DATE,
      },
      confirmed: {
          type: DataTypes.BOOLEAN,
      },
      votesYes: {
          type: DataTypes.INTEGER
      },
      votesNo: {
          type: DataTypes.INTEGER,
      }

    });
    return Activity;
  };
  