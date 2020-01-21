
const express = require('express')
const app = express()

const webpack = require('webpack')
const config = require('../config/webpack.config.js')
const compiler = webpack(config)
const webpackDevMiddleware = require('webpack-dev-middleware')(compiler, config.devServer)


app.set('views', './src/views')
app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(express.static('./dist'))

app.use(webpackDevMiddleware)
app.use('/', require('./router'))


app.listen(3000, () => {console.log(`Server started on port 3000...`)})


