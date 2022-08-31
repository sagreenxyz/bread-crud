const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

breads.get('/', (req, res) => {
    res.render('index', {
        breads: Bread,
        title: 'Index Page'
    })
})

breads.get('/:id', (req, res) => {
    res.render('show', {
        bread: Bread[req.params.id]
    })
})

module.exports = breads
