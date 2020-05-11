const express = require('express')
const path = require('path')
const moment = require('moment')

const app = express()

app.use(express.urlencoded({extended: false}))

app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname, 'public')))

/*app.use(require('connect-flash')())
app.use((req, res, next) => {
    res.locals.messages = require('express-messages')(req,res)
})*/

const index = require('./routes/index')
app.use('/', index)

const events = require('./routes/events')
app.use('/events',events)

app.listen(3000, () => {
    console.log('App listening in port 3000')
})