const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread')

breads.get('/', (req, res) => {
    Bread.find()
        .then(foundBreads => {
            res.render('index', {
                breads: foundBreads,
                title: 'Index Page'
            })
        })
})

breads.get('/new', (req, res) => {
    res.render('new')
})

breads.get('/:id/edit', (req, res) => {
    res.render('edit', {
        bread: Bread[req.params.id],
        index: req.params.id
    })
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
        req.body.image = undefined
    }
    if (req.body.hasGluten === 'on') {
        req.body.hasGluten = 'true'
    } else {
        req.body.hasGluten = 'false'
    }
    Bread.create(req.body)
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
