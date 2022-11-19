const path = require("path");
const fs = require("fs");

const listaproductController = (req, res) => {
  const plantasDelArchivoJSON = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "..", "database", "plantas.json"))
  );
  res.render("pages/products", {
    data: plantasDelArchivoJSON,
    stylePath: "products",
  });
};

const guardarProducto = async (req, res) => {
  const nuevoProducto = req.body;
  const productos = await JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "..", "database", "plantas.json"))
  );
  nuevoProducto.id = Math.random();
  const nuevosProductos = [...productos, nuevoProducto];
  const product = await fs.writeFileSync(
    path.resolve(__dirname, "..", "database", "plantas.json"),
    JSON.stringify(nuevosProductos).toString()
  );
  res.json({ ...product, mensaje: "nuevo producto creado con exito!" });
};

const editarProducto = async (req, res) => {
  console.log(req.body);
  const { id, nombre, descripcion, precio, etiqueta, categoria, imagen } =
    req.body;
  const productos = await JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "..", "database", "plantas.json"))
  );

  const nuevosProductos = productos.map((prod) => {
    if (prod.id == id) {
      return req.body;
    }
    return prod;
  });

  fs.writeFileSync(
    path.resolve(__dirname, "..", "database", "plantas.json"),
    JSON.stringify(nuevosProductos).toString()
  );

  const productoActualizado = nuevosProductos.find((prod) => prod.id == id);

  res.json({
    ...productoActualizado,
    mensaje: "Producto actualizado!",
  });
};

const buscarProductoPorId = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const productos = await JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "..", "database", "plantas.json"))
  );

  const productoEncontrado = productos.find((prod) => prod.id == id);
  console.log(productoEncontrado);
  res.json({
    ...productoEncontrado,
    mensaje: "Producto encontrado!",
  });
};

module.exports = {
  guardarProducto,
  listaproductController,
  editarProducto,
  buscarProductoPorId,
};
