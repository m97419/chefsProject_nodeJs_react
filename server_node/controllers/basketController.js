const Basket = require('../modules/Basket');
// const { populate } = require('../modules/Category');
const Product = require('../modules/Product')
const Chef = require("../modules/Chef")
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

const completeBasket = async(req, res)=>{
    try{
    const {id}=req.params
    console.log("completeBasket");
    const order = await Basket.findById(id).exec()
    if(!order){
        return res.status(400).json({message:'Order not found'})
    }
    order.done = true
    // order.done = True
    const updatedOrder = await order.save()
    res.json(`${updatedOrder._id} updated`)
}
catch(err){
    return res.status(500).json({message:"error in server"})

}
}
const createNewBasket= async (req,res)=>{
    try{
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
catch(err){
    return res.status(500).json({message:"error in server"})

}
}

//--------------------------------------

async function getBasketsForChef333(req,res) {
    try {
        const chefId = req.params.chefId;
        console.log(chefId);

        // מצא את כל המוצרים ששייכים לשף הנתון
        const products = await Product.find({ chef: chefId });
        console.log(products);
        if (!products || products.length === 0) {
            return [];
        }

        // אסוף את כל המזהים של המוצרים הללו
        const productIds = products.map(product => product._id);
        console.log("uuuuuuuuuuuu");
        console.log(productIds);

        // מצא את כל הסלים שמכילים מוצרים ששייכים לשף הנתון באמצעות Promise.all
        const basketPromises = productIds.map(productId => {
            return  Basket.find({ products: productId })
        });
        console.log("iiiiiii");
        console.log(basketPromises);

        const basketsArray = await Promise.all(basketPromises);
        const baskets = basketsArray.flat();
        console.log("baskets",baskets.products);
        console.log("basketsArray",basketsArray);
        return res.json(basketsArray) ;
    } catch (error) {
        console.log(error);
        // throw new Error('שגיאה בעת קבלת הסלים של השף');
    }
}

// ד---------------------------------------------


const getBasketByChef3=async(req,res)=>{
    try{
    const baskets = await Basket.find().populate("products").lean()
    console.log(baskets[7].products);
    const products = await Product.findById(baskets[7].products._id).populate("chef") .lean()
    console.log("j"+products.chef);
}
catch(err){
    return res.status(500).json({message:"error in server"})

}
}
const getBasketByChef1=async(req,res)=>{
    try{
       const {chefId}= req.params
    const baskets = await Basket.find({},{products:1}).populate("products").exec()
    if (!baskets)
        return res.status(400).json({ message: 'No orders found' })
    console.log(baskets[7].products);
    console.log("lllllllllllll");
    const products = await Promise.all(baskets.map(async(b)=>{
        console.log(b.products._id);
        const product= await Product.findById(b.products._id).lean().populate("chef",{_id:1})
        console.log("kkkkkkkkkk");
        console.log(product.chef._id);
        const s = await Chef.findById(product.chef._id)
        console.log("s"+s);
        console.log("yyyyyyyrrrrryyyyyyyyy");
console.log(chefId);
console.log(s._id);
        if(s._id==chefId)
       
        console.log("yes");
    else
        console.log("no");
        return product
    }))
    return res.json(baskets)
    
}
catch(err){
    return res.status(500).json({message:"error in server"})

}}
// ===================

// const Basket = require('./basketModel');
// const Product = require('./productModel');
const getBasketsForChef=async(req,res)=>{
    try{
       const {chefId}= req.params
    const products = await Product.find({ 'chef': chefId });
    const productIds = products.map(product => product._id);

    const orders = await Basket.find({ 'products': { $in: productIds } }).populate('products').populate('customer');
console.log(orders[0]);

    return res.json(orders);
}
catch(err){
    console.log(err);
}}

const getBasketsForCustomer=async(req,res)=>{
    try{
    const {customerId}= req.params
    console.log("cc");
    console.log(customerId);
    const orders = await Basket.find({ 'customer':customerId }).populate('products')
console.log(orders[0]);

    return res.json(orders);
}
catch(err){
    console.log(err);
}}



// ==========================
const getBasketByChef2=async(req,res)=>{
const baskets = await Basket.find().lean()
const r= await Promise.all(baskets.map(async(b)=>{const product=await Product.find({b:b._id}).lean()
console.log(e);
console.log("-----------------");

return res.json(e)

}
))
}
    

// const getBasketByChef2=async(req,res)=>{
   
  


    // .populate({
    //     path : 'userId',
    //     populate : {
    //       path : 'reviewId'
    //     }
    //   })
    // const products2 = await Basket.find().populate({
    //     path : 'products',
    //     populate : {
    //       path : 'chef'
    //     }
    //   })
    //   products2.map(e=>console.log(e.products.chef._id==chefId))
    // User.findOne({ name: 'John' }).populate({
    //     path: 'posts',
    //     populate: {
    //         path: 'comments',
    //         model: 'Comment',
    //         populate: {
    //             path: 'author',
    //             model: 'User'
    //         }
    //     }
    // }).exec((err, user) => {
    //     console.log(user);
    // });
    // const f=  products2.filter(e=>{console.log(e.products); });
    // const {chefId}=req.params
    // const products1 = await Basket.find({}).populate("products")
    // console.log(chefId);
    // console.log("llllll");
    // const p=  products1.filter(e=>{console.log(e.products); });
    // console.log(p);
    // const o=  products1.filter(e=>{console.log( e.products.chef._id);  e.products.chef._id ==chefId});
//    const r=  products1.map(e=>e.products.chef==chefId);

    // const pr =products1.map(e=>{
    //     if(e.products!=null)
    //     e.products.chef != null})


        // -------------------
        // ?.chef!=null && e.products.chef==chefId)
    // .populate("chef").lean()
    // .map(e=>e.chef==chefId)
    // console.log();
    
    //  const ee=products1.map(e=>e.products.map(f=>f.chef==chefId))
    // console.log(products2);
    // const orders = await Product.find({chef:chefId}).populate("category").populate("chef").populate("country").lean()
    // console.log("o");
    // if(!products2){
    //     return res.status(400).json({message:'products not found'})
    // }
//     res.json(products)
//     if(!products){
//         return res.status(400).json({message:'products not found'})
//     }
    // res.json(products2)
// }
// }
module.exports={
    getBasketByChef1,
    createNewBasket,
    getBasketsForChef,
    getBasketsForCustomer,
    completeBasket

}