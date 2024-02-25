const mongoose = require('mongoose')
const orderSchema = new mongoose.Schema({
    products:{
        type:[mongoose.Schema.Types.ObjectId],
        required:true,
        ref:"Product"

    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Customer"
    },
    date:{
        type:mongoose.Schema.Types.Date,
        default:()=>new Date()
    },
    done:{
        type:Boolean
    }
   },{
    timestamps:true
})
module.exports = mongoose.model('Order',orderSchema)
