module.exports = function(sequelize, DataTypes) {
    var Member = sequelize.define("Member", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
            },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
      },
      phoneNumber: {
        type: DataTypes.INTEGER,
      },
      image: {
          type: DataTypes.STRING,
      },
    });
    return Member;
  };
  