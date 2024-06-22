import express from 'express'

import authRoutes from './routes/auth.routes.js'
import userRoutes from './routes/user.routes.js'
import postRoutes from './routes/post.routes.js'

import connectMongoDB from './DB/connectMongoDB.js'
import dotenv from "dotenv"
import cookieParser from 'cookie-parser'
import {v2 as cloudinary }from 'cloudinary'



dotenv.config()


cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
});

const app=express()
const PORT = process.env.PORT || 500;

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cookieParser())

app.use("/api/auth",authRoutes)
app.use("/api/users",userRoutes)
app.use("/api/posts",postRoutes)


app.listen(PORT,() => {
    console.log(`server is running on port ${PORT}`)
    connectMongoDB()
})

