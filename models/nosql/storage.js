const mongoose = require("mongoose")

const StorageScheme = new mongoose.Schema(  // especifico los tipos de datos

    {
        url:{
            type: String
        },
        filename:{
            type: String,
        },
        
    },
    {
        timestamps:true, // frecha de craecon y fecha de actualziacion
        versionKey: false
    }
)

module.exports = mongoose.model("storages", StorageScheme) // users es el nombre de la tabla