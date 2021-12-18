const express = require('express')
const addItem  = require('../Controller/Items/AddItem')
const updateItem = require('../Controller/Items/UpdateItem')
const deleteItem = require('../Controller/Items/DeleteItem')
const retrieveItem = require('../Controller/Items/RetrieveItem')
const addCategory = require('../Controller/Items/AddCategory')
const retrieveCategory = require('../Controller/Items/RetrieveCategory')
const retrieveSales = require('../Controller/Items/RetrieveSales')

const router = express.Router()

router.post('/addItem',addItem)
router.put('/updateItem',updateItem)
router.put('/deleteItem',deleteItem)
router.get('/retrieveItem',retrieveItem)
router.post('/addCategory',addCategory)
router.get('/retrieveCategory',retrieveCategory)
router.get('/retrieveSales',retrieveSales)

module.exports=router