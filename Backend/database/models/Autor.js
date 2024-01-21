const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Autor = sequelize.define("Autor", {
    autor_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  });

  return Autor;
};