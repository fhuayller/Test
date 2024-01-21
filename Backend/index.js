require("dotenv").config();
const { PORT } = process.env;

const { app } = require("./app");
const { conn } = require("./database/db.js");

const syncOptions = {
  force: true,
};

try {
  conn
    .sync(syncOptions)
    .then(() => {
      app.listen(PORT, () => {
        console.log("Server raised");
      });
    });
} catch (error) {
  console.log("An error occurred during the server startup: " + error.message);
}