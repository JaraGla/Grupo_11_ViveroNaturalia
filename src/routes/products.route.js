const express = require("express");
const productRoute = express.Router();
const {
  listaproductController,
  guardarProducto,
  editarProducto,
  buscarProductoPorId,
  borrarProducto,
  obtenerProductos,
} = require("../controllers/products.controller.js");

productRoute.get("/productos", listaproductController);
productRoute.post("/productos", guardarProducto);
productRoute.put("/productos", editarProducto);
productRoute.delete("/productos/:id", borrarProducto);
productRoute.get("/api/productos/list", obtenerProductos);
productRoute.get("/productos/:id", buscarProductoPorId);

module.exports = productRoute;
