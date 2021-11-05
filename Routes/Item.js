const express = require('express')
const addItem  = require('../Controller/AddItem')
const updateItem = require('../Controller/UpdateItem')

const router = express.Router()

router.post('/addItem',addItem)
router.put('/updateItem',updateItem)

module.exports=router