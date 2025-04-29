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
const num1 = [1, 2, 3];
console.log(num1.length); // 3

// Array toString() {we used it above to change the array to string}
const num2 = [1, 2, 3];
console.log(num2.toString()); // "1,2,3"

// Array at()  {returns an indexed element form an array and same as [] method}
const num3 = [1, 2, 3];
console.log(num3.at(1)); // 2 (Same as nums[1])

// Array join()  {It behaves just like toString() but additionaly it add the symbol you give as input}
const num4 = [1, 2, 3];
console.log(num4.join('-')); // "1-2-3"

// Array pop()  {It removes the element at the given index if any index is not give it removes the last element of the array. it is also a method which returns the poped value.}
const num5 = [1, 2, 3];
const popped = num5.pop();
console.log(popped); // 3
console.log(num5); // [1, 2]

// Array push()  {It pushes the new element to an array at the end. it also returns the new array length.}
const num6 = [1, 2];
const newLength1 = num6.push(3);
console.log(newLength1); // 3
console.log(num6); // [1, 2, 3]

// Array shift()  {It just behaves like pop but it removes the first element of the array and shifts all the elements to a lower index. it also returns the value that was shifted out}
const num7 = [1, 2, 3];
const shifted = num7.shift();
console.log(shifted); // 1
console.log(num7); // [2, 3]

// Array unshift()  {It just behaves like push but it add in the begining of the array and shifts all the elements to a upper index. it also returns the new array length.}
const num8 = [2, 3];
const newLength2 = num8.unshift(1);
console.log(newLength2); // 3
console.log(num8); // [1, 2, 3]

// Array delete()  {As by name it deletes the element but it will create undefined holes in the array so use pop() or shift() instead}
const num9 = [1, 2, 3];
delete num9[1];
console.log(num9); // [1, undefined, 3] (undefined hole created)

// Array concat()  {It returns a new array concatinated. it does not change the existing arrays}
const num10 = [1, 2];
const num11 = [3, 4];
const newArray = num10.concat(num11);
console.log(newArray); // [1, 2, 3, 4]

// Array flat()  {It is used to create a new array with sub-array elements concatenated to a specified depth}
const num12 = [1, [2, 3], [4, 5]];
console.log(num12.flat()); // [1, 2, 3, 4, 5]

// Array splice()  {It returns a array of given indeces but also it will remove the elements from the existing array.}
const num13 = [1, 2, 3, 4];
const removed = num13.splice(1, 2);
console.log(removed); // [2, 3]
console.log(num13); // [1, 4]

// Array toSpliced()  {It behaves like Splice() but it does not affect the existing array.}
const num14 = [1, 2, 3, 4];
const spliced = num14.toSpliced(1, 2);
console.log(spliced); // [1, 4]
console.log(num14); // [1, 2, 3, 4] (Original array not modified)

// Array slice()  {It creates a new array of given indeces (last index is not included) and does not affect the existing array}
const num15 = [1, 2, 3, 4];
console.log(num15.slice(1, 3)); // [2, 3]


// Find and Search Methods -----------------------------------
// Array indexOf()  {It searches an array for an element value and returns its position. we can also give a starting point to the input like from where to start the search.}
const num16 = [1, 2, 3, 2];
console.log(num16.indexOf(2)); // 1

// Array lastIndexOf()  {It behaves just like indexOf() but returns the position of the occurrence of the specified element}
const num17 = [1, 2, 3, 2];
console.log(num17.lastIndexOf(2)); // 3

// Array includes()  {It allows to check if an element is present in an array}
const num18 = [1, 2, 3];
console.log(num18.includes(2)); // true

// Array find()  {It returns the value of the first array element that passes a test function.}
const num19 = [1, 2, 3];
const found1 = num19.find(x => x > 1);
console.log(found1); // 2

// Array findIndex()  {It returns the index of the first array element that passes a test function.}
const num20 = [1, 2, 3];
const index1 = num20.findIndex(x => x > 1);
console.log(index1); // 1

// Array findLast()  {It will start from the end of an array and return the value of the first element that satisfies a condition.}
const num21 = [1, 2, 3, 4];
const found = num21.findLast(x => x % 2 === 0);
console.log(found); // 4

// Array findLastIndex()  {It finds the index of the last element that satisfies a condition}
const num22 = [1, 2, 3, 4];
const index = num22.findLastIndex(x => x % 2 === 0);
console.log(index); // 3


// Sorting Arrays ------------------------------------
// Array sort()  {It shorts an attay alphabetically}
const num23 = [3, 1, 2];
nums.sort();
console.log(num23); // [1, 2, 3]

// Array reverse()  {It reverses the elements in an array}
const num24 = [1, 2, 3];
nums.reverse();
console.log(num24); // [3, 2, 1]

// Array toSorted() {It is a safe way to sort an array without altering the original array}
const num25 = [3, 1, 2];
const sorted = num25.toSorted();
console.log(sorted); // [1, 2, 3]
console.log(num25); // [3, 1, 2] (Original array not modified)

// Array toReversed()  {It is a safe way to reverse an array without altering the original array}
const num26 = [1, 2, 3];
const reversed = num26.toReversed();
console.log(reversed); // [3, 2, 1]
console.log(num26); // [1, 2, 3] (Original array not modified)

// Sorting Objects 
// Numeric Sort
// Random Sort
// Math.min()  {It is used to find the lowest number in an array}
const num27 = [1, 2, 3];
console.log(Math.min(...num27)); // 1

// Math.max()  {It is used to find the highest number in an array }
const num28 = [1, 2, 3];
console.log(Math.max(...num28)); // 3


// Array Iteration --------------------------------------
// Array forEach  {It calls a function once for each array element}
const num29 = [1, 2, 3];
num29.forEach(x => console.log(x)); // 1, 2, 3

// Array map() {It creates a new array by performing a function on each array element. It does not execute the function for array elements withou values. It does not change the original array }
const num30 = [1, 2, 3];
const doubled = num30.map(x => x * 2);
console.log(doubled); // [2, 4, 6]

// Array flatMap()  {It first map all elements of an array and then creates a new array by flattening the array }
const num31 = [1, 2, 3];
const flattened = num31.flatMap(x => [x, x * 2]);
console.log(flattened); // [1, 2, 2, 4, 3, 6]

// Array filter()  {It creaes a new array with array elements that pass a test}
const num32 = [1, 2, 3, 4];
const evens = num32.filter(x => x % 2 === 0);
console.log(evens); // [2, 4]

// Array reduce()  {It runs a function on each array elelment to produce a single value. It does not affect the original array }
const num33 = [1, 2, 3];
const sum = num33.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 6

// Array reduceRight()  {It works same as reduce but from right to left }
const num34 = [1, 2, 3];
const sumRight = num34.reduceRight((acc, curr) => acc + curr, 0);
console.log(sumRight); // 6 (same as reduce)

// Array every()  {It checks if all array values  pass a test }
const num35 = [2, 4, 6];
console.log(num35.every(x => x % 2 === 0)); // true

// Array some()  {It checks if some array values pass a test}
const num36 = [1, 2, 3];
console.log(num36.some(x => x % 2 === 0)); // true

// Array from()  {It returns an Array object from any object with a length property or any iterable object.}
const str = '123';
const num37 = Array.from(str);
console.log(num37); // ['1', '2', '3']

// Array keys() {It returns an array iterator object with the keys of an array } 
const num38 = [1, 2, 3];
const keys = num38.keys();
console.log([...keys]); // [0, 1, 2]

// Array entries()  {It create an array iterator and then iterate over the key/value pairs}
const num39 = [1, 2, 3];
const entries = num39.entries();
console.log([...entries]); // [[0, 1], [1, 2], [2, 3]]

// Array with()  {It is a safe way to update elements in an array without altering the original array}
const num40 = [1, 2, 3];
const newNums = num40.with(1, 4); // Updates index 1 to 4
console.log(newNums); // [1, 4, 3]
console.log(num40); // [1, 2, 3] (Original array not modified)

// Array Spread (...)  {It works like concatinate function with new way.}
const nums1 = [1, 2];
const nums2 = [3, 4];
const combined = [...nums1, ...nums2];
console.log(combined); // [1, 2, 3, 4]


// The const keyword while declaing a array is not mean that it cannot be change but it only means that reference is constant for this array. 
const nums = [1, 2, 3];
nums.push(4); // Works
console.log(nums); // [1, 2, 3, 4]
