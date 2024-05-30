const Chef = require("../modules/Chef")
const Customer = require('../modules/Customer')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const login = async(req,res)=>{
    const {name,password} = req.body
    if(!name || !password)
        return res.status(400).json({message:'All field are required'})
    const foundChef = await Chef.findOne({name}).lean()
    const foundCustomer = await Customer.findOne({name}).lean()
    var matchChef
    var matchCuttomer
    if(foundChef)
        matchChef  = await bcrypt.compare(password,foundChef.password)
    else if(foundCustomer)       
        matchCuttomer  = await bcrypt.compare(password,foundCustomer.password)
    else
        return res.status(401).json({message:'Unauthorized'})
    
    if(!matchChef && !matchCuttomer)
        return res.status(401).json({message:'Unauthorized'})

    if(foundChef){

    const chefInfo={
        _id:foundChef._id,
        name:foundChef.name,
        phone:foundChef.phone,
        email:foundChef.email,
        picture:foundChef.picture,
        role:"chef"
    }
        const accessToken = jwt.sign(chefInfo,process.env.ACCESS_TOKEN_SECRET)
       return res.json({token:accessToken})}
    if(foundCustomer){
        const customerInfo={
            _id:foundCustomer._id,
            name:foundCustomer.name,
            phone:foundCustomer.phone,
            email:foundCustomer.email,
            role:"customer"
        }
            const accessToken = jwt.sign(customerInfo,process.env.ACCESS_TOKEN_SECRET)
           return res.json({token:accessToken})}
        }
    
    


    const registerChef = async(req,res)=>{
        try{
        const picture =(req.file?.filename? req.file.filename:"") 
        console.log(picture);
        const {name,password,email,phone} =req.body
        // picture=req.file.path
        console.log(` n ${name} p ${password} e ${email} p  ${phone}  p ${picture}`);
        if(!name || !password)
            return res.status(400).json({massage:'All field are required'})
    const duplicate = await Chef.findOne({name:name}).lean()
        if(duplicate)
            return res.status(409).json({message:'Duplicate name'})
    const duplicate2 = await Customer.findOne({name:name}).lean()
        if(duplicate2)
            return res.status(409).json({message:'Duplicate name'})
    const hashedPwd = await bcrypt.hash(password,10)
    const chefObject = {name,password:hashedPwd,phone,email,picture,role:"chef"}
    const chef = await Chef.create(chefObject);
    if(chef)
    console.log("chef");
    const foundChef = await Chef.findOne({name}).lean()
    if(foundChef){
        const chefInfo={
            _id:foundChef._id,
            name:foundChef.name,
            phone:foundChef.phone,
            email:foundChef.email,
            picture:foundChef.picture,
            role:"chef"
        }
        
        const accessToken = jwt.sign(chefInfo,process.env.ACCESS_TOKEN_SECRET)
        return res.status(201).json({token:accessToken})
        }
        else
            return res.status(400).json({message:'Oooof! Invalid user recived'})  
    }
    catch(err){
        console.log(err);
        return res.status(500).json({message:"error in server"})

    }
}


    

    const registerCustomer = async(req,res)=>{
        try{
        const {name,password,email,phone} =req.body
        console.log(` n ${name} p ${password} e ${email} p  ${phone}  `);
        if(!name || !password){
            return res.status(400).json({massage:'All field are required'})
        }
    const duplicate = await Customer.findOne({name:name}).lean()
        if(duplicate)
            return res.status(409).json({message:'Duplicate name'})
    const duplicate2 = await Customer.findOne({name:name}).lean()
        if(duplicate2)
            return res.status(409).json({message:'Duplicate name'})
    const hashedPwd = await bcrypt.hash(password,10)
    const customerObject = {name,password:hashedPwd,phone,email,role:"customer"}
    const customer = await Customer.create(customerObject)
    const foundCustomer = await Customer.findOne({name}).lean()
    if(foundCustomer){
        const customerInfo={
            _id:foundCustomer._id,
            name:foundCustomer.name,
            phone:foundCustomer.phone,
            email:foundCustomer.email,
            role:"customer"
        }
            const accessToken = jwt.sign(customerInfo,process.env.ACCESS_TOKEN_SECRET)
        return res.status(201).json({token:accessToken})}
        else
            return res.status(400).json({message:'Oooof! Invalid user recived'}) 
    }
    catch(err){
        return res.status(500).json({message:"error in server"})

    }
    }

 
    module.exports = {login,registerChef,registerCustomer}