const express = require("express");
const router = require("./routes"); 

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true })); //middlewares

app.use("/api", router);

app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

//errores ?
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Error interno del servidor" });
});

//server
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});