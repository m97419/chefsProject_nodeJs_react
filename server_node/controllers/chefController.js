const Chef = require('../modules/Chef')

const getAllChefs = async (req,res) =>{
    try{
    const chefs = await Chef.find({},{password:0}).lean()
    if(!chefs?.length)
        return res.status(400).json({message: "no chef found"})
    res.json(chefs)
}
    catch(err){
        return res.status(500).json({message:"error in server"})
    
    }
}


const getChefById = async(req,res)=>{
    try{
    const{id} = req.params
    try{
    const chef = await Chef.findById(id,{password:0}).lean()
    res.json(chef)
    }catch(err){
        return res.status(400).json({message: 'chef not found'})
    }
}
catch(err){
    return res.status(500).json({message:"error in server"})

}
}

const updateChef = async (req,res)=>{
    try{
    const{_id,name,phone,email,picture} = req.body
    if (!_id || !name)
        return res.status(400).json({message: 'fields are required!!'})
    
    const chef = await Chef.findById(_id).exec()
    if(!chef)
        return res.status(400).json({message: 'user not found'})
  
    chef.name=name,
    chef.phone=phone,
    chef.email=email,
    chef.picture=picture

    const updatedChef = await chef.save()

    res.json(`'${updatedChef.name}' updated`)
}
catch(err){
    return res.status(500).json({message:"error in server"})

}
}

const deleteChef = async (req,res)=>{
    try{
    const{id} = req.body
    const chef = await Chef.findById(id).exec()
    if(!chef){
        return res.status(400).json({message: 'chef not found'})
    }
    const chefName = chef.name
    const result = await chef.deleteOne()
    const reply=`Chef ${chefName} deleted`
    res.json(reply)
}
catch(err){
    return res.status(500).json({message:"error in server"})

}
}

module.exports={
    getAllChefs,
    getChefById,
    updateChef,
    deleteChef
}