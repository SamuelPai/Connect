module.exports = function(sequelize, DataTypes) {
    var Trip = sequelize.define("Trip", {
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
      location: {
        type: DataTypes.STRING,
      },
      tripDescription: {
        type: DataTypes.STRING,
      },
      tripDate: {
          type: DataTypes.DATE,
      },
      image: {
          type: DataTypes.STRING,
      },

    });
    return Trip;
  };
  