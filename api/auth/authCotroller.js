const { encryptPassword, comparePassword, createToken } = require("../../utills/utills")
const { statusCode, role, userStatus } = require("../../utills/constant")
const { message } = require("../../utills/message")
const users = require("../../model/user")
const assembly = require("../../model/assembly")
const authService = require("../auth/authService")

exports.createUser = async (req, res) => {
  try {
    const checkUserDetails = await authService.checkUser(req.body.phonenumber)
    if(!checkUserDetails){
      let obj = req.body
      const encryptPasswordString = await encryptPassword(req.body.password)
      obj.password = encryptPasswordString
      const saveUserDetails = new users(obj)
      await saveUserDetails.save()
      return res.status(statusCode.success).send({
        message: message.Registration_Done
      })
    }else{
      return res.status(statusCode.error).send({
        message: message.Email_already_exist
      })
    }
  } catch (error) {
    return res.status(statusCode.error).send({
      message: message.SOMETHING_WENT_WRONG
    })
  }
}
exports.login = async (req, res) => {
  try {
    const checkUserDetails = await authService.checkUser(req.body.phonenumber)
    if(checkUserDetails){
      let obj = checkUserDetails
      console.log();
      const passwordResult = await comparePassword(checkUserDetails.password, req.body.password)
      if(passwordResult){
        const token = await createToken(obj)
        obj.token = token
        return res.status(statusCode.success).send({
          message: message.Registration_Done,
          data:obj
        })
      }else{
        return res.status(statusCode.error).send({
          message: message.Password_not_match
        })
      }
    }else{
      return res.status(statusCode.error).send({
        message: message.Details_not_matched
      })
    }
  } catch (error) {
    console.log("error in login====", error);
    return res.status(statusCode.error).send({
      message: message.SOMETHING_WENT_WRONG
    })
  }
}