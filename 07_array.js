// Initializing arrays -----------------------------------

const a = ["BMW", "Audi", "Ferrari", "Ford"] 
const b = []
b[0] = "Ironman"
b[1] = "Thor"
b[3] = "Captain America"
const c = new Array("Batman", "Superman", "Wonder Woman")  // works just similar like normal declaration.

console.log(a)  // [ 'BMW', 'Audi', 'Ferrari', 'Ford' ]
console.log(b)  // [ 'Ironman', 'Thor', <1 empty item>, 'Captain America' ]
console.log(c)  // [ 'Batman', 'Superman', 'Wonder Woman' ]

// Accessing Array Elements:
console.log(a[0])  // 'BMW'
console.log(a[3])  // 'Ford'

// we also change the any element of array.

// Converting an Array to a string
console.log(a.toString())  // BMW,Audi,Ferrari,Ford

// Objects use names to access its "members". 
const d = { firstName:"Rijul", lastName:"Sachan", age:18}
console.log(d)  // { firstName: 'Rijul', lastName: 'Sachan', age: 18 }
console.log(d.firstName)  // Rijul
// Array Elements Can Be Objects..

// Array properties and Methods -----------------------------------------------
console.log(a.length)  // 4
console.log(a.sort())  /// [ 'Audi', 'BMW', 'Ferrari', 'Ford' ]

// Looping array elements using for loop:
for(let i = 0; i<a.length; i++){
    console.log(a[i]) 
}

// We can also use forEach() function:
// console.log(a.forEach) 

// Adding array elements 
console.log(a)  // [ 'Audi', 'BMW', 'Ferrari', 'Ford' ]
a.push("Pagani")
console.log(a)  // [ 'Audi', 'BMW', 'Ferrari', 'Ford', 'Pagani' ]
// WARNING ####
// adding elements with high indexes can create undefined holes in an array. as I have mentioned in b array.

// The difference between arrays and objects :
// In javascript arrays use numbered indexes rather objects use named indexes.

