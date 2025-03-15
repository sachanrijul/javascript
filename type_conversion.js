// converting strings to numbers:
// using ::-->  Number()
console.log(Number("3.14"))  // 3.14
console.log(Number(" "))     // 0
console.log(Number(""))      // 0
console.log(Number("23 34")) //NaN
console.log(Number("rijul")) //NaN

// we can also use Unary + Operator

console.log(+ "45")

// some more methods for specific purpose 
// parseFloat() ::--> parse a string and returns a floating point number 
// parseInt() ::--> parses a string and returns an integer

// ----------------------------------------------------------------------------------

// converting numbers to strings

// methods :
// String() ::--> converts to String
// toString() ::--> converts to String
// toExponential() ::--> returns a string with a number rounded and written using exponention notation
// toFixed() ::--> returns an string with a number rounded and written with a specified number of decimals 
// toPrecision() ::--> returns a string with a number written with a specified length

console.log(String(45)) // 45
console.log(String()) // (empty space)
console.log(String(undefined)) // undefined
console.log(String(null)) // null 
console.log(String(true)) // true
console.log(String(false)) // false

console.log((123).toString()) // correct answer --> 123
console.log((123).toString) // [Function: toString]
// console.log((123).toString(345)) // ERROR
console.log(toString(345)) // object undefined


// -------------------------------------------------------------------------------------------
// converting booleans to numbers

console.log(Number(false)) // returns 0 
console.log(Number(true)) // returns 1


// ------------------------------------------------------------------------------------------
// converting booleans to strings

console.log(String(false)) // "false"
console.log(String(true)) // "true"


// ------------------------------------------------------------------------------------------
// automatic type conversion 

console.log( 5 + 0 ) // returns 5  (because null is converted to 0)
console.log( "5" + null ) // returns "5null"  (because null is converted to "null")
console.log( "5" + 2 ) // returns "52"  (because 2 is converted to "2")
console.log( "5" - 2 ) // returns 3  (because "5" is converted to 5) 
console.log( "5" * "2" ) // returns 10  (because "5" and "2" are converted to 5 and 2) 


// ------------------------------------------------------------------------------------------
// automatic string conversion

// if myVar = {name:"Fjohn"}  // toString converts to "[object Object]"
// if myVar = [1,2,3,4]       // toString converts to "1,2,3,4"
// if myVar = new Date()      // toString converts to "Fri Jul 18 2014 09:08:55 GMT+0200"
// if myVar = 123             // toString converts to "123"
// if myVar = true            // toString converts to "true"
// if myVar = false           // toString converts to "false"


// -------------------------------------------------------------------------------------------

// if any more details needed on this go "w3school.com"