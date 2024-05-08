function errorHandler(req, res, next) {
  try{
    console.log("111");
    next()
    console.log("22222");
  }
  catch(err){
//  console.log(err)
console.log('Internal Server Error');
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