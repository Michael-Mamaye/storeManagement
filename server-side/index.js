import express  from "express";
import cors from "cors"
import mongoose from "mongoose";
import userRouter from "./routes/userRoutes.js";
import dotenv from 'dotenv'
const app =express()
const PORT=process.env.PORT||5000

app.use(cors())
app.use(express.json())

if(process.env.NODE_ENV !=='production'){
    dotenv.config();
}

app.use(express.urlencoded({extended:false}))

mongoose.connect('mongodb://localhost:27017/ReactAdminTrialStoreManagement')

const db=mongoose.connection
db.once('open',()=>{console.log("connected successfully")})

app.use('/',userRouter)

app.listen(PORT,()=>{
    console.log("running on port 5000")
})

