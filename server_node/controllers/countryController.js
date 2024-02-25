const Country=require('../modules/Country')

const createNewCountry = async (req,res)=>{
    const{name,fictures,flag} = req.body
    if(!name)
        return res.status(400).json({message: 'Name is required!!'})
    const country = await Country.create({ name,fictures,flag})
    if(country)
        return res.status(201).json({message: 'New country created'})
    else
        return res.status(400).json({message:'Invalid country'})
}

const getAllCountry = async (req,res)=>{
    const countries = await Country.find().lean()
    if(!countries?.length){
        return res.status(400).json({massage:'No countries found'})
    }
    res.json(countries)
}

const getCountryById = async(req,res)=>{
    const{id} = req.params
    try{
    const country = await Country.findById(id).lean()
    res.json(country)
    }catch(err){
        return res.status(400).json({message: 'customer not found'})
    }
}

const updateCountry=async(req,res)=>{
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

const deleteCountry=async(req,res)=>{
    const {id} = req.body
    const country= await Country.findById(id).exec()
    if(!country){
        return res.status(400).json({message:'Country not found'})
    }
    const result =await country.deleteOne()
    const reply=`Task '${country.name}' ID ${country._id} deleted`
    res.json(reply)

}
module.exports={
    createNewCountry,
    getAllCountry,
    getCountryById,
    updateCountry,
    deleteCountry
}
