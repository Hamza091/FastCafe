require('dotenv').config()
const express = require('express')
var mysql = require('mysql');

const app = express()

const PORT = process.env.PORT || 8000

var connection = mysql.createConnection({
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_NAME,
});

connection.connect(function(err){
    if(err){
        console.log(err)
        console.log("Can't connect DB...")
    }
    else{
        app.listen(PORT,()=>{
            console.log("server is up...")
            // connection.query("CREATE TABLE user(name varchar(30),email varchar(30))",(err,rows,field)=>{
            //     if(err){
            //         console.log('something went wrong')
            //     }
            //     else{
            //         console.log('created table')
            //     }
            // })
            
        //     connection.query("INSERT INTO user VALUES('hamza','xyz')",(err,rows,field)=>{
        //         if(err){
        //             console.log('something went wrong')
        //         }
        //         else{
        //             console.log('created table')
        //         }})
            
        //     connection.query("SELECT * FROM user",(err,rows,field)=>{
        //         if(err){
        //             console.log(err)
        //         }
        //         else{
        //             console.log(rows)
        //             console.log(field)
        //         }
        //     })
        })
    }
})

module.exports = connection;