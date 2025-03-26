// IN JAVASCRIPT EVERYTHING IS AN OBJECT ++++++++++++
// javascript objects are mutable........

// null-prototype objects..
const a = Object.create(null) // we can also create an object with this method but this is used to create null object.

// singleton object..
const b = new Object() // it is just like above one but in different syntax. and after that you can assign values to it like this.
b.name = "name of the user";
b.id = "1234abcd";
b.age = 18;
b.salary = 100.99;
b.isLoggedIn = false;
b.nickNames = ["batman", "spiderman","me"]

// same thing we can do for a object.

const mysym = Symbol("key1") // here we are declaring this because we are going to use it in c object.

// another way to declare an object, which is used mostly.
const c = {
    name: "Rijul",
    "full name": "Rijul Sachan",
    age: 18,
    email: "rijul@gmail.com",
    [mysym]: "mykey"
}

// accessing properties of any object..
console.log(c.name)  // Rijul
console.log(c["name"])  // Rijul
console.log(c["full name"])  // Rijul Sachan
console.log(c[mysym])  // mykey

// we can also decralre objects inside object inside object like this ....
const d = {
    name: {
        myname: {
            yourname: "name"
        }
    }
}

console.log(d.name.myname.yourname) // name

// changing values of object ..
c.email = "rijul@google.com"
console.log(c.email); // rijul@google.com

// we can also freeze our object so no values will changed after it ..
// Object.freeze(c) // like this .. it will not show any error if we change any property of c but change will not reflect.

// declaring function as property..
c.greeting = function(){
    console.log("greeting function is called ");
}
console.log(c.greeting); // [Function (anonymous)]
console.log(c.greeting());  // greeting function is called 

// using this keyword ...
c.greeting1 = function(){
    console.log(`hello myself ${this.name}`)
}
console.log(c.greeting1()) // hello myself Rijul

// some operations on objects ..
const e = {3: "a", 4: "b"}
const f = {1: "a", 2: "b"}
const g = {5: "a", 6: "b"}

const h = { e, f, g }
console.log(h) // {e: { '3': 'a', '4': 'b' }, f: { '1': 'a', '2': 'b' }, g: { '5': 'a', '6': 'b' }}
// e, f and g are created as objects inside object h . 

const i = Object.assign( e, f, g)
console.log(i)  //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' } 
// here in object e assiging the properties of f and g and returning to object i. that means we also changing the object e.

const j = Object.assign({}, e, f, g)
console.log(j)  // it works just like above method but not changing the any properties of any object.

const k = {...e, ...g, ...f}
console.log(k)  // it also works fine like above one just like arrays (spread operator).

// If we have an array of objects ..
const l = [
    {
        id: 1
    },
    {
        id: 2
    },
    {
        id:3
    }
]

console.log(l[0].id) // 1 {here l[0] is a object so we treat it like an object.}

console.log(Object.keys(c)) // it returns the array of stirng where all the keys are listed.
console.log(Object.values(c))  // it returns the array of string of all the values of the object.
console.log(Object.entries(c)) // it returns the array of key value pair inside the array of string type.

// we also check if any property is present in the object ..
console.log(c.hasOwnProperty("name")) // true

// we can also change the name of any property of any object like this if we want ..
const {name: fullname} = c
console.log(fullname) // Rijul
console.log(c.name)  // Rijul

