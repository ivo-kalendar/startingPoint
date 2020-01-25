

const obj = {
	first: "Name",
	second: "Surname",
	func1: function() {console.log(this)},
	// func2: () => {console.log(this)},
	func3: function() {console.log(`Regular function ${this.first} regular ${this.second}.`)},
	// func4: () => console.log('ARROW FUNCTION: ' + this.obj.first + '. arrow: ' + this.obj.second)
	func5: () => console.log(`Arrow Function working...${obj.first}...${obj.second}...`)
}

export default obj