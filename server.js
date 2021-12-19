require('dotenv').config()
const express = require('express')
const handleLogin = require('./Routes/Login')
const handleItem = require('./Routes/Item')
const handleCafetarian = require('./Routes/Cafetarian')
const handleOrder = require('./Routes/Order')
const bodyParser = require('body-parser')
const path = require('path')
const {createClient} = require('@supabase/supabase-js')
const http  = require("http")
const socketIo = require("socket.io")
const cors = require("cors")

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(express.static('./Client/build'))
app.use(cors())

const PORT = process.env.PORT || 8000

const server = http.createServer(app)

const io = socketIo(server,{
    cors: {
    //   origin: "https://example.com",
      // origin: "http://localhost:3000",
      origin: "*",
      methods: ["GET", "POST"],
    //   allowedHeaders: ["my-custom-header"],
    //   credentials: true
    }
  })

//  const supabase = createClient('https://yvwetawhxztjsjgaxuon.supabase.co','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNTQ4NTU4NSwiZXhwIjoxOTUxMDYxNTg1fQ.OApMwM_MiVg33icr0Y6Llzw-dl9sIC8rHY2D2g9MKZw')
const supabase = createClient('https://bskteeklvsixrtwmuqbp.supabase.co','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjY2OTY2NSwiZXhwIjoxOTUyMjQ1NjY1fQ.airXVJ1JRpY4niP_S8YPRaUUmY7Tza_AhMwkWFijpNE')



global.supabase=supabase

async function checkOrdersUpdate(){
    var ord = await supabase.from('orders').select(`*,students(*),order_items(*),item(*)`).order('order_id',{ascending:false})
    console.log(ord)
    io.emit("Order",ord.data)
}

server.listen(PORT,()=>{
    console.log("server is live...")

    supabase
    .from('orders')
    .on('INSERT', payload => {
        console.log('Change received!', payload.new)
        checkOrdersUpdate()
    })
    .subscribe()

})
app.use('/api/login',handleLogin)
app.use('/api/Item',handleItem)
app.use('/api/Cafetarian',handleCafetarian)
app.use('/api/Order',handleOrder)

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "Client", "build", "index.html"));
});

