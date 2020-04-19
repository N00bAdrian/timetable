const express = require('express')
const router = express.Router()
const db = require('../db/database')

router.get('/addevent', (req, res) => {
    res.render('addevent', {
        title: 'Add event'
    })
})

router.post('/addevent', (req, res) => {
    const ename = req.body.ename
    const teacher = req.body.teacher
    const place = req.body.place
    const day = req.body.day
    const starttime = req.body.starttime
    const endtime = req.body.endtime

    db.run('INSERT INTO event(ename, teacher, place, day, starttime, endtime) VALUES(?,?,?,?,?,?)',[ename, teacher, place, day, starttime, endtime], (err) => {
        if (err) throw err
        console.log('Row added')

        res.render('addevent', {
            title: 'Add event',
            success: {
                messages: ['Row added']
            }
        })
    })    
})

module.exports = router