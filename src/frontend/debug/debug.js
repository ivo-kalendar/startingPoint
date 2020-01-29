

// const sec = () => console.log('Hello from sec debug.js')
// const consoleLogs = () => console.log(`Hello from consoleLogs debug.js ${new Date()}`)

if (document.querySelector('p')) {
	const p = document.querySelector('p').style
	p.margin = '5em'
	p.color = 'rgb(250, 0, 255)'
}

console.log('hello from debug')





const consoleLogs = {
	first: "Name",
	second: "Surname",
	func1: function() {console.log(this)},
	// func2: () => {console.log(this)},
	func3: function() {console.log(`Regular function ${this.first} regular ${this.second}.`)},
	// func4: () => console.log('ARROW FUNCTION: ' + this.obj.first + '. arrow: ' + this.obj.second)
	func5: () => console.log(`Arrow Function working...${consoleLogs.first}...${consoleLogs.second}...`)
}

// export default obj







// module.exports = {sec, consoleLogs}
// export default sec;
export default consoleLogs
