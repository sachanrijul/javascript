// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }

const myObj = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObj) {
    //console.log(`${key} shortcut is for ${myObj[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }

// -----------------------------------------------------------------------------------
// 1.) for...of loop {Loop over iterables}
// Iterables = Arrays, Strings, Maps, Sets, etc. {objects are not iterables.}
// Behind the scene it secretly calls .next() again and again until it's done.
// Example:-
const a = [10, 20, 30];
for (const num of a) {
  console.log(num);
}
// working similar to:--
const iterator = arr[Symbol.iterator]();
let result = iterator.next();
while (!result.done) {
  console.log(result.value);
  result = iterator.next();
}

// 2.) for...in loop {Loop over enumerable properties(keys) os an object.}
// Behind the scene it focuses on keys, not values. It also loops through inherited properties unless you filter using .hasOwnProperty().
// Example:-
const car = { brand: "Tesla", model: "S" };
for (const key in car) {
  console.log(key, car[key]);
}
// working similar to:--
const keys = Object.keys(car); // Actually also checks prototype chain
for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  console.log(key, car[key]);
}

// 3.) forEach() loop {array method to run a function on each element. }
// it is synchronous -- you can not use await properly inside unless you wrap in an async function.
// Example:-
const b = [1,2,3];
b.forEach(function(num){
    console.log(num);
});
// working similar to:--
for (let i = 0; i < b.length; i++) {
    const b = b[i];
    yourFunction(num, i, b);
}
// yourFunction is the one you pass to forEach!. You can not break or continue inside .forEach(). It's meant to go through all items.

// some array methods feels like looping -----------

// 1.) .map() {Transforms each item in an array into a new item. creats a new array with the same length.}
// It is basically a fancy loop + push to new array.
// Example:-
const c = [1,2,3];
const doubled = c.map((c) => {c*2});
console.log(doubled); // [2, 4, 6]
// working similar to:--
const d = [1,2,3];
const doubled1 = [];
for (let i = 0; i < d.length; i++) {
    doubled1.push(d[i]*2);
}

// 2.) .filter() {filters out items based on a condition. creates a new array with only the items that pass your test.}
// .filter() = loop if condition + push only if true.
// Example:-
const e = [1,2,3,4];
const evens = e.filter((e) => {e % 2 === 0});
console.log(evens); // [2,4]
// working similar to:--
const f = [1, 2, 3, 4];
const evens1 = [];

for (let i = 0; i < f.length; i++) {
  if (f[i] % 2 === 0) {
    evens.push(f[i]);
  }
}

// 3.) .reduce() {boils down an array into one single value. like sum of numbers or biggest item.}
// .reduce() = loop + carry forward the result.
// Example:-
const g = [1,2,3,4];
const sum = g.reduce(function(accumulator, current){
    accumulator + current, 0;
})
console.log(sum); // 10
// working similar to:--
let accumulator = 0;
for (let i = 0; i < nums.length; i++) {
  accumulator = accumulator + nums[i];
}

// for await...of {looping over promises ar async generators. waits for each promise to finish before going to the next.}
// for await..of = normal loop + wait for promise to resolve.
// Example:-
async function load() {
    const urls = [
      Promise.resolve('page1'),
      Promise.resolve('page2'),
      Promise.resolve('page3')
    ];
  
    for await (const page of urls) {
      console.log(page);
    }
  }
  load();
  // working similar to:-- 
  const iterator1 = urls[Symbol.asyncIterator]();
let result1 = await iterator1.next();
while (!result1.done) {
  const page = result1.value;
  console.log(page);
  result1 = await iterator1.next();
}
