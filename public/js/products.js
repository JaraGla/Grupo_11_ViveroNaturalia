console.log("Products Workings...");

const nombreIpn = document.getElementById("nombre");
const descripcionIpn = document.getElementById("descripcion");
const precioIpn = document.getElementById("precio");
const categoriaIpn = document.getElementById("categoria");
const etiquetaIpn = document.getElementById("etiqueta");
const imagenIpn = document.getElementById("imagen");
const btnCreateIpn = document.getElementById("btnCreate");

const enviarDatos = async (body) => {
  console.log("body");
  console.log(body);
  const req = await fetch("http://localhost:3000/api/productos", {
    method: "POST",
    body: JSON.stringify({ name: "pepe" }),
  });
  const res = await req.json();
  console.log(res);
};

btnCreateIpn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(nombreIpn.value);
  const body = {
    nombre: nombreIpn.value,
    descripcion: descripcionIpn.value,
    precio: precioIpn.value,
    categoria: categoriaIpn.value,
    etiqueta: etiquetaIpn.value,
    imagen: imagenIpn.value,
  };

  enviarDatos(body);
});
