require('dotenv').config()
const express = require('express')
const handleLogin = require('./Routes/Login')
const handleItem = require('./Routes/Item')
const handleCafetarian = require('./Routes/Cafetarian')
const bodyParser = require('body-parser')
const path = require('path')
const {createClient} = require('@supabase/supabase-js')
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(express.static('./Client/build'))

const PORT = process.env.PORT || 8000

 //const supabase = createClient('https://yvwetawhxztjsjgaxuon.supabase.co','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNTQ4NTU4NSwiZXhwIjoxOTUxMDYxNTg1fQ.OApMwM_MiVg33icr0Y6Llzw-dl9sIC8rHY2D2g9MKZw')
const supabase = createClient('https://bskteeklvsixrtwmuqbp.supabase.co','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjY2OTY2NSwiZXhwIjoxOTUyMjQ1NjY1fQ.airXVJ1JRpY4niP_S8YPRaUUmY7Tza_AhMwkWFijpNE')

global.supabase=supabase


app.listen(PORT,()=>{
    console.log("server is live...")
    
})
app.use('/api/login',handleLogin)
app.use('/api/Item',handleItem)
app.use('/api/Cafetarian',handleCafetarian)

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "Client", "build", "index.html"));
});

