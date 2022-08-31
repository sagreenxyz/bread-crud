const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

breads.get('/', (req, res) => {
    res.render('index', {
        breads: Bread,
        title: 'Index Page'
    })
})

breads.get('/new', (req, res) => {
    res.render('new')
})

breads.get('/:id', (req, res) => {
    if (Bread[req.params.id]) {
        res.render('show', {
            bread: Bread[req.params.id]
        })
    } else {
        res.render('error404', { reason: 'Invalid Bread ID' })
    }
})

breads.post('/', (req, res) => {
    if (req.body.hasGluten === 'on') {
        req.body.hasGluten = 'true'
    } else {
        req.body.hasGluten = 'false'
    }
    Bread.push(req.body)
    res.redirect('/breads')
})

module.exports = breads
