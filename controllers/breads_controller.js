const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

breads.get('/', (req, res) => {
    res.render('index')
})

breads.get('/:id', (req, res) => {
    res.send(Bread[req.params.id])
})

module.exports = breads
