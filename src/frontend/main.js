

//--VIEWS--//
require('../views/index.html')

//--STYLES--//
require('../styles/main.css')
require('../styles/another.css')

//--SCRIPTS--//
const { consoleLogs } = require('./debug/debug')
const { obj } = require('./debug/object')

//--TEST-CODE--//
console.log('Hello from frontend/main.js')
consoleLogs()
obj.func()