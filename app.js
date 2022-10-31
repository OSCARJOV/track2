require("dotenv").config() // usa variables de entorno
const express = require("express")  // ayuda a levantar servicio web
const cors = require("cors") // 

const dbConnect = require("./config/mongo") //requiero el mongo

const app = express()

app.use(cors()) // haga uso de cors 
app.use(express.json())
app.use(express.static("storage"))

const port = process.env.PORT || 3000  // 3000 // variable de entorno


// AQUI INVOCAMOS LAS RUTAS

app.use("/api" ,require("./routes")) // aqui estoy invocando index

app.listen(port, () => {  // funcion inicial -- escucha por el puerto 3000 y
    console.log(`app lista por el: ${port}`); //devuelve este mensaje.


}) 

dbConnect() // y la invoco  