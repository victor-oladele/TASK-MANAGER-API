const {customapierror} = require('../error/customerror')

const errorhandler = (err , req , res , next)=>{

   if(err instanceof customapierror){
      return res.status(err.statusCode).json({ msg:err.message })
   }

    return res.status(500).json({msg:'something went wrong , try again!'})
}

module.exports = errorhandler



