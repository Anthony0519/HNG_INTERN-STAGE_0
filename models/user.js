const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    gitHub:{
        type:String,
        required:true,
        unique:true
    },
})

const userModel = mongoose.model("user",userSchema)

module.exports = userModel