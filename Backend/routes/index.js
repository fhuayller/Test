const express = require("express");
const routerRepo = require('./githubRepo');

const router = express.Router();

router.use("/repos", routerRepo);

module.exports = router;