const express = require('express')
const router = express.Router()
const path = require('path')
const views = path.join(__dirname, '../views/')

const user1 = 'Hello from backend/router.js'
const consoleLog = function() { console.log('I am writing in the server console...')}

router.get('/', (req,res) => res.render('index', {user: user1, theConsole: consoleLog()}))
router.get('/about', (req,res) => res.render('about', {user: user1, theConsole: consoleLog()}))
router.get('/test', (req,res) => res.sendFile(path.join(`${views}test.html`)))
router.get('/another', (req,res) => res.render('another', {views: views,user: user1, theConsole: consoleLog()}))

module.exports = router