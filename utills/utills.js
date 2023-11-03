const encryptionKey = process.env.ENCRYPTIONKEY
const TOKEN_KEY = process.env.TOKEN_KEY
const crypto = require('crypto');
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')

//This function is used for encrypt given password
module.exports.encryptPassword = async (password) => {
  try {
    return new Promise((resolve, reject) => {
      bcrypt.hash(password, 10, (err1, hash) => {
        if (err1) {
          logger.error("Error in encryptPassword function line 40... " + err1)
          reject(err1)
        }
        resolve(hash)
      })
    })
  } catch (error) {
    console.log("Error in encryptPassword function... ", error)
    // logger.error("Error in encryptPassword function... " + error)
    return Promise.reject(error)
  }
}

//This function is used for create token
module.exports.createToken = async (userData) => {
  return new Promise((resolve, reject) => {
    const token = jwt.sign(userData, TOKEN_KEY, { expiresIn: "24h" })
    resolve(token)
  })
}

// This function is use for remove duplicate entry of array
module.exports.removeDuplicateValueInArray = async (array) => {
  const newArray = [...new Set(array)]
  return newArray;
}

//This function is used for generate rendom password
module.exports.generateRandomPassword = async (length) => {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

//this function is used for compare give password
module.exports.comparePassword = async (password, newPassword) => {
  try {
    console.log("password=====", password);
    console.log("newPassword=====", newPassword);
    return new Promise(async (resolve, reject) => {
      const result = await bcrypt.compare(newPassword,password)
      resolve(result)
    })
  } catch (error) {
    console.log("error in comparePassword", error);
    return Promise.reject(error)
  }
}