// stack(primitive)  &&  heap(non-primitive)

let a = "hello"
let b = a

console.log(b) // hello                
console.log(a) // hello               
                                      
b = "good morning"

console.log(b) // good morning               
console.log(a) // hello     
// (here value of a is not changed be b got the copy of a not the reference of a. this is the example of stack memory allocation.)

//--------------------------------------------------------------------------------------------------------------------------------

let user1 = {
    name: "batman",
    id: 1234
}

let user2 = user1

console.log(user1) // { name: 'batman', id: 1234 }
console.log(user2) // { name: 'batman', id: 1234 }

user2.name = "deadpool"
user2.id = 4321

console.log(user1) // { name: 'deadpool', id: 4321 }
console.log(user2) // { name: 'deadpool', id: 4321 }

// ------------------------------ This is the basic concept of memory allocation in js --------------------------------------