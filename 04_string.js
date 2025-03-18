// ------------------------- Strings ---------------------------------

// Declaration:
const str1 = "string 1" // normal way
const str2 = 'string 2' // normal way
const str3 = `string 3` // templete string also support milti-line string (not supported in internet explorer)

// also a better way to print string 
console.log(`These are ${str1}, ${str2} and ${str3}`)

// Escape characters (it turns special character into string characters)
//  /b ::--> Backspace
//  /f ::--> form feed
//  /n ::--> new line
//  /r ::--> carriage return
//  /t ::--> horizontal tabulator
//  /v ::--> vertical tabulator

// Example: 
let text = "We are the so-called \"Vikings\" from the north.";
console.log(text) // We are the so-called Vikings from the north.

// String length :
let a = "abcde"
console.log(a.length) // 5

// Strings as objects -------------------------

let x = "john" // normal primitive string 
let y = new String("john") // string as a object

console.log(x == y) // true (it only check the value inside the variable)
console.log(x === y) // false (it checks both value and also the data type of the variable)

// Example :
const s1 = "2 + 2"; // creates a string primitive
const s2 = new String("2 + 2"); // creates a String object
console.log(eval(s1)); // returns the number 4
console.log(eval(s2)); // returns the string "2 + 2"

// use of valueOf() method to convert object string into primitive string
console.log(eval(s2.valueOf())); // returns the number 4

// String coercion ------------------------------

console.log(String(undefined)) // "undefined"
console.log(String(null)) // "null"
console.log(String(true)) // "true"
console.log(String(false)) // "false"
console.log(String(34)) // "34"
console.log(String(Symbol(45))) // TypeError
console.log(+ 45) // does the same thing like String() 

// Instance methods : -------------------------------------------

let sentence = "my name is rohit sharma."

// 1. at() method same as []  {returns an indexed character from a string}
console.log(sentence.at(5)) // m 
console.log(sentence[5]) // m
// negative index (-x) gives results from backwards. 

// 2. charAt()  {returns the character at a specified index (position)}
console.log(sentence.charAt(5)) // m 
// not takes negative values as index. 

// 3. charCodeAt()  {returns the unicode of the character at a specified index}
let b = "HELLO WORLD"
console.log(b.charCodeAt(2)) // 76 (ASCII value of L is 76)

// 4. concat()  {returns two or more joined strings}
let c = "Patrick "
let d = "Bateman"
console.log(c.concat(d)) // Patrick Bateman

// 5. endsWith()  {returns if a string ends with a specified value}
let e = "Steve Rogers"
console.log(e.endsWith("Rogers")) // true 

// 6. fromCharCode()  {returns unicode values as characters}
console.log(String.fromCharCode(76)) // L (ASCII value of L is 76)

// 7. includes()  {returns if a string contains a specified value}
let f = "Iron Man"
console.log(f.includes("Man")) // true 

// 8. indexOf()  {returns the index of the first occurrence of a value in a string}
let g = "abcdabcd"
console.log(g.indexOf("c")) // 2

// 9. lastIdexOf()  {this works same as above one but from the back of the string}

// 10. length   {returns the length of a string}
let h = "sachan"
console.log(h.length) // 6

// 11. localeCompare()  {compares two strings in the current locale}
let i = "ab"
let j = "cd"
console.log(i.localeCompare(j)) // -1  
// This only gives three answers -1(if the string is sorted before the comparestring), 0(if the two strings are equal) or 1(if the string is sorted after the comparestring)

// 12. match()  {searches a string for a value, or a regular expression, and returns the matches}
let k = "The rain in SPAIN stays mainly in the plain"
console.log(k.match("ain"))  // a search for "ain" using a string
console.log(k.match(/ain/))  // a search for "ain" using a regular expression
console.log(k.match(/ain/g))  // a global search for "ain"
console.log(k.match(/ain/gi)) // a global, case-insencitive search

// 13. padEnd()  {pads a string at the end}
let l = "5"
console.log(l.padEnd(4, "0")) // 5000 (it adds the second parameter behind the original string and form a total number of string equal to first parameter.)

// 14. padStart()  {pads a string from the start}
// does the same thing like above one but in the start.

// 15. prototype  {allows you to ad properties and methods to an object}

// 16. repeat()  {returns a new string with a number of copies of a string}
let m = "repeat it "
console.log(m.repeat(5)) // repeat it repeat it repeat it repeat it repeat it 

// 17. replace()  {serches a string for a pattern, and returns a string where the first match is replaced}
let n = "ryan goslin"
console.log(n.replace("goslin","renolds")) //ryan renolds

// 18. replaceAll()  {searches a string for a pattern and returns a new string where all matches are replaced}

// 19. search()  {searches a string for a value, or regular expression, and returns the index of the match }
// it returns -1 if no match is found and it is also case sensitive.

// 20.  slice()  {extracts a part of a string and returns a new string}
let o = "This string is going to be sliced"
console.log(o.slice(0,4)) // This

// 21. split()  {splits a string into an array of substrings}
let p = "split it into substrings"
console.log(p.split(" ")) // [ 'split', 'it', 'into', 'substrings' ]

// 22. startsWith()  {checks whether a string begins with specified characters}
let q = "This string starts with."
console.log(q.startsWith("This")) // true
console.log(q.startsWith("This",0)) // true (because This is started from index 0)

// 23. substring()  {extracts characters from a string, between two specified indices}
let r = "sub string"
console.log(r.substring(0,6)) // sub st (starts from first index and ends just before the last index)

// 24. toLocaleLowerCase()  {returns a string converted to lowercase letters, using the host's locale}

// 25. toLocaleUpperCase()  {returns a string converted to uppercase letters, using the host's locale}

// 26. toLowerCase()  {returns a string converted to lowercase letters}

// 27. toUpperCase()  {returns a string converted to uppercase letters}

// 28. toString()  {returns a string or a string object as a string}

// 29. trim()  {returns a string with removed whitespaces from both the ends}

// 30. trimEnd()  {returns a string with remobed whitespaces form the end}

// 31. trimStart()  {returns a string with removed whitespaces from the start}

// 32. valueOf()  {returns the primitive nalue of a string or a string object}
// it brings back the string to primitive type from object string.