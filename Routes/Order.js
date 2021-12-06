const express = require('express')
const retrieveOrder = require('../Controller/Orders/RetrieveOrder')

const router = express.Router()


router.get('/retrieveOrder',retrieveOrder)

module.exports=router