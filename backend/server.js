import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'

import textRoutes from './routes/text.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json())

app.use('/api/texts', textRoutes)

app.listen(PORT, () => {
    connectDB()
    console.log(`Server started at http://localhost:${PORT}`)
})