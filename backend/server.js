import express from 'express'
import authRoutes from './routes/auth.routes.js'
import userRoutes from './routes/user.routes.js'
import connectMongoDB from './DB/connectMongoDB.js'
import dotenv from "dotenv"
import cookieParser from 'cookie-parser'


dotenv.config()

const app=express()
const PORT = process.env.PORT || 500;

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cookieParser())

app.use("/api/auth",authRoutes)
app.use("/api/users",userRoutes)


app.listen(PORT,() => {
    console.log(`server is running on port ${PORT}`)
    connectMongoDB()
})

