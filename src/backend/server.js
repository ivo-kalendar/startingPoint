
const express = require('express')
const app = express()

const webpack = require('webpack')
const config = require('../config/webpack.config.js')
const compiler = webpack(config)

const webpackDevMiddleware = require('webpack-dev-middleware')(compiler, config.devServer)
const webpackHotMiddleware = require('webpack-hot-middleware')(compiler)


app.set('views', './src/views')
app.set('view engine', 'ejs')
app.use('/', require('./router'))

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(webpackDevMiddleware)
app.use(webpackHotMiddleware)
app.use(express.static('./dist'))


app.listen(3000, () => {console.log(`Server started on port 3000...`)})


