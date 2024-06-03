const verifyCHEF = (req,res,next)=>{
    if(req.user && req.user.role === "chef"){
        next()
    }
    else{
        return res.status(401).json({message:'Unauthorized admin '})

    }
}
const verifyCUSTOMER = (req,res,next)=>{
    if(req.user && req.user.role === "customer"){
        next()
    }
    else{
        return res.status(401).json({message:'Unauthorized admin '})

    }
}
module.exports = verifyCHEF,verifyCUSTOMER