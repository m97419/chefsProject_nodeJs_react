const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    category:{
        type:[mongoose.Schema.Types.ObjectId],
        required:true,
        ref:"Category"
    },
    country:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Country"
    },
    chef:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Chef"
    },
    price:{
        type:Number,
        require:true
    },
    picture:{
        type:String,
        require:true
    }
   },{
    timestamps:true
})
module.exports = mongoose.model('Product',productSchema)