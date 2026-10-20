const express = require('express')
const app = express()
require('dotenv').config()
const { connectDB } = require('./config/db')
connectDB()
app.use(express.json())


app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/password', require('./routes/password.routes'))

const port = process.env.PORT
app.listen(port, () => {
    console.log(`server connecting on port: ${port}✅`);
})