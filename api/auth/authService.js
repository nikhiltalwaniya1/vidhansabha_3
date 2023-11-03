const users = require("../../model/user")

exports.checkUser = async(phonenumber)=>{
  try{
    const checkUser = await users.findOne({phonenumber:phonenumber}).lean()
    if(checkUser){
      return Promise.resolve(checkUser)
    }else{
      return Promise.resolve(null)
    }
  }catch(error){
    return Promise.reject(error)
  }
}