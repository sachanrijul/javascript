// Date objects are static. The "clock" is not "running". The computer clock is ticking, date objects are not.

let mydate = new Date() // taking a instance of date as a object in mydate.
console.log(mydate)  //  2025-03-18T12:18:11.725Z  (YYYY-MM-DDTHH:mm:ss.sssZ)

// Creating date objects :

let a = new Date("March 18, 2025 17:56:00") // stores the exact time that I given in input 
console.log(a)  //  2025-03-18T12:26:00.000Z

let b = new Date("2025-03-18")
console.log(b)  //  2025-03-18T00:00:00.000Z

// new Date(year, month, day, hour, minute, second, milisecond)
let c = new Date(2025, 2, 18, 12, 30, 0, 0)  // here remember months are starting from 0.
console.log(c)  //  2025-03-18T07:00:00.000Z

// Using 6, 4, 3, 2 Numbers 
console.log(new Date(2025, 2, 18, 12, 30, 0)) // 2025-03-18T07:00:00.000Z (year, month, day, hour, minute, second)
console.log(new Date(2025, 2, 18, 12, 30))  // 2025-03-18T07:00:00.000Z (year, month, day, hour, minute)
console.log(new Date(2025, 2, 18, 12))  // 2025-03-18T06:30:00.000Z (year, month, day, hour)
console.log(new Date(2025, 2, 18))  // 2025-03-17T18:30:00.000Z (year, month, day)
console.log(new Date(2025, 2))  // 2025-02-28T18:30:00.000Z (year, month)
console.log(new Date(2025))  // 1970-01-01T00:00:02.025Z (*miliseconds*)

// One and two digit years will be interpreted as 19xx:
console.log(new Date(88, 11, 14))  // 1988-12-13T18:30:00.000Z

/*
JavaScript stores dates as number of milliseconds since January 01, 1970.
zero time is january 01, 1970 00:00:00 UTC.
one day is 86 400 000 milliseconds.
*/

console.log(new Date(100000000000))  // 1973-03-03T09:46:40.000Z (milliseconds are added to zero time.)
console.log(new Date(-100000000000))  // 1966-10-31T14:13:20.000Z

// Maximum milliseconds valid:
console.log(new Date(8.64e15).toString())  // Sat Sep 13 275760 05:30:00 GMT+0530 (India Standard Time)
console.log(new Date(8.64e15 + 1).toString())  // Invalid date  

// ---------- Date Methods ------------------------------------------------------------------------------

console.log(new Date().toString()) // Tue Mar 18 2025 18:22:08 GMT+0530 (India Standard Time)
console.log(new Date().toDateString()) // Tue Mar 18 2025
console.log(new Date().toUTCString())  // Tue, 18 Mar 2025 12:54:20 GMT
console.log(new Date().toISOString())  // 2025-03-18T12:54:20.875Z
console.log(new Date().toLocaleDateString())  // 18/3/2025
console.log(new Date().toLocaleTimeString())  // 7:17:42 pm
console.log(new Date().toLocaleString())  // 18/3/2025, 7:17:42 pm
console.log(new Date().toJSON())  // 2025-03-18T13:47:42.989Z
console.log(Date.now())  // 1742305662989
console.log(Date.parse(2025, 2, 18, 12, 30, 0))  // 1735689600000
console.log(Date.UTC(2025, 2, 18, 12, 30, 0))  // 1742301000000

// to take a snapshot of any instance. ----------
let myTimeStamp = Date.now()

console.log(myTimeStamp);                  // 1742311388390
console.log(a.getTime());                  // 1742300760000
console.log(Math.floor(Date.now()/1000));  // 1742311388
let newDate = new Date()

// ---------- Date Prototypes ------------------------------------------------------------------------------
console.log(newDate);                     // 2025-03-18T15:23:08.391Z
console.log(newDate.getMonth() + 1);      // 3
console.log(newDate.getDay());            //2
console.log(newDate.getMinutes());        // 53
console.log(newDate.getFullYear());       // 2025
console.log(newDate.getHours());          // 20
console.log(newDate.getTime());           // 1742311388391
console.log(newDate.getMilliseconds());   // 391
console.log(newDate.getSeconds());        // 8
 
// `${newDate.getDay()} and the time ` // to write any date or time in fully customized way. 

console.log(newDate.toLocaleString('default', {
    weekday: "narrow",
    
}))