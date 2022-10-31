const express = require("express");
const router = express.Router();
const customHeader = require("../middleware/customHeader")
const { validatorCreateItem, validatorGetItem } = require("../validators/tracks")

const { getItems, getItem, createItem } = require("../controllers/tracks")

//TODO GET, POST, DELETE, PUT

// Lista de items

router.get("/", getItems);

// Lista de detalle de items

router.get("/:id",validatorGetItem, getItems);

//Crear un registro

router.post("/", validatorCreateItem, createItem);

module.exports = router