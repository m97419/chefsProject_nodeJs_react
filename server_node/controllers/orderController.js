const Order = require('../modules/Order')

const getAllOrders = async (req,res)=>{
    try{
    const orders = await Order.find({customer:req.user._id}).lean()
    if(!orders?.length){
        return res.status(400).json({massage:'No orders found'})
    }
    res.json(orders)
}
catch(err){
    return res.status(500).json({message:"error in server"})

}
}

const getOrderById=async(req,res)=>{
    const {id}=req.params
    try{
        const order = await Order.findById(id).lean()
        res.json(order)
    }
    catch(err){
        console.log(err);
        return res.status(400).json({message:'Not task found'})
    }
}

const createNewOrder = async (req,res)=>{
    try{
    const{products,customer} = req.body
    if(!products?.length || !customer)
    return res.status(400).json({message: 'field are required!!'})
    const order = await Order.create({ products,customer,done:false})
    if(order){
        return res.status(201).json({message: 'new order created'})
    }
    else{
        return res.status(400).json({message:'invalid order'})
    }
}
catch(err){
    return res.status(500).json({message:"error in server"})

}
}

const updateOrder=async(req,res)=>{
    try{
    const {_id,products,customer}=req.body
    if(!_id||!products||!customer){
        return res.status(400).json({message:'fields are required'})
    }
    const order = await Order.findById(_id).exec()
    if(!order){
        return res.status(400).json({message:'Order not found'})
    }
    order.products=products
    order.customer=customer
    const updatedOrder=await order.save()
    res.json(`${updatedOrder._id} updated`)
}
catch(err){
    return res.status(500).json({message:"error in server"})

}
}

const completeOrder = async(req, res)=>{
    try{
    const {id}=req.params
    const order = await Order.findById(id).exec()
    if(!order){
        return res.status(400).json({message:'Order not found'})
    }
    order.done = True
    const updatedOrder = await order.save()
    res.json(`${updatedOrder._id} updated`)
}
catch(err){
    return res.status(500).json({message:"error in server"})

}
}

const deleteOrder=async(req,res)=>{
    try{
    const {id} = req.body
    const order= await Order.findById(id).exec()
    if(!order){
        return res.status(400).json({message:'Order not found'})
    }
    orderId = order._id
    const result =await order.deleteOne()
    const reply=`Order ${orderId} deleted`
    res.json(reply)
}
catch(err){
    return res.status(500).json({message:"error in server"})

}
}
const getOrderByChef=async(req,res)=>{
    try{
    const {chefId}=req.params
    const orders = await Product.find({})
    orders.map(e=>e.products.map(f=>f.chef==chefId))
    // const orders = await Product.find({chef:chefId}).populate("category").populate("chef").populate("country").lean()
    if(!products){
        return res.status(400).json({message:'products not found'})
    }
    res.json(products)
}
catch(err){
    return res.status(500).json({message:"error in server"})

}

}

module.exports={
    getAllOrders,
    getOrderById,
    createNewOrder,
    updateOrder,
    completeOrder,
    deleteOrder,
    getOrderByChef
}