const express = require('express')
const app = express()

const cors = require('cors')

app.set('port',process.env.PORT || 3000)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use('/api',require('./routes/routes'))

module.exports = app