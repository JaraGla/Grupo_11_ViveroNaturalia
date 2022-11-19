const express = require("express");
const productRoute = express.Router();
const {
  listaproductController,
  guardarProducto,
  editarProducto,
  buscarProductoPorId,
} = require("../controllers/products.controller.js");

productRoute.get("/products", listaproductController);
productRoute.post("/api/productos", guardarProducto);
productRoute.put("/api/productos", editarProducto);
productRoute.get("/api/productos/:id", buscarProductoPorId);

module.exports = productRoute;
