const express = require('express');
const cookieParser = require('cookie-parser')
const loginRouter = require('./routes/login')
const groupRouter = require('./routes/group')
const dotenv = require('dotenv').config();

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use('/', loginRouter)
app.use('/group', groupRouter)


app.listen(3000, () => {
    console.log("App running on port 8000")
})