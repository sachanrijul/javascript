// Initializing arrays -----------------------------------

const a = ["BMW", "Audi", "Ferrari", "Ford"] 
const b = []
b[0] = "Ironman"
b[1] = "Thor"
b[3] = "Captain America"
const c = new Array("Batman", "Superman", "Wonder Woman")  // works just similar like normal declaration.
// but if you decrale a array like this it will give unexpected results like this.
const d = new Array(10) // it will create a array of 10 indices 

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
const e = { firstName:"Rijul", lastName:"Sachan", age:18}
console.log(e)  // { firstName: 'Rijul', lastName: 'Sachan', age: 18 }
console.log(e.firstName)  // Rijul
// Array Elements Can Be Objects..

// Array properties and Methods -----------------------------------------------
console.log(a.length)  // 4
console.log(a.sort())  // [ 'Audi', 'BMW', 'Ferrari', 'Ford' ]

// Looping array elements using for loop:
for(let i = 0; i<a.length; i++){
    console.log(a[i]) 
}

// We can also use forEach() function for looping :
// console.log(a.forEach) 

// Adding array elements 
console.log(a)  // [ 'Audi', 'BMW', 'Ferrari', 'Ford' ]
a.push("Pagani")
console.log(a)  // [ 'Audi', 'BMW', 'Ferrari', 'Ford', 'Pagani' ]
// WARNING ####
// adding elements with high indexes can create undefined holes in an array. as I have mentioned in b array.

// The difference between arrays and objects :
// In javascript arrays use numbered indexes rather objects use named indexes.

// using Array.isArray() function to check if a variable is array or not because if we use typeof function it gives object.
let f = Array.isArray(a)
console.log(f) // true
console.log(a instanceof Array)  // true

const g = [1,2,3,[4,5],6,[7,8,[9]]]
console.log(g)  // [ 1, 2, 3, [ 4, 5 ], 6, [ 7, 8, [ 9 ] ] ]
console.log(g[3][1],g[5][2][0]) // 5 9

// Basic Array Methods ----------------------------------------
// Array length  {we used it above to find the length of the array}
// Array toString() {we used it above to change the array to string}
// Array at()  {returns an indexed element form an array and same as [] method}
// Array join()  {It behaves just like toString() but additionaly it add the symbol you give as input}
// Array pop()  {It removes the element at the given index if any index is not give it removes the last element of the array. it is also a method which returns the poped value.}
// Array push()  {It pushes the new element to an array at the end. it also returns the new array length.}
// Array shift()  {It just behaves like pop but it removes the first element of the array and shifts all the elements to a lower index. it also returns the value that was shifted out}
// Array unshift()  {It just behaves like push but it add in the begining of the array and shifts all the elements to a upper index. it also returns the new array length.}
// Array delete()  {As by name it deletes the element but it will create undefined holes in the array so use pop() or shift() instead}
// Array concat()  {It returns a new array concatinated. it does not change the existing arrays}
// Array flat()  {It is used to create a new array with sub-array elements concatenated to a specified depth}
// Array splice()  {It returns a array of given indeces but also it will remove the elements from the existing array.}
// Array toSpliced()  {It behaves like Splice() but it does not affect the existing array.}
// Array slice()  {It creates a new array of given indeces (last index is not included) and does not affect the existing array}

// Find and Search Methods -----------------------------------
// Array indexOf()  {It searches an array for an element value and returns its position. we can also give a starting point to the input like from where to start the search.}
// Array lastIndexOf()  {It behaves just like indexOf() but returns the position of the occurrence of the specified element}
// Array includes()  {It allows to check if an element is present in an array}
// Array find()  {It returns the value of the first array element that passes a test function.}
// Array findIndex()  {It returns the index of the first array element that passes a test function.}
// Array findLast()  {It will start from the end of an array and return the value of the first element that satisfies a condition.}
// Array findLastIndex()  {It finds the index of the last element that satisfies a condition}

// Sorting Arrays ------------------------------------
// Array sort()  {It shorts an attay alphabetically}
// Array reverse()  {It reverses the elements in an array}
// Array toSorted() {It is a safe way to sort an array without altering the original array}
// Array toReversed()  {It is a safe way to reverse an array without altering the original array}
// Sorting Objects 
// Numeric Sort
// Random Sort
// Math.min()  {It is used to find the lowest number in an array}
// Math.max()  {It is used to find the highest number in an array }

// Array Iteration --------------------------------------
// Array forEach  {It calls a function once for each array element}
// Array map() {It creates a new array by performing a function on each array element. It does not execute the function for array elements withou values. It does not change the original array }
// Array flatMap()  {It first map all elements of an array and then creates a new array by flattening the array }
// Array filter()  {It creaes a new array with array elements that pass a test}
// Array reduce()  {It runs a function on each array elelment to produce a single value. It does not affect the original array }
// Array reduceRight()  {It works same as reduce but from right to left }
// Array every()  {It checks if all array values  pass a test }
// Array some()  {It checks if some array values pass a test}
// Array from()  {It returns an Array object from any object with a length property or any iterable object.}
// Array keys() {It returns an array iterator object with the keys of an array } 
// Array entries()  {It create an array iterator and then iterate over the key/value pairs}
// Array with()  {It is a safe way to update elements in an array without altering the original array}
// Array Spread (...)  {It works like concatinate function with new way.}

// The const keyword while declaing a array is not mean that it cannot be change but it only means that reference is constant for this array. 