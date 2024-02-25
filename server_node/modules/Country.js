const mongoose = require('mongoose')

const countrySchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    pictures:{
        type:[String]
    },
    flag:{
        type:String
    }
   },{
    timestamps:true
})
module.exports = mongoose.model('Country',countrySchema)
