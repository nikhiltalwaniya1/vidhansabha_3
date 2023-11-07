const role = {
  admin:1,
  user:2,
  complaintHandler:3
}

const statusCode = {
  success: 200,
  error: 500
}

const userStatus = {
  ACTIVE:"Active",
  INACTIVE:"Inactive"
}

typeOfComplant = {
  SECRET:"Secret",
  SUGGESTION:"Suggestion",
  COMPLANT:"Complant"
}

complaintStatus = {
  Done:"Done",
  Not_Done:"Panding"
}

module.exports = {
  role,
  statusCode,
  userStatus,
  typeOfComplant,
  complaintStatus
}

