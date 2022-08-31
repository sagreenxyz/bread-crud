require('dotenv').config()
const PORT = process.env.PORT

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads!')
})

const breadsController = require('./controllers/breads_controller')
app.use('/breads', breadsController)

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}, http://localhost:${PORT}`)
})