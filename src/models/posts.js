const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title : String,
    subtitle : String,
    description : {
        title : String,
        paragraph : String
    },
    contact : [{
        name : String,
        url : String
    }],
    images : [String]
})

module.exports = mongoose.model('post',PostSchema)