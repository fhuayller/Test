console.log("Cargando .env")
require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  { logging: false, native: false }
);

const basename = path.basename(__filename);

sequelize
  .authenticate()
  .then(() => {
    console.log(
      "Database connection has been established successfully." +
        `${DB_USER}:password@${DB_HOST}:${DB_PORT}/${DB_NAME}`
    );
  })
  .catch((error) => {
    console.error(
      "Unable to connect to the database:" +
        `${DB_USER}:password@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
      error
    );
  });

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { Video, Autor, Colaborador, Comentario, Review, Usuario } = sequelize.models;

//relaciones
Usuario.hasMany(Autor, { foreignKey: 'usuario_id' });
Usuario.hasMany(Colaborador, { foreignKey: 'usuario_id' });
Usuario.hasMany(Comentario, { foreignKey: 'usuario_id' });
Usuario.hasMany(Review, { foreignKey: 'usuario_id' });

Autor.belongsTo(Usuario, { foreignKey: 'usuario_id' });
Colaborador.belongsTo(Usuario, { foreignKey: 'usuario_id' });
Comentario.belongsTo(Usuario, { foreignKey: 'usuario_id' });
Review.belongsTo(Usuario, { foreignKey: 'usuario_id' });

Video.belongsTo(Autor, { foreignKey: 'autor_id' });
Video.belongsTo(Colaborador, { foreignKey: 'colaborador_id' });
Video.hasMany(Comentario, { foreignKey: 'video_id' });
Video.hasMany(Review, { foreignKey: 'video_id' });

module.exports = {
  Video,
  Autor,
  Colaborador,
  Comentario,
  Review,
  Usuario,
  conn: sequelize,
};