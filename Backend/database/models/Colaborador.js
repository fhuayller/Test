const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Colaborador = sequelize.define("Colaborador", {
    colaborador_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  });

  return Colaborador;
};