let a = 32.54  // a number with decimals 
let b = 34  // a number without decimals 
let c = 32e6  // large number declared with exponent notation
let d = 444444444444444   // integers are accurate up to 15 digits
let hex = 0x345 // hexadecimal is assigned like this
let bin = 0b101010  // binary is assigned like this
let oct = 0o456  // octal is assigned like this
// js numbers are always 64-bit floating point 
// 52 bits(0 - 51){value(aka fraction/mantissa)} , 11 bits(52 - 62){exponent} , 1 bit(63){sign}
// The maximum number of decimals is 17.

// some examples of adding numbers and strings :

let e = 10
let f = 20
console.log( e + f ) // 30

let g = "10"
let h = "20"
console.log( g + h ) // 1020

let i = 10
let j = "20"
console.log( i + j ) // 1020

let k = "10"
let l = 20
console.log( k + l ) // 1020

console.log("The result is : " + 10 + 20) // The result is : 1020  (common error point)

let m = 10 
let n = 20 
let o = "30"
console.log( m + n + o ) // 3030

// numeric strings

let p = "100"
let q = "10"
console.log( p / q ) // 10 (other than + operation js convert strings to numbers)
console.log( p * q ) // 1000 
console.log( p - q ) // 90
console.log( p + q ) // 10010 (only this will change)

// NaN - Not a number :

console.log( 100 / "apple" ) // NaN
console.log( 100 / "10" ) // 10
console.log( NaN + 34 ) // NaN
console.log( NaN + "34" ) // NaN34
console.log(typeof NaN) // number

// Infinity : (infinity is the value javascript will return if you calculate a number outside the largest possible number)

let myNumber = 2
while(myNumber != Infinity){
    myNumber = myNumber * myNumber
}
console.log(myNumber) // Infinity 

console.log( 10 / 0 ) // Infinity
console.log( 10 / -0 ) // -Infinity
console.log(typeof Infinity) // number

// Hexadecimal : (js interprets numberic constants as hexadecimal if they are preceeded by 0x.)
// To be in the safe side `do not write a number with a leading zero (like 04)`. It will interpreted like octal number.

// Js by default displays numbers as base 10 decimals. But you can use the toString() method to output numbers from base 2 to base 36.
// Hexadecimal is base 16. Decimal is base 10. Octal is base 8. Binary is base 2.

let r = 64
console.log(r.toString(2))  // 1000000 (binary)
console.log(r.toString(8))  // 100 (octal)
console.log(r.toString(10))  // 64 (decimal)
console.log(r.toString(12))  // 54 
console.log(r.toString(16))  // 40 (hexadecimal)
console.log(r.toString(32))  // 20

// JavaScript numbers as objects :
let s = new Number(45)
let t = 45
console.log(typeof s) // object
console.log(s == t)  // true (only checks the value)
console.log(s === t)  // false (checks both the things value and type) 
// comparing two Javascript objects always returns false.  

// ------------- Number methods ---------------------------------------------------------------------------------

// toString()  {returns a number as a string}
console.log(123..toString())  // '123'
console.log((123).toString())  //  '123'
console.log((100 + 23).toString())  //  '123'

// The toExponential() nethod {returns a string with a number rounded and written using exponential notation}
console.log(4.324.toExponential(2))  // 4.32e+0  (returns to the digits what we give input to the toExponential() method)
console.log(6.34568.toExponential(4))  // 6.3457e+0

// The toFixed() method {returns a string with the number written with a specified number of decimals}
console.log(10.3456.toFixed(0))  // 10  (rounds off to the digit we give input in the toFixed() mehtod)
console.log(10.3456.toFixed(2))  // 10.35
console.log(10.3456.toFixed(6))  // 10.345600  (also add zeros at the end if needed)

// The toPrecision() method  {returns a string with a number  written a specified length}
console.log(45.3498.toPrecision())  // 45.3498 
console.log(45.3498.toPrecision(2))  // 45
console.log(45.3498.toPrecision(5))  // 45.350 (it counts total number of digits of input and also rounds off if needed)

// The valueOf() method  {returns a number as a number}
console.log(456..valueOf()) // 456
console.log((456).valueOf())  //456
// it generally used to convert object(Number) to primitive value number.

// The Number() method {method can be used to convert javascript variables to numbers}
console.log(Number(true))       //  1
console.log(Number(false))      //  0
console.log(Number("10"))       //  10 
console.log(Number("  10"))     //  10 
console.log(Number("10  "))     //  10
console.log(Number("  10  "))   //  10
console.log(Number("10.33"))    //  10.33
console.log(Number("10,33"))    //  NaN
console.log(Number("10 33"))    //  NaN
console.log(Number("john"))     //  NaN
console.log(Number(null))       //  0
console.log(Number(undefined))  // NaN

// The parseINT() method  {parses a string and returns a whole number. spaces are allowed only the first number returned}
console.log(parseInt("-10"))       //  -10
console.log(parseInt("-10.33"))    //  -10
console.log(parseInt("10"))        //  10
console.log(parseInt("10.33"))     //  10
console.log(parseInt("10 20 30"))  //  10
console.log(parseInt("10 years"))  //  10 
console.log(parseInt("years 10"))  //  NaN

// The parseFloat() method  {parses a string and returns a number. Spaces are allowed only the first number is returned}
console.log(parseFloat("10"))        //  10
console.log(parseFloat("10.33"))     //  10.33
console.log(parseFloat("10 20 30"))  //  10
console.log(parseFloat("10 years"))  //  10
console.log(parseFloat("years 10"))  //  NaN

// Number object methods (These only work with object numbers, not used on variables) ---------

// The Number.isInteger() method {returns true if the argument is an integer}
console.log(Number.isInteger(23))  // true
console.log(Number.isInteger(23.34))  // false

// Number.isSafeInteger()  {works just like above one.} (9007199254740991 is safe)
// Number.parseFloat() || Number.parseInt()  {works just like parseFloat() || parseInt()}

// ------------------------------- Maths ----------------------------------------------------

// abs(x) -->  returns the absolute value of x 
// acos(x) -->  returns the arccosine of x in radians
// acosh(x) -->  returns the hyperbolic arccosine of x
// asin(x) -->  returns the arcsine of x in radians
// asinh(x) -->  returns the hyperbolic arcsine of x 
// atan(x) -->  returns the arctangent of x as a numeric value between -PI/2 and Pi/2 radians
// atan2(y,x) -->  returns the arctangent of the quotient of its arguments
// atanh(x) -->  returns the hyperbolic arctangent of x
// cbrt(x) -->  returns the cubic root of x
// ceil(x) -->  returns x. rounded upwards to the nearest integer
// floor(x) -->  returns x. rounded downwards to the nearest integer
// cos(x) -->  returns the cosine of x in radians
// cosh(x) -->  returns the hyperbolic cosine of x 
// exp(x) -->  returns the value of E^x
// log(x) -->  returns the natural logarithm (base E) of x
// max(x,y,z) -->  returns the number with the highest value 
// min(x,y,z) -->  returns the number with the lowest value
// pow(x,y) -->  returns the value of x to the power of y
// random() -->  returns a random number between 0 and 1
// round(x) -->  rounds x to the nearest integer
// sign(x) -->  returns if x is negative, null or positive (-1,0,1)
// sin(x) -->  returns the sine of x in radians
// sinh(x) -->  returns the hyperbolic sine of x 
// sqrt(x) -->  returns the square root of x
// tan(x) --> returns the tangent of x 
// tanh(x) -->  returns the hyperbolic tangent of x
// trunc(x) --> returns the integer part of the x                                                                                                