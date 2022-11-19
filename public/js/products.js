console.log("Products Workings...");

const idIpn = document.getElementById("id");
const nombreIpn = document.getElementById("nombre");
const descripcionIpn = document.getElementById("descripcion");
const precioIpn = document.getElementById("precio");
const categoriaIpn = document.getElementById("categoria");
const etiquetaIpn = document.getElementById("etiqueta");
const imagenIpn = document.getElementById("imagen");
const btnCreateIpn = document.getElementById("btnCreate");
const btnUpdateIpn = document.getElementById("btnUpdate");
const btnSearchIpn = document.getElementById("btnSearch");

// Buscar Producto

const buscarProducto = async () => {
  console.log(idIpn.value);
  const req = await fetch(`http://localhost:3000/api/productos/${idIpn.value}`);
  const res = await req.json();
  alert(res.mensaje);
  idIpn.value = res.id;
  nombreIpn.value = res.nombre;
  descripcionIpn.value = res.descripcion;
  precioIpn.value = res.precio;
  categoriaIpn.value = res.categoria;
  etiquetaIpn.value = res.etiqueta;
  imagenIpn.value = res.imagen;
  console.log(res);
};

btnSearchIpn.addEventListener("click", (e) => {
  e.preventDefault();
  buscarProducto();
});

// Actualizar Producto

const actualizarProductos = async (body) => {
  console.log("body");
  console.log(body);
  const req = await fetch("http://localhost:3000/api/productos", {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const res = await req.json();
  console.log(res);
  alert(res.mensaje);
  idIpn.value = res.id;
  nombreIpn.value = "";
  descripcionIpn.value = "";
  precioIpn.value = "";
  categoriaIpn.value = "";
  etiquetaIpn.value = "";
  imagenIpn.value = "";
};

btnUpdateIpn.addEventListener("click", (e) => {
  e.preventDefault();
  const body = {
    id: idIpn.value,
    nombre: nombreIpn.value,
    descripcion: descripcionIpn.value,
    precio: precioIpn.value,
    categoria: categoriaIpn.value,
    etiqueta: etiquetaIpn.value,
    imagen: imagenIpn.value,
  };

  actualizarProductos(body);
});

// Crear Producto

// const enviarDatos = async (body) => {
//   console.log("body");
//   console.log(body);
//   const req = await fetch("http://localhost:3000/api/productos", {
//     method: "POST",
//     body: JSON.stringify(body),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   const res = await req.json();
//   console.log(res);
// };

// btnCreateIpn.addEventListener("click", (e) => {
//   e.preventDefault();
//   const body = {
//     nombre: nombreIpn.value,
//     descripcion: descripcionIpn.value,
//     precio: precioIpn.value,
//     categoria: categoriaIpn.value,
//     etiqueta: etiquetaIpn.value,
//     imagen: imagenIpn.value,
//   };

//   enviarDatos(body);
// });
