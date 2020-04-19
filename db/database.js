const express = require('express')
const sqlite3 = require('sqlite3').verbose()


let db = new sqlite3.Database('timetable.db', (err) => {
    if (err) throw err
    db.run(`CREATE TABLE IF NOT EXISTS event(
        rid INTEGER PRIMARY KEY AUTOINCREMENT,
        ename STRING,
        teacher STRING,
        place STRING,
        day STRING,
        starttime STRING,
        endtime STRING
    )`)
    console.log('connected to database')
})

module.exports = db