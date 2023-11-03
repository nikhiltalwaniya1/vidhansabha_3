const jwt = require('jsonwebtoken')

//This function is used for check the token is vaild or not
module.exports.checkToken = async (req, res, next) => {
  try {
    let token = req.headers["x-access-token"] || req.headers.authorization;
    if (!token) {
      res.status(401).send({
        errors: {
          type: "Authentication Error",
          message: "Required authorization header not found.",
        },
      });
      return;
    }
    if (token.startsWith("Bearer")) {
      // Remove Bearer from string
      token = token.slice(7, token.length);
    }
    jwt.verify(token, process.env.TOKEN_KEY, (err, decoded) => {
      if (err) {
        return res.status(401).send({
          success: 0,
          message: err + "An error has occurred",
        });
      } else {
        req.decoded = decoded;
        return next();
      }
    })
  } catch (error) {
    logger.error("error in checkToken middleware line no 32  " + error)
    return error
  }
}