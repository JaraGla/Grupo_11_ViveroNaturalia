const express = require("express");
const routes = express.Router();
const webControllers = require("../controllers/webControllers");

/*Metodos http  put, get, post, path, delete, head comunes para usar en crud, */

routes.get("/", webControllers.index);

module.exports = routes;
