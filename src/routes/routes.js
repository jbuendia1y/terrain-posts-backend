const express = require('express')
const router = express.Router()

const Posts = require('../models/posts')

router.get('/',async(req,res)=>{
    
    const posts = await Posts.find()
    res.send(posts)
})

router.get('/post/:_id',async(req,res)=>{
    const post = await Posts.find(req.params)
    res.send(post)
})

module.exports = router