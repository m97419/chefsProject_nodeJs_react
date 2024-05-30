const Country=require('../modules/Country')

const createNewCountry = async (req,res)=>{
    try{
    const{name,fictures,flag} = req.body
    if(!name)
        return res.status(400).json({message: 'Name is required!!'})
    const country = await Country.create({ name,fictures,flag})
    if(country)
        return res.status(201).json({message: 'New country created'})
    else
        return res.status(400).json({message:'Invalid country'})
    }
    catch(err){
        return res.status(500).json({message:"error in server"})
    
    }
}

const getAllCountry = async (req,res)=>{
    try{
    const countries = await Country.find().lean()
    if(!countries?.length){
        return res.status(400).json({massage:'No countries found'})
    }
    res.json(countries)
}
catch(err){
    return res.status(500).json({message:"error in server"})

}
}

const getCountryById = async(req,res)=>{
    try{
    const{id} = req.params
    try{
    const country = await Country.findById(id).lean()
    res.json(country)
    }catch(err){
        return res.status(400).json({message: 'customer not found'})
    }
}
catch(err){
    return res.status(500).json({message:"error in server"})

}
}

const updateCountry=async(req,res)=>{
    try{
    const {_id,name,fictures,flag}=req.body
    if(!_id||!name){
        return res.status(400).json({message:'fields are required'})
    }
    const country = await Country.findById(_id).exec()
    if(!country){
        return res.status(400).json({message:'Country not found'})
    }
    country.name=name
    country.fictures=fictures
    country.flag=flag

    const updateCountry=await country.save()
    res.json(`${updateCountry.name} updated`)
}
catch(err){
    return res.status(500).json({message:"error in server"})

}
}

const deleteCountry=async(req,res)=>{
    try{
    const {id} = req.body
    const country= await Country.findById(id).exec()
    if(!country){
        return res.status(400).json({message:'Country not found'})
    }
    const result =await country.deleteOne()
    const reply=`Task '${country.name}' ID ${country._id} deleted`
    res.json(reply)
}
catch(err){
    return res.status(500).json({message:"error in server"})

}

}
module.exports={
    createNewCountry,
    getAllCountry,
    getCountryById,
    updateCountry,
    deleteCountry
}
