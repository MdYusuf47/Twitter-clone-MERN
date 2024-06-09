import express from 'express'
import authRoutes from './routes/auth.routes.js'
import connectMongoDB from './DB/connectMongoDB.js'
import dotenv from "dotenv"


dotenv.config()

const app=express()
const PORT = process.env.PORT || 500;

app.use("/api/auth",authRoutes)


app.listen(PORT,() => {
    console.log(`server is running on port ${PORT}`)
    connectMongoDB()
})