
const express = require('express')
const app = express()

app.use(express.static('./dist'))
app.use('/', require('./router'))

app.listen(3000, () => {console.log(`Server started on port 3000...`)})