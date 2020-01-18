const express = require('express')
const router = express.Router()
const path = require('path')
const views = path.join(__dirname, '../views/')

router.get('/', (req,res) => res.render('index'))
router.get('/about', (req,res) => res.render('about'))
router.get('/test', (req,res) => res.sendFile(path.join(`${views}test.html`)))

module.exports = router