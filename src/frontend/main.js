
require('../styles/main.css')
require('../styles/another.css')
const { consoleLogs } = require('./debug/debug')
const { obj } = require('./debug/object')


document.body.appendChild(component())

console.log('Hello from frontend/main.js')
consoleLogs()
obj.func()