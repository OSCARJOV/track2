const { matchedData } = require("express-validator");
const {tracksModel} = require('../models');
const { handleHttpError } = require('../utils/handleError');

/**  // obtener lista base de datos
 * 
 * @param {*} req 
 * @param {*} res 
 */


const getItems = async (req, res) => {

    try {
    const data = await tracksModel.find({});
    res.send({data})   
    } catch (e) {
        handleHttpError(res, "ERROR_GET_ITEMS")
    }
};
/** // obtener un detalle
 * 
 * @param {*} req 
 * @param {*} res 
 */ 

const getItem = async (req, res) => {

    try {
        req = matchedData(req);
        const {id} = req;
        const data = await tracksModel.findById(id);
        res.send({data}) 
    } catch (error) {
        handleHttpError(res, "ERROR_GET_ITEM")
        
    }

};

/** //  insertar un registro
 * 
 * @param {*} req 
 * @param {*} res 
 */

const createItem = async (req, res) => {

    try {

        const body = matchedData(req) // devuelve la data limpia 
        const data = await tracksModel.create(body);
        res.send({data});  
        } catch (e) {
            handleHttpError(res, "ERROR_CREATE_ITEMS")
        }

  

};

/**  // actualizar un registro
 * 
 * @param {*} req 
 * @param {*} res 
 */

const updateItems = async (req, res) => {};

/**  // eliminar un registro
 * 
 * @param {*} req 
 * @param {*} res 
 */


const deleteItems = (req, res) => {};



module.exports = { getItems, getItem, createItem, updateItems, deleteItems};


// {
//     "name": "",      
//     "album": "",
//     "cover" : "",
//     "artist": {
//       "name":"",
//     "nickname":"",
//     "nationality":""
//     },
//     "duration": {
//     "start":1,
//     "end": 0
//      },

//     "mediaId" : ""
// }