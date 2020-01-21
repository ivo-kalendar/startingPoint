
// import 'core-js/stable'
require('regenerator-runtime/runtime')
require('webpack-hot-middleware/client?reload=true')
require('core-js/es/array')

//--VIEWS--// use only for development env //
// require('../views/index.ejs')
// require('../views/about.ejs')
require('../views/test.html')

//--STYLES--//
require('../styles/main.css')
require('../styles/another.css')


// //--SCRIPTS--//
import { consoleLogs, sec } from './debug/debug'
const { obj } = require('./debug/object')

//--TEST-CODE--//
console.log('Hello from frontend/main.js!!!')
consoleLogs()
sec()
// alert('hello')
console.log(obj)
obj.func1()
obj.func2()
obj.func3()
obj.func4()

let arrFunct = async args => {
	const { aqwqw, bqwqw} = args
	await console.log(`Hello from the future. ${aqwqw} , ${bqwqw}`)
	console.log('Done!!!')
}


arrFunct({ aqwqw: 5, bqwqw: 2 })