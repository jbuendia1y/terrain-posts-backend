const mongoose = require('mongoose')

const { URI } = process.env

mongoose.connect(URI,{
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(db => console.log('DB CONNECT'))
    .catch(err => console.log(err))