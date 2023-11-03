const express = require('express')
const router = express.Router()
const authController = require("./auth/authCotroller")
const { checkToken } = require("../utills/middileware")
const complaintController = require("./complant/complantController")
const assembliesController = require("./Assemblies/assembilesController")
//Api for create user
router.post("/createUser", authController.createUser)
//Api for add Assemblies in data base
router.get("/createAssemblies", checkToken, assembliesController.createAssemblies)
//Api for login
router.post("/login", authController.login)
//Api for create complaint 
router.post("/createComplaint", checkToken, complaintController.createComplaint)
//Api for add Assemblies in data base
router.get("/assembliesList", checkToken, assembliesController.assembliesList)
//Api for add Ward in data base
router.get("/createWards", checkToken, assembliesController.createWards)
//Api for add Assemblies in data base
router.get("/wardsLists", checkToken, assembliesController.wardsLists)

module.exports = router