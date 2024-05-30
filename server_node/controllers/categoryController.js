//const { eventNames } = require('../models/customer')
const Category=require('../modules/Category')

const createNewCategory = async (req,res)=>{
    try{
    const{name,description} = req.body
    if(!name)
        return res.status(400).json({message: 'name is required!!'})
    const category = await Category.create({ name,description})
    if(category)
        return res.status(201).json({message: 'new category created'})
    else
        return res.status(400).json({message:'invalid category'})
    }
    catch(err){
        return res.status(500).json({message:"error in server"})

    }
}

const getAllCategories = async (req,res)=>{
    try{
    const Categories = await Category.find().lean()
    if(!Categories?.length){
        return res.status(400).json({massage:'No Categories found'})
    }
   return res.json(Categories)
}
catch(err){
    return res.status(500).json({message:"error in server"})

}
}

const updateCategory=async(req,res)=>{
    try{
    const {_id,name,description}=req.body
    if(!_id||!name){
        return res.status(400).json({message:'fields are required'})
    }
    const category = await Category.findById(_id).exec()
    if(!category){
        return res.status(400).json({message:'Category not found'})
    }
    category.name=name
    category.description=description

    const updateCategory=await category.save()
    res.json(`${updateCategory.name} updated`)
}
catch(err){
    return res.status(500).json({message:"error in server"})

}
}

const deleteCategory=async(req,res)=>{
    try{
    const {id} = req.body
    const category= await Category.findById(id).exec()
    if(!category){
        return res.status(400).json({message:'Category not found'})
    }
    const result =await category.deleteOne()
    const reply=`Task '${category.name}' ID ${category._id} deleted`
    res.json(reply)
}
catch(err){
    return res.status(500).json({message:"error in server"})

}
}
module.exports={
    getAllCategories,
    createNewCategory,
    updateCategory,
    deleteCategory
}
