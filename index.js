const express = require('express')
const app = express()
const router = require('./routes/routes')
const PORT = 3004


app.use(express.json())
app.use('/api',router)

app.listen(PORT,() => {
    console.log('Server is executed')
})