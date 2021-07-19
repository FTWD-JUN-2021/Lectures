const express = require('express')
const router = express.Router()
const Post = require('./models/Post')

/**ALL OUR BACKEND ROUTES */


router.get('/', (req, res) => {
    res.json({ serverWorking: true })
})



router.post('/add-post', (req, res) => {
    Post.create(req.body).then(post => {
        res.json(post)
    })
})


router.get('/all-the-posts', (req, res) => {
    Post.find().then(posts => {
        res.json(posts)
    })
})



module.exports = router