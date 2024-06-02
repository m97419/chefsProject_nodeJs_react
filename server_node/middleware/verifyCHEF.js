const verifyAdmin = (req,res,next)=>{
    console.log(req.user.role);
    if(req.user && req.user.role === "chef"){
        next()
    }
    else{
        return res.status(401).json({message:'Unauthorized admin '})

    }
}
module.exports = verifyAdmin