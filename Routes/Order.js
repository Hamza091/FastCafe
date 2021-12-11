const express = require('express')
const retrieveOrder = require('../Controller/Orders/RetrieveOrder')
const updateOrderStatus = require('../Controller/Orders/UpdateOrderStatus')

const router = express.Router()


router.get('/retrieveOrder',retrieveOrder)
router.put('/updateStatus',updateOrderStatus)

module.exports=router