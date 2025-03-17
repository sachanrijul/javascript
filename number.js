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