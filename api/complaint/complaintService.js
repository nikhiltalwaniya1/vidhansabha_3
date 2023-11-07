const users = require("../../model/user")
const { statusCode, role, userStatus,  } = require("../../utills/constant")
const complaintNumberModel = require("../../model/complaintId")
const suggestionNumberModel = require("../../model/suggestionId")

exports.getCompaintHendlerWithWard = async(wardId)=>{
  try{
    const CompaintHendlerDetails = await users.find({wardId:wardId, role:role.complaintHandler}).lean()
    if(CompaintHendlerDetails){
      return Promise.resolve(CompaintHendlerDetails)
    }else{
      return Promise.resolve(null)
    }
  }catch(error){
    return Promise.reject(error)
  }
}

exports.generatecomplaintNumber = async()=>{
  try{
    let complaintNumber = await complaintNumberModel.findOne({}).lean()
    console.log("complaintNumber===", complaintNumber);
    if(complaintNumber){
      const updateComplaintNumber = await complaintNumberModel.updateOne(
        {
          _id:complaintNumber._id
        },
        {
          $inc:{complaintNumber:1}
        }
      )
      return Promise.resolve(complaintNumber.complaintNumber)
    }else{
      const createComplaintNumber = new complaintNumberModel({
        complaintNumber:100000000
      })
      const complaintNumberDetails = await createComplaintNumber.save()
      const updateComplaintNumber = await complaintNumberModel.updateOne(
        {
          _id:complaintNumberDetails._id
        },
        {
          $inc:{complaintNumber:1}
        }
      )
      return Promise.resolve(complaintNumberDetails.complaintNumber)
    }    
  }catch(error){
    return Promise.reject(error)
  }
}

exports.generateSuggestionNumber = async()=>{
  try{
    let suggestionNumber = await suggestionNumberModel.findOne({}).lean()
    if(suggestionNumber){
      const updatesuggestionNumber = await suggestionNumberModel.updateOne(
        {
          _id:suggestionNumber._id
        },
        {
          $inc:{suggestionNumber:1}
        }
      )
      return Promise.resolve(suggestionNumber.suggestionNumber)
    }else{
      const createsuggestionNumber = new suggestionNumberModel({
        suggestionNumber:100000000
      })
      const suggestionNumberDetails = await createsuggestionNumber.save()
      const updatesuggestionDetails = await suggestionNumberModel.updateOne(
        {
          _id:suggestionNumberDetails._id
        },
        {
          $inc:{suggestionNumber:1}
        }
      )
      return Promise.resolve(suggestionNumberDetails.suggestionNumber)
    }    
  }catch(error){
    return Promise.reject(error)
  }
}