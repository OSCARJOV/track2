const mongoose = require("mongoose")

const TracksScheme = new mongoose.Schema(  // especifico los tipos de datos

    {
        name:{
            type: String,
        },
        album:{
            type: String,
        },
        cover:{
            type: String,
            validate: {
                validator: (req) => {
                    return true;
                },
                message: "ERROR URL",
            },
        },
        artist:{
          name:{
            type: String,
               },  
        },
        nickname:{
            type:String,
        },
        nationality:{
            type: String,
        },
    
        duration: {
        start:{
            type: Number,
        },
        end: {
            type: Number,
        },

        mediaId : {
            type: mongoose.Types.ObjectId, // es un streem pero que debe cumplir una estructura en mongoose
        },
    },
},
    {
        timestamps:true, // frecha de craecon y fecha de actualziacion
        versionKey: false
    }
)

module.exports = mongoose.model("tracks", TracksScheme) // users es el nombre de la tabla