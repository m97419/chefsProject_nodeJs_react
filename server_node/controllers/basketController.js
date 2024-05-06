const Basket = require('../modules/Basket')
const getAllBasketItems = async (req,res)=>{
    const orders = await Basket.find({}).lean()
    // customer:req.user._id
    console.log(orders);
    if(!orders?.length){
        return res.status(400).json({massage:'No orders found'})
    }
    res.json(orders)
}

const getBasketById=async(req,res)=>{
    const {id}=req.params
    try{
        const order = await Basket.findById(id).lean()
        res.json(order)
    }
    catch(err){
        console.log(err);
        return res.status(400).json({message:'Not task found'})
    }
}

const createNewBasket= async (req,res)=>{
    const{products,customer,count} = req.body
    if(!products || !customer)
    return res.status(400).json({message: 'field are required!!'})
    const order = await Basket.create({ products,customer,count,done:false})
    if(order){
        return res.status(201).json({message: 'new order created'})
    }
    else{
        return res.status(400).json({message:'invalid order'})
    }
}

// const updateOrder=async(req,res)=>{
//     const {_id,products,customer}=req.body
//     if(!_id||!products||!customer){
//         return res.status(400).json({message:'fields are required'})
//     }
//     const order = await Order.findById(_id).exec()
//     if(!order){
//         return res.status(400).json({message:'Order not found'})
//     }
//     order.products=products
//     order.customer=customer
//     const updatedOrder=await order.save()
//     res.json(`${updatedOrder._id} updated`)
// }

// const completeOrder = async(req, res)=>{
//     const {id}=req.params
//     const order = await Order.findById(id).exec()
//     if(!order){
//         return res.status(400).json({message:'Order not found'})
//     }
//     order.done = True
//     const updatedOrder = await order.save()
//     res.json(`${updatedOrder._id} updated`)
// }

// const deleteOrder=async(req,res)=>{
//     const {id} = req.body
//     const order= await Order.findById(id).exec()
//     if(!order){
//         return res.status(400).json({message:'Order not found'})
//     }
//     orderId = order._id
//     const result =await order.deleteOne()
//     const reply=`Order ${orderId} deleted`
//     res.json(reply)
// }
const getBasketByChef1=async(req,res)=>{
    console.log("ggggggggggggggggggggggggggggggggggggg");

 
    const {chefId}=req.params
    const products1 = await Basket.find({}).populate("products")
    // const pr =products1.map(e=>{
    //     if(e.products!=null)
    //     e.products.chef != null})


        // -------------------
        // ?.chef!=null && e.products.chef==chefId)
    // .populate("chef").lean()
    // .map(e=>e.chef==chefId)
    // console.log();
    
    // orders.map(e=>e.products.map(f=>f.chef==chefId))
    // const orders = await Product.find({chef:chefId}).populate("category").populate("chef").populate("country").lean()
    console.log(pr);
    if(!products){
        return res.status(400).json({message:'products not found'})
    }
    res.json(products)
}
module.exports={
    getBasketByChef1,
    createNewBasket

}