const express = require('express')
const addCafetarian  = require('../Controller/Cafetarian/AddCafetarian')
const updateCafetarian = require('../Controller/Cafetarian/UpdateCafetarian')
const deleteCafetarian = require('../Controller/Cafetarian/DeleteCafetarian')
const retrieveCafetarian = require('../Controller/Cafetarian/RetrieveCafetarian')

const router = express.Router()

router.post('/addCafetarian',addCafetarian)
router.put('/updateCafetarian',updateCafetarian)
router.delete('/deleteCafetarian',deleteCafetarian)
router.get('/retrieveCafetarian',retrieveCafetarian)

module.exports=router