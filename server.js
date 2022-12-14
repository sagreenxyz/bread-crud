require('dotenv').config()
const PORT = process.env.PORT

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true },
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)

const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))

const methodOverride = require('method-override')
app.use(methodOverride('_method'))

app.use(express.static('public'))

app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads!')
})

const breadsController = require('./controllers/breads_controller')
app.use('/breads', breadsController)

const bakersController = require('./controllers/bakers_controller')
app.use('/bakers', bakersController)

app.get('*', (req, res) => {
    res.render('error404', { reason: 'Invalid Route' })
})

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}, http://localhost:${PORT}`)
})