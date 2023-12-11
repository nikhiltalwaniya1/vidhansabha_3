const express = require('express')
const router = express.Router()
const authController = require("./auth/authCotroller")
const { checkToken } = require("../utills/middileware")
const complaintController = require("./complaint/complaintController")
const assembliesController = require("./Assemblies/assembilesController")
//Api for create user
router.post("/createUser", authController.createUser)
//Api for add Assemblies in data base
router.get("/createAssemblies",  assembliesController.createAssemblies)
//Api for login
router.post("/login", authController.login)
//Api for create complaint 
router.post("/createComplaint", checkToken, complaintController.createComplaint)
//Api for add Assemblies in data base
router.get("/assembliesList", assembliesController.assembliesList)
//Api for add Ward in data base
router.get("/createWards", assembliesController.createWards)
//Api for add Assemblies in data base
router.get("/wardsLists", assembliesController.wardsLists)
//Api for create Suggestion 
router.post("/createSuggestion", checkToken, complaintController.createSuggestion)
//Api for update complaint 
router.post("/updateComplaint", checkToken, complaintController.updateComplaint)
//Api for complaint details with user id
router.get("/complaintDetailsWithUserId", checkToken, complaintController.complaintDetailsWithUserId)
//Api for complaint details with Hendlar id
router.get("/complaintDetailsWithHandlerId", checkToken, complaintController.complaintDetailsWithHandlerId)
//Api for all complaint details 
router.get("/allcomplaintDetails", checkToken, complaintController.allcomplaintDetails)
//Api for suggestion details with user id
router.get("/suggestionDetailsWithUserId", checkToken, complaintController.suggestionDetailsWithUserId)
//Api for all suggestion details 
router.get("/allsuggestionDetails", checkToken, complaintController.allsuggestionDetails)
//Api for Resolve by Hendler 
router.post("/complaintResolveAndClose", checkToken, complaintController.complaintResolve)

module.exports = router