const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Autor = sequelize.define("Autor", {
    autorId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  });

  return Autor;
};