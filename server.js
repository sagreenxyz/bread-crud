require('dotenv').config()
const PORT = process.env.PORT

const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))

app.use(express.static('public'))

app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads!')
})

const breadsController = require('./controllers/breads_controller')
app.use('/breads', breadsController)

app.get('*', (req, res) => {
    res.render('error404', { reason: 'Invalid Route' })
})

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}, http://localhost:${PORT}`)
})