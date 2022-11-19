/*entry point */
const express = require("express"); /*todo lo que express me ofrece*/
const path = require("path");
const productRoute = require("./routes/products.route.js");

const app = express(); /* lo guardo en una variable*/

/* decirle al proycto donde buscar el recurso estaticos css, img etc.  a utilizar */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, "../public")));

app.set("view engine", "ejs"); /*motor de plantillas */
app.set("views", path.resolve(__dirname, "./views"));

app.use(productRoute);

app.listen(3000, console.log("servior corriendo en el puerto 3000"));
