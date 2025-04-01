// When we declare the function then parameters are parameters and when we call it then it is arguments.
// If you are returning any thing in any function then it will stored in any variable and if only function console.log any thing then it will not stored in the variable.

// Defining a function in different ways --------------------------------------

function a() {  // defining a function with no parameters.
    console.log("I am a function.");
}
a() // I am a function.

function b(p1, p2 = 0) {  // defining a function a with two parameters.
  return p1 * p2;
}
console.log(b(3,6))  //  18
console.log(b(6))  //  0

const c = function (p1, p2) {   
  return p1 + p2;
}
console.log(c)  // [function : c]
console.log(c(12,45))  // 57

function d(...p1){  // using rest operator. If we give more arguments then it will give an array of given arguments. 
    return p1;
}
console.log(d(23,2,5,6,67))  // [ 23, 2, 5, 6, 67 ]
console.log(d(10))  // [ 10 ]

const obj1 = {  // creating one object
    name: "Rijul",
    age: 18
}

function e(obj){
    console.log(`username is ${obj.name} and age is ${obj.age}`);
}
e(obj1)  // username is Rijul and age is 18.

const arr1 = [10, 20, 30, 40, 50]

function f(arr){
    console.log(arr[2]);
}
f(arr1)  // 30

function g(p1, p2) {  // defining nested functions. here inner function can use p1 and p2 but outer function cannot use p3.
    function h(p3) {
        return p3*p3;
    }
    return h(p1) + h(p2);
}
console.log(g(3,4))  // 25

const num = 0;
let i;
if (num === 0) {  // defining conditional function.
    i = function(){
        console.log("I am conditional function definition.")
    }
}
i()  // I am conditional function definition.

// anonymous function (but we only call it by iife because it has no name so how we gonna call it.) ...
(function () {
    console.log("I am anonymous function !!")
})();


// here we can call the function before the declaration of the function.
console.log(j())
function j(){
    return "I am function which is called before the declaration of function."
}

// here we cannot call the function before the declaration of the function.
// console.log(k())  // error
const k = function(){
    return "I am function which is called before the declaration of function."
}

// scope -------------------------------------

if (true) {
    let l = 34
    const m = 45
    var n = 65
}

// console.log(l)  // it will give error 
// console.log(m)  // it will also give error
// console.log(n)  // 65  (scope problem)

/* we have three types of scope:
-> Global scope 
-> local/module scope
-> function scope

If we declare any variable(let, const, var) outside then they are in global scope.
If we declare any variable(let, const, var) inside the block then they are in local scope except var.
If we declare any variable(let, const, var) inside any function then they are in function scope.
If we assign any variable anywhere without declaration then it is automatically in global scope. Only in strict mode they are not in global scope.
*/

// This keyword -------------------------------------------------------------------------------------------------------------------------

