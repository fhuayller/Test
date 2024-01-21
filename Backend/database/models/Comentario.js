const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Comentario = sequelize.define("Comentario", {
    comentario_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    texto: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  });

  return Comentario;
};