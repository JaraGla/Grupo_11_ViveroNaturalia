const express = require("express");
const productRoute = express.Router();
const {
  listaproductController,
  guardarProducto,
} = require("../controllers/products.controller.js");

productRoute.get("/products", listaproductController);
productRoute.post("/api/productos", guardarProducto);

module.exports = productRoute;
