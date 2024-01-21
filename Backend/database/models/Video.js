const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Video = sequelize.define("Video", {
    video_id: {
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