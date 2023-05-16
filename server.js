import express from "express"
import colors from "colors"
import dotenv from 'dotenv'
import morgan from "morgan"
import connectDB from "./config/db.js"
import authRoute from './routes/authRoute.js'
import cors from 'cors'

// routes
import accesoriesRouter from './routes/accessories.js'
import macbookRouter from './routes/machbook.js'
import ipadRouter from './routes/ipad.js'
import mobileRouter from './routes/mobile.js'



// configure env
dotenv.config()
const app= express()

// database config
connectDB()

// Middlewares
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())
const PORT = process.env.PORT || 8000

app.use("/accesories",accesoriesRouter);
app.use("/macbook",macbookRouter);
app.use("/ipad",ipadRouter);
app.use("/mobile",mobileRouter);

// routes
app.use('/api/v1/auth', authRoute)

// rest api
app.get('/', (req, res)=>{
   res.send({message: "Welcome to ecommerce application"})
})

app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}` .bgCyan.white)
})