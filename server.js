require('dotenv').config()
const express = require('express')
const handleLogin = require('./Routes/Login')
const bodyParser = require('body-parser')
var mysql = require('mysql2/promise');
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const PORT = process.env.PORT || 8000



var pool = mysql.createPool({
        connectionLimit:5,
        host     : process.env.DB_HOST,
        user     : process.env.DB_USER,
        password : process.env.DB_PASSWORD,
        database : process.env.DB_NAME,
})


global.pool = pool
app.listen(PORT,()=>{
    console.log("server is up...")
    
})
app.use('/api/login',handleLogin)
