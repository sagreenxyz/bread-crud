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
            bread: Bread[req.params.id],
            index: req.params.id
        })
    } else {
        res.render('error404', { reason: 'Invalid Bread ID' })
    }
})

breads.post('/', (req, res) => {
    if (!req.body.image) {
        req.body.image = 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    }
    if (req.body.hasGluten === 'on') {
        req.body.hasGluten = 'true'
    } else {
        req.body.hasGluten = 'false'
    }
    Bread.push(req.body)
    res.status(303).redirect('/breads')
})

breads.delete('/:id', (req, res) => {
    Bread.splice(req.params.id, 1)
    res.status(303).redirect('/breads')
})

breads.put('/:id', (req, res) => {
    if (req.body.hasGluten === 'on') {
        req.body.hasGluten = 'true'
    } else {
        req.body.hasGluten = 'false'
    }
    Bread[req.params.id] = req.body
    res.status(303).redirect(`/breads/${req.params.id}`)
})

module.exports = breads
