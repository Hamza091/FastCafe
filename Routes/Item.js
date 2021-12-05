const express = require('express')
const addItem  = require('../Controller/Items/AddItem')
const updateItem = require('../Controller/Items/UpdateItem')
const deleteItem = require('../Controller/Items/DeleteItem')
const retrieveItem = require('../Controller/Items/RetrieveItem')
const addCategory = require('../Controller/Items/Addcategory')
const retrieveCategory = require('../Controller/Items/Retrievecategory')

const router = express.Router()

router.post('/addItem',addItem)
router.put('/updateItem',updateItem)
router.delete('/deleteItem',deleteItem)
router.get('/retrieveItem',retrieveItem)
router.post('/addCategory',addCategory)
router.get('/retrieveCategory',retrieveCategory)

module.exports=router