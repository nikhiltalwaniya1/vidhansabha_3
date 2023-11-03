const { statusCode, role, userStatus } = require("../../utills/constant")
const { message } = require("../../utills/message")


exports.createComplaint = async(req, res)=>{
  try{
    
  }catch(error){
    console.log("error in createComplaint function ", error);
    return res.status(statusCode.error).send({
      message: message.SOMETHING_WENT_WRONG
    })
  }
}