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
  console.log(req.body);
  const nuevoProducto = req.body;
  console.log("nuevoProducto");
  console.log(nuevoProducto);
  const productos = await JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "..", "database", "plantas.json"))
  );
  // console.log(productos);
  nuevoProducto.id = Math.random();
  const nuevosProductos = [...productos, nuevoProducto];
  console.log("nuevosProductos");
  console.log(nuevosProductos);
  // const product = await fs.writeFileSync(
  //   path.resolve(
  //     __dirname,
  //     "..",
  //     "database",
  //     "plantas.json",
  //     JSON.stringify(nuevosProductos).toString()
  //   )
  // );
  // console.log(product);
  res.json({ mensaje: "nuevo producto creado con exito!" });
};

module.exports = {
  guardarProducto,
  listaproductController,
};
