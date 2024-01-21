const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Colaborador = sequelize.define("Colaborador", {
    colaboradorId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  });

  return Colaborador;
};