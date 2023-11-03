const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const dotenv = require("dotenv");
const db = require("./db_connection/connection")
dotenv.config();
const cors = require("cors");
const router = require("./api/router")
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

var corsOptions = {
  origin: "*",
};
app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use("/api/v1", router);
app.use("/vidhansabha-api",swaggerUi.serve, swaggerUi.setup(swaggerDocument))


app.listen(process.env.PORT, ()=>{
  console.log('server started....', process.env.PORT)
})