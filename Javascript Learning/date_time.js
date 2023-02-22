/**
 * Date()
 *
 * creating date objects:- 4 ways
 * new Date()
 * new Date(year, month, day, hour, minute,    * second, milliseconds);
 * new Date(milliseconds)
 * new Date(date string)
 */

let currDate = new Date();
console.log(currDate); //2023-02-12T03:04:05.924Z
console.log(currDate.toLocaleString()); //2/12/2023, 8:36:11 AM //fetch local time of our country
console.log(currDate.toString()); //Sun Feb 12 2023 08:36:29 GMT+0530 (India Standard Time) //give perfect date and time

//Date.now()
//Returns the numeric value corresponding to the current time the number of millisecond elapsed since January 1, 1970 00:00:00 UTC

console.log(Date.now());

/**
 * new Date(year, month, ...)
 * 7 numbers specify year, month, day, hour, minute, second and millisecond(in that order)
 * Note:- Javascript counts months from 0 to 11
 *
 * January is 0. December is 11.
 * new Date() is constructor
 */
//we can set future time and date()
let d = new Date(2023, 11, 26, 8, 49, 10, 0);
console.log(d);
console.log(d.toString());

let d1 = new Date(2021, 02); //atleast 2 parameter are must
console.log(d1.toLocaleString()); //3/1/2021, 12:00:00 AM

let d2 = new Date("3/1/2021, 12:00:00 AM");
console.log(d2.toString()); //Mon Mar 01 2021 00:00:00 GMT+0530 (India Standard Time)
console.log(d2.toLocaleString()); //3/1/2021, 12:00:00 AM

// Date Method
let currDate1 = new Date();
console.log(currDate1.getDate()); //current data only day
let mon = ["January", "Febuary", "March"];
console.log(mon[currDate1.getMonth()]); //febuary

console.log(currDate1.getFullYear());

console.log(currDate1.getHours());
console.log(currDate1.getMinutes());
console.log(currDate1.getSeconds());

console.log(currDate1.getDate());

console.log();

//set indivisual date

console.log(currDate1.setFullYear(2023));
console.log(currDate1.setFullYear(2023, 02, 01));
console.log(currDate1.setMonth(5));
console.log(currDate1.setDate(15));
console.log(currDate1.toLocaleString());

console.log(new Date().toLocaleTimeString()); //for current time
console.log(new Date().toLocaleDateString()); //current date
console.log(new Date().toLocaleString()); //current date and time
