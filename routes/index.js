const express = require('express')
const router = express.Router()
const db = require('../db/database')

router.get('/', (req, res) => {
    db.all('SELECT * FROM event', [], (err, events) => {
        if (err) throw err

        res.render('index', {
            title: 'index',
            events: JSON.stringify(events)
        })
    })
    
})

module.exports = router