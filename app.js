const express = require("express"); //Requerimos el modulo Express
const app = express(); //Ejecutamos la función, creamos una variable y almacenamos express.
const path = require('path')
app.use(express.static(__dirname + '/public'))

//const userRoutes = require("./routes/userRouter")
//app.use("/user",userRoutes)

// Este bloque es para ir a la pgina del home oferta de productos y servicios
app.get("/index",(req,res) =>{
        res.sendFile(path.join(__dirname,"views/index.html"))
});

// Este es bloque para ir a la pagina del detalle del producto - accede el cliente al hacer click en un producto
app.get("/productDetail",(req,res) => {
    res.sendFile(path.join(__dirname,"views/productDetail.html"))
    
}) 

// Este es bloque para ir a la pagina de productCart - carrito para finalizar compra
app.get("/register",(req,res) => {
    res.sendFile(path.join(__dirname,"views/register.html"))

})

// Este es bloque para ir a la pagina de registro
app.get("/login",(req,res) => {
    res.sendFile(path.join(__dirname,"views/login.html"))
    
})

// Este es bloque para ir a la pagina de register
app.get("/register",(req,res) => {
    res.sendFile(path.join(__dirname,"views/register.html"))

})


app.listen(3000,()=>console.log("El servidor esta corriendo"))
app.use((req, res, next) => {
    res.status(404).send("Error página no encontrada")
})

//app.use(express.static('views'))

