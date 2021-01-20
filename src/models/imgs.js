const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ImgSchema = new Schema({
    url : String
})

module.exports = mongoose.model('img',ImgSchema)