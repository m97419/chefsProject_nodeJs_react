const mongoose = require('mongoose')
const customerSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:String
    },
    email:{
        type:String
    },
   },{
    timestamps:true
})
module.exports = mongoose.model('Customer',customerSchema)