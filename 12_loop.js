// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");
    }
    //console.log(element);
    
}

// console.log(element);

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );
   }
    
}
let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}

let index = 0
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2
// }

let myArray1 = ['flash', "batman", "superman"]

let arr = 0
while (arr < myArray1.length) {
    //console.log(`Value is ${myArray1[arr]}`);
    arr = arr + 1
}

let score = 11

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);

// we have basically five types of loop ..---------------------------------------
// for --> loops through a block of code a number of times.
// for/in --> loops through the properties of an object.
// for/of --> loops through the dvalues of an iterable object.
// while --> loops through a block of code while a specified condition is true.
// do/while --> also loops through a block of code while a specified condition is true.

// for loop --------------------------------------------------------
// for (expression 1; expression 2; expression 3) {
//     // code block to be executed
//   }
// 1: is executed before the execution of the code block.
// 2: defines the condition for executing the code block. 
// 3: is executed after the code block has been executed .

// **** Do not use var in loops **** 

// for in loop --------------------------------------------------------
// for (key in object) {
//   // code block to be executed
// }

// for (variable in array) {
//     code
//   }

// Array.forEach() --------------------------------------------------------
// it takes 3 arguments : item value, item index, array itself.

// const numbers = [45, 4, 9, 16, 25];

// let txt = "";
// numbers.forEach(myFunction);

// function myFunction(value, index, array) {
//   txt += value;
// }

// for of loop ----------------------------------------------------------------------

// for (variable of iterable) {
//     // code block to be executed
//   }
// for every iteration the value of the next property is assigned to the variable. variable can be declared with const, let or var .

// while loop and do while loop ---------------------------------------------------------------

// while (condition) {
//     // code block to be executed
//   }

// do {
//     // code block to be executed
//   }
//   while (condition);

// break and continue ---------------------------------------------------------
// break statement jumps out of the loop .
// continue statement jumps over one iteration in the loop .
// ** with a label reference, the break statement can be used to jump out of any code. **