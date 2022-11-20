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
const btnDeleteIpn = document.getElementById("btnDelete");

const recargarURL = async () => {
  const req = await fetch("http://localhost:3000/api/productos/list");
  const data = await req.json();
  console.log(data);
  const listElement = document.getElementById("lista_productos");
  listElement.innerHTML = "";
  data.forEach((prod) => {
    const htmlString = `
      <h5>${prod.id}</h5>
      <h1>${prod.nombre}</h1>
      <h4>${prod.precio}</h4>
      <h4>${prod.categoria}</h4>
      <h4>${prod.etiqueta}</h4>
      `;
    listElement.innerHTML += htmlString;
  });
};
recargarURL();
// Buscar Producto
const buscarProducto = async () => {
  console.log(idIpn.value);
  const req = await fetch(`http://localhost:3000/productos/${idIpn.value}`);
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
  recargarURL();
});

// Actualizar Producto

const actualizarProductos = async (body) => {
  console.log("body");
  console.log(body);
  const req = await fetch("http://localhost:3000/productos", {
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
  recargarURL();
});

// Crear Producto

const enviarDatos = async (body) => {
  console.log("body");
  console.log(body);
  const req = await fetch("http://localhost:3000/productos", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const res = await req.json();
  console.log(res);
  alert(res.mensaje);
};

btnCreateIpn.addEventListener("click", (e) => {
  e.preventDefault();
  const body = {
    nombre: nombreIpn.value,
    descripcion: descripcionIpn.value,
    precio: precioIpn.value,
    categoria: categoriaIpn.value,
    etiqueta: etiquetaIpn.value,
    imagen: imagenIpn.value,
  };

  enviarDatos(body);
  recargarURL();
});

// Eliminar Producto

const eliminarProducto = async () => {
  console.log(idIpn.value);
  const req = await fetch(`http://localhost:3000/productos/${idIpn.value}`, {
    method: "DELETE",
  });
  const res = await req.json();
  alert(res.mensaje);
  idIpn.value = "";
  nombreIpn.value = "";
  descripcionIpn.value = "";
  precioIpn.value = "";
  categoriaIpn.value = "";
  etiquetaIpn.value = "";
  imagenIpn.value = "";
  console.log(res);
};

btnDeleteIpn.addEventListener("click", (e) => {
  e.preventDefault();
  eliminarProducto();
  recargarURL();
});
