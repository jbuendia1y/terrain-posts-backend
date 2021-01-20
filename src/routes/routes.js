const express = require('express')
const router = express.Router()

const Imgs = require('../models/imgs')

router.get('/',async(req,res)=>{
    const imgs = await Imgs.find()
    res.send(imgs)
})

module.exports = router