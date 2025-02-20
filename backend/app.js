const express = require("express");
const ErrorHandler = require('.backend/util/Error')
const cors = require('cors')
const user = require(".backend/Control/user")
const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


require('dotenv').config({path:'backend/config/.env'})

app.use('/api/v2',user)
app.use(ErrorHandler)

module.exports = app;


