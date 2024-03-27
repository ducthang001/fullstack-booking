import express from "express"
import bodyParser from "body-parser"
import viewEngine from "./config/viewEngine"
import initWebRoutes from "./routes/web"
import connectDB from "./config/connectDB"
require('dotenv').config()

const PORT = process.env.PORT || 5000

let app = express()

// config app

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

viewEngine(app)
initWebRoutes(app)

connectDB()

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})