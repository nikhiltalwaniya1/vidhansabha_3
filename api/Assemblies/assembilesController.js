const { encryptPassword, comparePassword, createToken } = require("../../utills/utills")
const { statusCode, role, userStatus } = require("../../utills/constant")
const { message } = require("../../utills/message")
const assembly = require("../../model/assembly")
const ward = require("../../model/wards")


exports.assembliesList = async (req, res) => {
  try {
    const listOfAssemblies = await assembly.find({}).lean()
    return res.status(statusCode.success).send({
      message: message.SUCCESS,
      data:listOfAssemblies
    })
  } catch (error) {
    console.log("error in createAsseblies function ", error);
    return res.status(statusCode.error).send({
      message: message.SOMETHING_WENT_WRONG
    })
  }
}

exports.createAssemblies = async (req, res) => {
  try {
    const assemblyArray = [
      "Vidhan Sabha 1",
      "Vidhan Sabha 2",
      "Vidhan Sabha 3",
      "Vidhan Sabha 4",
      "Vidhan Sabha 5",
      "Rau",
      "Mhow",
      "Sanwer",
      "DepalPur",
    ]
    for (let index = 0; index < assemblyArray.length; index++) {
      const assemblyName = assemblyArray[index];
      const saveVidhanSbha = await assembly.insertMany({assemblyName:assemblyName})      
    }
    return res.status(statusCode.success).send({
      message: message.SUCCESS
    })
  } catch (error) {
    console.log("error in createAsseblies function ", error);
    return res.status(statusCode.error).send({
      message: message.SOMETHING_WENT_WRONG
    })
  }
}

exports.createWards = async (req, res) => {
  try {
    const wardArray = [
      "Ward-55",
      "Ward-56",
      "Ward-57",
      "Ward-58",
      "Ward-59",
      "Ward-60",
      "Ward-61",
      "Ward-62",
      "Ward-63",
      "Ward-64",
    ]
    for (let index = 0; index < wardArray.length; index++) {
      const wardName = wardArray[index];
      const saveWards = await ward.insertMany({wardName:wardName, assemblyId:"653f62ad2d78d1e25ff1d189"})      
    }
    return res.status(statusCode.success).send({
      message: message.SUCCESS
    })
  } catch (error) {
    console.log("error in createAsseblies function ", error);
    return res.status(statusCode.error).send({
      message: message.SOMETHING_WENT_WRONG
    })
  }
}

exports.wardsLists = async (req, res) => {
  try {
    const listOfWards = await ward.find({}).lean()
    return res.status(statusCode.success).send({
      message: message.SUCCESS,
      data:listOfWards
    })
  } catch (error) {
    console.log("error in createAsseblies function ", error);
    return res.status(statusCode.error).send({
      message: message.SOMETHING_WENT_WRONG
    })
  }
}