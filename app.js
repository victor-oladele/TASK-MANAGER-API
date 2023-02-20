const express = require('express')
const app = express()
const connectdb = require('./db/connect')
const errorhandler = require('./middleware/errorhandler')
const notfound = require('./middleware/notfound')
const taskroutes = require('./routes/taskroutes')
require('dotenv').config()


const port = process.env.PORT || 3500

// middleware

app.use(express.json())
app.use(express.static('./public'))



// route

app.use('/api/v1/tasks' , taskroutes )




// errorhandler middleware

app.use(errorhandler)
app.use(notfound)
const start = async()=>{
    try {
        connectdb(process.env.MONGO_URI)
        app.listen(port , ()=>{
            console.log(`server running on port ${port}`)
        })
    } catch (error) {
        
    }
}

start()