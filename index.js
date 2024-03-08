const express = require('express')
const app = express()

const PORT = 3004

app.get('/',(req,res) => {
    res.send("Hi guys")
})

app.listen(PORT,() => {
    console.log('Server is executed')
})