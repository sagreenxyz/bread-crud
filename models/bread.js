const mongoose = require('mongoose')
const { Schema } = mongoose

const breadSchema = new Schema({
    name: { type: String },
    hasGluten: { type: Boolean },
    image: { type: String }
})

const Bread = mongoose.model('Bread', breadSchema)

module.exports = Bread
