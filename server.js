require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const userRoute = require('./routes/userRoute')
const trainerRoute = require('./routes/trainerRoute')
const errorMiddleware = require('./middleware/errorMiddleware')
const cors = require('cors')

const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT
const FRONT_END = process.env.FRONT_END

app.use(express.json())
app.use('/api/user', userRoute)
app.use('/api/trainer', trainerRoute)
app.use(cors(corsOptions))
app.use(errorMiddleware)

var corsOptions = {
    origin: FRONT_END,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
  

app.get('/', (req,res)=>{
throw new Error('fake error')
})


mongoose.connect(MONGO_URL)
.then(()=>{
    console.log('connected to MONGO')
    app.listen(PORT, ()=>{
        console.log(`NODE API app is running on port ${PORT}`)
        })
}).catch(()=>{
    console.log(error)
})