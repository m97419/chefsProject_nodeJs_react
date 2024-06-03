function errorHandler(req, res, next) {
  try{
    next()
  }
  catch(err){
//  console.log(err)
 return res.status(500).send({
      error: 'Internal Server Error',
      message: err.stack
  })
  }
 
  
  }
  module.exports=errorHandler

//   module.exports = function (err, req, res, next) {
//     console.log(err)
//     res.status(500).send({
//         error: 'Internal Server Error',
//         message: err.stack
//     })
//     next(err)
// }