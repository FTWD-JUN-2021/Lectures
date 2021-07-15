const express = require('express')
const router = express.Router()
const User = require('./models/User')

router.get('/', (req, res) => {
    res.json({ hello: true })
})

router.get('/snack', (req, res) => {
    res.json({ pickle: 'rick' })
})


router.get('/snack/:whichOne', (req, res) => {
    // console.log(req.params)
    res.json({ 'Your snack is an': req.params.whichOne })
})

router.get('/puppy', (req, res) => {
    // console.log(req.query)
    res.json({ 'Youre fav puuppy is a ': req.query.breed })
})

router.post('/signUp', (req, res) => {
    console.log(req.body)
    User.create(req.body).then(user => {
        res.json(user)
    })
})

router.get('/getAllTheUsersFromTheServer', (req, res) => {
    User.find().then(users => {
        res.json(users)
    })
})

module.exports = router
