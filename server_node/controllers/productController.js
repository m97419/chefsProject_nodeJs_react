const Product = require('../modules/Product')
const Category = require('../modules/Category')

const createNewProduct = async (req,res)=>{
    try{
    const{name,category,country,chef,price} = req.body

    const cat = category.split(",");

    if(!name || !price || !category || !country || !chef||!req.file)
    return res.status(400).json({message: 'field are required!!'})
    picture=req.file.path
    const product = await Product.create({ name,category:cat,country,chef,price,picture})
    if(product)
        return res.status(201).json({message: `new product created ${Product.category}`})
    else
        return res.status(400).json({message:'invalid product'})
}
catch(err){
    return res.status(500).json({message:"error in server"})

}
}

const getAllProducts = async (req,res)=>{
    try{
    const  {chef, country} = req.query;
    if(country&&chef){
    const products = await Product.find({chef,country}).populate("category").populate("chef").populate("country").lean()
    if(!products?.length){
        return res.status(400).json({massage:'No products found'})
    }
   return res.json(products)
}
if(chef){
    const products = await Product.find({chef}).populate("category").populate("chef").populate("country").lean()
    if(!products?.length){
        return res.status(400).json({massage:'No products found'})
    }
    return res.json(products)
}
if(country){
    const products = await Product.find({country}).populate("category").populate("chef").populate("country").lean()
    if(!products?.length){
        return res.status(400).json({massage:'No products found'})
    }
    res.json(products)
}
else{
    const products = await Product.find().populate("category").populate("chef").populate("country").lean()
    if(!products?.length){
        return res.status(400).json({massage:'No products found'})
    }
    res.json(products)
}
 
    // res.json(products)
}
catch(err){
    console.log(err);
    return res.status(500).json({message:"error in server"})

}
}
// ==========
// app.get('/api/v1/search',(req,res)=>{
//     const {q,limit} = req.query;
//     let filterProducts = [...products];
//     if(q){
//     filterProducts = filterProducts.filter(product=>{
//     return product.name.startsWith(q)
//     })
//     }
//     if(limit){
//     filterProducts= filterProducts.slice(0, Number(limit))
//     }
//     res.json(filterProducts)
//     })
    



// ============

const getProductById=async(req,res)=>{
    try{
    const {id}=req.params
    try{
        const product = await Product.findById(id).lean()
        res.json(product)

    }
    catch(err){
        console.log(err);
        return res.status(400).json({message:'Not product found'})
    }
}
catch(err){
    return res.status(500).json({message:"error in server"})

}
}
const updateProduct=async(req,res)=>{
 try{
    // const picture =(req.file?.filename? req.file.filename:"") 
    const {_id,name,category,price}=req.body
    const picture=req.file?req.file.path:""
    const cat = category.split(",");
    if(!_id||!name||!price)
        return res.status(400).json({message:'fields are required'})
    const product = await Product.findById(_id).exec()
    if(!product)
        return res.status(400).json({message:'product not found'})

// const exit = await Category.findById(category).lean()
// if(!exit)
//     return res.status(400).json({message:'category not exit'})
if(picture!=null&& picture!="")
    product.picture=picture
   product.name =name,
   product.category=cat,
   product.price = price
//    product.picture=picture

    const updateProduct=await product.save()
    res.json(`${updateProduct.name} updated`)
}catch(err){
    return res.status(500).json({message:"error in server"})

}
}

const deleteProduct=async(req,res)=>{
    try{
    const {id} = req.body
    const product= await Product.findById(id).exec()
    if(!product){
        return res.status(400).json({message:'product not found'})
    }
    const result =await Product.deleteOne({_id:id})
    const reply=`Product '${product.name}' ID ${product._id} deleted`
    res.json(reply)
}
    catch(err){
        return res.status(500).json({message:"error in server"})
    
    }

}

const getByCountry=async(req,res)=>{
    try{
    const {countryId}=req.params
    const products = await Product.find({country:countryId}).populate("category").populate("chef").populate("country").lean()
    if(!products){
        return res.status(400).json({message:'products not found'})
    }
    res.json(products)
}
catch(err){
    return res.status(500).json({message:"error in server"})

}
}
const getByChef=async(req,res)=>{
    try{
    const {chefId}=req.params
    const products = await Product.find({chef:chefId}).populate("category").populate("chef").populate("country").lean()
    if(!products){
        return res.status(400).json({message:'products not found'})
    }
    res.json(products)
}
catch(err){
    return res.status(500).json({message:"error in server"})

}
}

// const getByCountry=async(req,res)=>{
//     const {countryId}=req.params
//     const products = await Product.find({country:countryId}).populate("category").populate("chef").populate("country").lean()
//     console.log(products);
//     if(!products){
//         return res.status(400).json({message:'products not found'})
//     }
//     res.json(products)
// }
module.exports = {
    createNewProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    getByCountry,
    getByChef

}