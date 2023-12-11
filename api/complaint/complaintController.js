const { statusCode, role, userStatus } = require("../../utills/constant")
const { message } = require("../../utills/message")
const complaintModel = require("../../model/complaint")
const assigncomplaintModel = require("../../model/assignComplaint")
const complaintService = require("./complaintService")
const suggestionModel = require("../../model/suggestion")

exports.createComplaint = async (req, res) => {
  try {
    const complaintDescription = req.body.complaintDescription
    const userId = req.decoded._id
    const assemblyId = req.body.assemblyId
    const wardId = req.body.wardId
    const complaintType = req.body.complaintType
    const complaintTitle = req.body.complaintTitle
    const complaintNumber = await complaintService.generatecomplaintNumber()
    let objectOfComplaint = {
      complaintDescription: complaintDescription,
      userId: userId,
      wardId: wardId,
      assemblyId: assemblyId,
      complaintType: complaintType,
      complaintNumber: complaintNumber,
      complaintTitle: complaintTitle
    }
    const saveComplaint = new complaintModel(objectOfComplaint)
    const complaintDetails = await saveComplaint.save()
    const complaintHendlerDetails = await complaintService.getCompaintHendlerWithWard(wardId)
    const assignComplaintWithHendler = new assigncomplaintModel(
      {
        complaintId: complaintDetails._id,
        userId: userId,
      }
    )
    await assignComplaintWithHendler.save()
    return res
      .status(statusCode.success)
      .send({
        message: message.complaint_registered,
        complaintNumber: complaintNumber
      });
  } catch (error) {
    console.log("error in createComplaint function ", error);
    return res.status(statusCode.error).send({
      message: message.SOMETHING_WENT_WRONG
    })
  }
}

exports.createSuggestion = async (req, res) => {
  try {
    const suggestionDescription = req.body.suggestionDescription
    const userId = req.decoded._id
    const assemblyId = req.body.assemblyId
    const wardId = req.body.wardId
    const suggestionTitle = req.body.suggestionTitle

    const suggestionNumber = await complaintService.generateSuggestionNumber()
    let objectOfSuggestion = {
      suggestionDescription: suggestionDescription,
      userId: userId,
      wardId: wardId,
      assemblyId: assemblyId,
      suggestionNumber: suggestionNumber,
      suggestionTitle:suggestionTitle
    }
    const saveSuggestion = new suggestionModel(objectOfSuggestion)
    const suggestionDetails = await saveSuggestion.save()
    return res
      .status(statusCode.success)
      .send({
        message: message.suggestion_registered,
        suggestionNumber: suggestionNumber
      });
  } catch (error) {
    console.log("error in createComplaint function ", error);
    return res.status(statusCode.error).send({
      message: message.SOMETHING_WENT_WRONG
    })
  }
}

exports.updateComplaint = async (req, res) => {
  try {
    const complaintDescription = req.body.complaintDescription
    const complaintId = req.body.complaintId
    const updateComplaintDetails = await complaintModel.updateOne(
      {
        _id: complaintId
      },
      {
        $set: {
          complaintDescription: complaintDescription
        }
      }
    )
    return res
      .status(statusCode.success)
      .send({
        message: message.update_complaint
      });
  } catch (error) {
    console.log("error in createComplaint function ", error);
    return res.status(statusCode.error).send({
      message: message.SOMETHING_WENT_WRONG
    })
  }
}

exports.complaintDetailsWithUserId = async (req, res) => {
  try {
    const userId = req.decoded._id
    const complaintDetails = await complaintModel.find(
      { userId: userId }
    )
      .populate('userId')
      .populate('assemblyId')
      .populate('wardId')
      .sort({createdAt:-1})
      .lean()
    if (complaintDetails) {
      return res
        .status(statusCode.success)
        .send({
          message: message.SUCCESS,
          data: complaintDetails
        });
    } else {
      return res
        .status(statusCode.error)
        .send({
          message: message.Data_not_found,
          data: []
        });
    }
  } catch (error) {
    console.log("error in createComplaint function ", error);
    return res.status(statusCode.error).send({
      message: message.SOMETHING_WENT_WRONG
    })
  }
}

exports.complaintDetailsWithHandlerId = async (req, res) => {
  try {
    const userId = req.decoded._id
    const complaintDetails = await assigncomplaintModel.find(
      { userId: userId }
    )
      .populate("complaintId")
      .populate("userId")
      .sort({createdAt:-1})
      .lean()
    if (complaintDetails) {
      return res
        .status(statusCode.success)
        .send({
          message: message.SUCCESS,
          data: complaintDetails
        });
    } else {
      return res
        .status(statusCode.error)
        .send({
          message: message.Data_not_found,
          data: []
        });
    }

  } catch (error) {
    console.log("error in createComplaint function ", error);
    return res.status(statusCode.error).send({
      message: message.SOMETHING_WENT_WRONG
    })
  }
}

exports.allcomplaintDetails = async (req, res) => {
  try {
    const complaintDetails = await complaintModel.find({})
      .populate('userId')
      .populate('assemblyId')
      .populate('wardId')
      .sort({createdAt:-1})
      .lean()
    if (complaintDetails) {
      return res
        .status(statusCode.success)
        .send({
          message: message.SUCCESS,
          data: complaintDetails
        });
    } else {
      return res
        .status(statusCode.error)
        .send({
          message: message.Data_not_found,
          data: []
        });
    }
  } catch (error) {
    console.log("error in allcomplaintDetails function ", error);
    return res.status(statusCode.error).send({
      message: message.SOMETHING_WENT_WRONG
    })
  }
}

exports.suggestionDetailsWithUserId = async (req, res) => {
  try {
    const userId = req.decoded._id
    const suggestionDetails = await suggestionModel.find(
      { userId: userId }
    )
      .populate('userId')
      .populate('assemblyId')
      .populate('wardId')
      .sort({createdAt:-1})
      .lean()
    if (suggestionDetails) {
      return res
        .status(statusCode.success)
        .send({
          message: message.SUCCESS,
          data: suggestionDetails
        });
    } else {
      return res
        .status(statusCode.error)
        .send({
          message: message.Data_not_found,
          data: []
        });
    }
  } catch (error) {
    console.log("error in suggestionDetailsWithUserId function ", error);
    return res.status(statusCode.error).send({
      message: message.SOMETHING_WENT_WRONG
    })
  }
}

exports.allsuggestionDetails = async (req, res) => {
  try {
    const suggestionDetails = await suggestionModel.find({})
      .populate('userId')
      .populate('assemblyId')
      .populate('wardId')
      .sort({createdAt:-1})
      .lean()
    if (suggestionDetails) {
      return res
        .status(statusCode.success)
        .send({
          message: message.SUCCESS,
          data: suggestionDetails
        });
    } else {
      return res
        .status(statusCode.error)
        .send({
          message: message.Data_not_found,
          data: []
        });
    }
  } catch (error) {
    console.log("error in allcomplaintDetails function ", error);
    return res.status(statusCode.error).send({
      message: message.SOMETHING_WENT_WRONG
    })
  }
}

exports.complaintResolve = async (req, res) => {
  try {
    const complaintId = req.body.complaintId
    const complaintStatus = req.body.complaintStatus
    const updateComplaint = await complaintModel.updateOne(
      {_id:complaintId},
      {
        $set:{
          complaintStatus:complaintStatus
        }
      }
    )
    return res
      .status(statusCode.success)
      .send({
        message: message.suggestion_registered,
        suggestionNumber: suggestionNumber
      });
  } catch (error) {
    console.log("error in createComplaint function ", error);
    return res.status(statusCode.error).send({
      message: message.SOMETHING_WENT_WRONG
    })
  }
}