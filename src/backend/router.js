const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
	res.send('hello from home router')
})

router.get('/about', (req,res) => {
	res.send('hello from about router')
})

module.exports = router