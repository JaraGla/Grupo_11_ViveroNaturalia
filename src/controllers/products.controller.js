const path = require("path");
const fs = require("fs");

const listaproductController = (req, res) => {
  res.render("pages/products", {
    stylePath: "products",
  });
};

const obtenerProductos = async (req, res) => {
  const plantasDelArchivoJSON = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "..", "database", "plantas.json"))
  );

  res.json(plantasDelArchivoJSON);
};

const guardarProducto = async (req, res) => {
  const nuevoProducto = req.body;
  const productos = await JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "..", "database", "plantas.json"))
  );

  const ultimoProducto = productos[productos.length - 1];
  console.log(ultimoProducto);
  nuevoProducto.id = String(Number(ultimoProducto.id) + 1);
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

const borrarProducto = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const productos = await JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "..", "database", "plantas.json"))
  );

  const productoEliminado = productos.find((prod) => prod.id == id);

  const nuevosProductos = productos.filter((prod) => prod.id !== id);

  fs.writeFileSync(
    path.resolve(__dirname, "..", "database", "plantas.json"),
    JSON.stringify(nuevosProductos).toString()
  );

  res.json({ ...productoEliminado, mensaje: "Prodcuto eliminado!" });
};

module.exports = {
  guardarProducto,
  listaproductController,
  editarProducto,
  buscarProductoPorId,
  borrarProducto,
  obtenerProductos,
};
