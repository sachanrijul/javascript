// declaration of the arrow function .....

let a = (a, b) => a * b 
console.log(a); // [Function: a]
console.log(a(10, 20)); // 200

// both are same things here ..........

b = function() {
    return "Hello There !!"
}

c = () => {
    return "Hello There !!"
}

console.log(b());  // Hello There !!
console.log(c());  // Hello There !!

// If we do not use return keyword ...

d = () => "Hello There !!"
console.log(d());  // Hello There !!

e = (e) => "Value of e is : " + e
console.log(e(12));  // Value of e is : 12

f = f =>  "Value of e is : " + f
console.log(f(100));  //  Value of e is : 100

// anonymous arrow function ..
(() => {
    console.log("I am anonymous arrow function !!")
})();  // I am anonymous arrow function !! (but here we are using iife because if any function have no name so how we gonna call it.)

