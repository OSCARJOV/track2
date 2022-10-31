const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../utils/handleStorage")
const {createItem} = require("../controllers/storage")

//TODO https://localhost:3001/api/storage //post es para enviar para cargar




router.post("/", uploadMiddleware.single("myfile"), createItem) // el Middleware se aplica entre la ruta y el controlador
    

module.exports = router;