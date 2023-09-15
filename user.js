const mongoose  = require("mongoose")

const userSchema=mongoose.Schema({
    name:String,
    email: String
})

// name:{type: String , required: true, unique: true},

module.exports=mongoose.model("User",userSchema)