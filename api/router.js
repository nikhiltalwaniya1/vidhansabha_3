const express = require('express')
const router = express.Router()
const authController = require("./auth/authCotroller")
const { checkToken } = require("../utills/middileware")
const complaintController = require("./complant/complantController")
//Api for create user
router.post("/createUser", authController.createUser)
//Api for add Assemblies in data base
router.get("/createAssemblies", checkToken, authController.createAssemblies)
//Api for login
router.post("/login", authController.login)
//Api for create complaint 
router.post("/createComplaint", checkToken, complaintController.createComplaint)
//Api for add Assemblies in data base
router.get("/assembliesList", checkToken, authController.assembliesList)
module.exports = router