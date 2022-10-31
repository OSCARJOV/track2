const mongoose = require("mongoose");

const dbConnect = () => {

        const DB_URI = process.env.DB_URI;
        mongoose.connect(DB_URI, {  //se crea la conexion y se pasan los parametros.
            useNewUrlParser: true, // que mongo maneja 
            useUnifiedTopology: true,
            
        },
        (err, res) => {  // funcion callback
            if(!err){
                console.log("***CONEXION EXITOSA*****");
            }else{
                console.log("***ERROR CONEXION******");
            }
        });
    };


module.exports = dbConnect