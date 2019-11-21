'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    src: DataTypes.STRING,
    altText: DataTypes.STRING,
    caption: DataTypes.STRING,
    header: DataTypes.STRING
  }, {});
  Image.associate = function(models) {
    // associations can be defined here
  };
  return Image;
};