const Product = require('../modules/Product')
const Category = require('../modules/Category')

const createNewProduct = async (req,res)=>{
    // const picture =(req.file?.filename? req.file.filename:"") 
    const{name,category,country,chef,price,picture} = req.body
    if(!name || !price || !category || !country || !chef)
    return res.status(400).json({message: 'field are required!!'})
    const product = await Product.create({ name,category,country,chef,price,picture})
    if(product)
        return res.status(201).json({message: 'new product created'})
    else
        return res.status(400).json({message:'invalid product'})
}

const getAllProducts = async (req,res)=>{
    const products = await Product.find().lean()
    if(!products?.length){
        return res.status(400).json({massage:'No products found'})
    }
    res.json(products)
}

const getProductById=async(req,res)=>{
    const {id}=req.params
    console.log(typeof(id));
    try{
    const product = await Product.findById(id).lean()
    console.log(product);
    res.json(product)

    }
    catch(err){
        console.log(err);
        return res.status(400).json({message:'Not product found'})
    }
}

const updateProduct=async(req,res)=>{
    // const picture =(req.file?.filename? req.file.filename:"") 
    const {_id,name,category,price,picture}=req.body
    if(!_id||!name||!price)
        return res.status(400).json({message:'fields are required'})
    const product = await Product.findById(_id).exec()
    if(!product)
        return res.status(400).json({message:'product not found'})

const exit = await Category.findById(category).lean()
if(!exit)
    return res.status(400).json({message:'category not exit'})
   product.name =name,
   product.category=category,
   product.price = price,
   product.picture=picture

    const updateProduct=await product.save()
    res.json(`${updateProduct.name} updated`)
}

const deleteProduct=async(req,res)=>{
    const {id} = req.body
    const product= await Product.findById(id).exec()
    if(!product){
        return res.status(400).json({message:'product not found'})
    }
    const result =await Product.deleteOne()
    const reply=`Task '${product.name}' ID ${product._id} deleted`
    res.json(reply)

}
const getByCountry=async(req,res)=>{
    const {countryId}=req.params
    const products = await Product.find({country:countryId}).populate("category","chef").lean()
    if(!products){
        return res.status(400).json({message:'products not found'})
    }
    res.json(products)
}
module.exports = {
    createNewProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    getByCountry

}