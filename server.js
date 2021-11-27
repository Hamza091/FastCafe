require('dotenv').config()
const express = require('express')
const handleLogin = require('./Routes/Login')
const handleItem = require('./Routes/Item')
const bodyParser = require('body-parser')
const {createClient} = require('@supabase/supabase-js')
//var mysql = require('mysql2/promise');
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const PORT = process.env.PORT || 8000

const supabase = createClient('https://yvwetawhxztjsjgaxuon.supabase.co','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNTQ4NTU4NSwiZXhwIjoxOTUxMDYxNTg1fQ.OApMwM_MiVg33icr0Y6Llzw-dl9sIC8rHY2D2g9MKZw')
global.supabase=supabase

app.listen(PORT,()=>{
    console.log("server is live...")
        
})

app.use('/api/login',handleLogin)
app.use('/api/Item',handleItem)