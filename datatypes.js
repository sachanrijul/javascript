// in how many you can declare variable 

const id = 808145 
let name = "sachanrijul"
var age = 18 // this is not used very much now for block scope problems.
game = "cricket" // do not use this , this is not a good practice.

console.log(id)
console.table([id, name, age, game ]) 

// ----------------------------------------------------------------------

"use strict";  // every thing in this file is used in mordern way not mandetory in mordern engins 
// alert(3+6)  do not use this because this is not a browser ;

/*
# There are 7 types of datatypes in js 
number 
string
bigint
null  (type is object)
undefined
boolean
symbol
*/

// In broader way we have two types of datatypes ::-- Primitive(pass by value) and non primitive(pass by reference) ::(above ones lie in primitive)

/*
#There are basically 3 types of non primitive datatypes here 
array
function
object
*/

// some practice

let a = 10 // ranges up to 2^52 or 2^53
let b = "hello" // immutable
let c = 4242455343245342553424255234n // ranges greater than number
let d = null
let e = undefined //(or we only declare it not assign anything thats also considered as undefined.)
let f = true
let g = Symbol("something") // immutable

console.table([a, b, c, d, e, f, g])
console.log(typeof a) // number 
console.log(typeof b) // string
console.log(typeof c) // bigint
console.log(typeof d) // object
console.log(typeof e) // undefined
console.log(typeof f) // boolean
console.log(typeof g) // symbol (it is used of making anything unique )


let arr = [" 10 ", " hello ", " null ", " undefined "," true "]

let obj = {
    name: "hello",
    age: 18,
    single: true
}

let func = function(){
    console.log("I am a function.")
}

console.log(arr)
console.log(obj)
func()

console.log(typeof arr) // object
console.log(typeof obj) // object
console.log(typeof func) // function
// ----------------------------------------------------------------------------


