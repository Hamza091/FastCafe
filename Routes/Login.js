const express = require('express')
const Login  = require('../Controller/Login')

const router = express.Router()

router.get('/',Login)

module.exports=router