import express from  'express'
import cors from 'cors'
import 'dotenv/config'
import { connect } from 'mongoose'
import connectDB from './configs/mongodb.js'
import { clerkWebhooks } from './controllers/webhooks.js'
//initialize express 
const app=express()

//connect to database
await connectDB()

//middleware
app.use(cors())

//Routes
app.get('/',(req,res)=>res.send("API WORKING"))
app.post('/clerk',express.json(), clerkWebhooks)
//Port
const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})