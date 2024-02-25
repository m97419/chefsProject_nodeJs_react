const mongoose = require('mongoose')
const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    code:{
        type:Number,
        require:true
    },
    description:{
        type:String
    }
   },{
    timestamps:true
})
module.exports = mongoose.model('Category',categorySchema)