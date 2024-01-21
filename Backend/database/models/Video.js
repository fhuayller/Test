const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Video = sequelize.define("Video", {
    videoId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Video;
};