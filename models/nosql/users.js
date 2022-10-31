const mongoose = require("mongoose")

const UserScheme = new mongoose.Schema(  // especifico los tipos de datos

    {
        name:{
            type: String
        },
        age:{
            type: Number
        },
        email:{
            type:String,
            unique: true
        },
        password:{
            type:String 
        },
        role:{
            type:["user", "admin"],
            default:"user",
        }
    },
    {
        timestamps:true, // frecha de craecon y fecha de actualziacion
        versionKey: false
    }
)

module.exports = mongoose.model("users", UserScheme) // users es el nombre de la tabla