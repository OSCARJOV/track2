const express = require("express");
const fs = require("fs")
const router = express.Router();

const PATH_ROUTES = __dirname;

const removeExtension = (fileName) => {  //aqui remuevo la extension de la ruta que quiero enviar
    return fileName.split(".").shift()
}

fs.readdirSync(PATH_ROUTES).filter((file) => { //readdirSync lee sinconicamente el directorio y devuelve una matriz con los nombres de archivo
    const name = removeExtension(file) // aqui asigno a file la ruta
    if(name !=="index"){ //se omite index
        console.log(`cargando ruta ${name}`);
        router.use(`/${name}`, require(`./${file}`)) //aqui le asigno a la direccion la ruta (name)
    }
})
//console.log({a});
module.exports = router

