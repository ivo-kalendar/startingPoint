
// import 'webpack-hot-middleware/client?reload=true'

//--VIEWS--// use for hot-reload only for development env //
require('../views/test.html')
require('../views/index.ejs')
require('../views/about.ejs')
require('../views/another.ejs')
require('../views/includeFile.ejs')

//--STYLES--//
require('../styles/main.css')


// //--SCRIPTS--//
// require('./debug/debug')
// const {object} = require('./debug/object')
import obj from './debug/object'
// import sec from './debug/debug'
import consoleLogs from './debug/debug'
// const { consoleLogs, sec } = require('./debug/debug')
// const { obj } = require('./debug/object')

//--TEST-CODE--//
consoleLogs.func1()
consoleLogs.func3()
consoleLogs.func5()
// sec()
obj.func1()
// obj.func2()
obj.func3()
// obj.func4()
obj.func5()

// let arrFunct = async args => {
// 	const { aqwqw, bqwqw} = args
// 	await console.log(`Hello from the future... ${aqwqw} , ${bqwqw}`)
// 	console.log('Done!!!')
// }


// arrFunct({ aqwqw: 5, bqwqw: 2 })