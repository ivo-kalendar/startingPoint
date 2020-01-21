
// import 'core-js/stable'
import 'regenerator-runtime/runtime'
import 'core-js/es/array'

//--VIEWS--//
require('../views/index.html')

//--STYLES--//
require('../styles/main.css')
require('../styles/another.css')

//--SCRIPTS--//
import { consoleLogs, sec } from './debug/debug'
const { obj } = require('./debug/object')

//--TEST-CODE--//
console.log('Hello from frontend/main.js!!!')
consoleLogs()
sec()
// console.log(obj)
obj.func1()
obj.func2()
obj.func3()
obj.func4()

let arrFunct = async args => {
	const { aqwqw, bqwqw} = args
	await console.log(`Hello from the future. ${aqwqw} , ${bqwqw}`)
	console.log('Done!')
}

arrFunct({ aqwqw: 5, bqwqw: 2 })