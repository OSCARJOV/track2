const multer = require("multer")


const storage = multer.diskStorage({
    destination:function(req, file, cb){
        const pathStorage = `${__dirname}/../storage` // busco la ruta dirname me trae la ruta actual y busco storage
        cb(null, pathStorage) // cb es una funcion de call back, como error pasamos null y destino seria pathStorage
    },

    filename: function(req, file, cb){

        const ext = file.originalname.split(".").pop(); // me separa el nombre original tomando como parametro el punto. con.pop me agarra la parte final
        const filename = `file-${Date.now()}.${ext}` // nombre del archivo=templateString fecha aleatoria . la extensi.
        cb(null, filename)
    },
})

 
const uploadMiddleware = multer({
    storage : storage
})

module.exports = uploadMiddleware;