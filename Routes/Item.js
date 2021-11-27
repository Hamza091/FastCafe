const express = require('express')
const addItem  = require('../Controller/AddItem')
const updateItem = require('../Controller/UpdateItem')
const deleteItem = require('../Controller/DeleteItem')
const retrieveItem = require('../Controller/RetrieveItem')

const router = express.Router()

router.post('/addItem',addItem)
router.put('/updateItem',updateItem)
router.delete('/deleteItem',deleteItem)
router.get('/retrieveItem',retrieveItem)

module.exports=router