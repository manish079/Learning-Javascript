//A js string is zero or more characters written inside quotes.

//js string are used for storing and manipulating text.
//We can use single or double quotes
//String can be created as primitives
//from string literals, or as objects, using the String() constructor

let myName = "Manish Prajapat";
let city = "Sirohi";
let village = `Naya Sanwada`;
let address = `Behind of Aurvedic hospital
    Naya Sanwada
            Sirohi
Rajasthan`;
console.log(myName);
console.log(city);
console.log(village);
console.log(address);

let clgName = new String("CIT Aburoad");
console.log(clgName); //Not use this type code

console.log(clgName.length); //space also a count in length

// escape character
console.log('I am a "Software Engineer".  ');

let str = "I am Manish.";

console.log(str.indexOf("a"));
console.log(str.charAt(3));
console.log(str.lastIndexOf("a")); //search from backword
console.log(str.search("Manish")); //return first matching char index

//extract string
// slice(), substring(), substr()

// slice() -> extracts a part of a string and return th extracted part in a new string

let fruits = "Apple, Banana, Kiwi, Orange";

let res = fruits.slice(0, 4); //Appl
console.log(res);
res = fruits.slice(5, 10);
console.log(res);
res = fruits.slice(7, -2); // last 2 char not included
console.log(res);
res = fruits.slice(8); //all char from 7
console.log(res);
res = fruits.slice(-6); //orange
console.log(res);

//substring() cannot accept -ve indexes
fruits = "Apple, Banana, Kiwi, Orange";
res = fruits.substring(0, 4);
console.log(res); //Appl

res = fruits.substring(7, -2); //print from 0 to 7 in -ve index case
console.log(res);

fruits = "Apple, Banana, Kiwi, Orange";
res = fruits.substr(0, 4); //Appl
console.log(res);

res = fruits.substr(7, -2); //not print in -ve case
console.log(res);

//best way use for extracting data from last index
res = fruits.substr(-10); //extract last 10 characters
console.log(res);

console.log(fruits.replace("Kiwi", "Mangos"));
//string cannot replace data in original array. It return new string
console.log(fruits.replace("Mangos", "mangos")); //show original string

str = "Hello India";
console.log(str.charAt(3));

//charCodeAt() returns the unicode of the character at a specified index in a string:
/**
 * two method returns a UTF-16 code
 * (an integer between 0 and 65535)
 *
 * The Unicode Standard provides a unique number  for every character.
 */
console.log(str.charCodeAt(6)); //generate random code

// trim() remove whitespaces after and before of string

let str1 = "  India   ";
console.log(str1.trim());

// trim() removes whitespace only from the edges
let str2 = "  A B C D  ";
console.log(str2.trim()); // 'A B C D'

str = "Don't lose your hope, Until you have not achieved your GOAL.";
console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str.concat(" Please be happy")); //return new string

//split()
//String converted into array in split()
//string ko konse basis par array me change karna he
// let text = "a,b, c,d,e";
let text = "a,b,c,d,e";
console.log(text.split("-")); //seperate character to comma
console.log(text.split(" ")); //seperate by spaces
console.log(text.split("|")); //seprate by |
console.log(text.split("c")); //seprate by c

//match()

let input_str = "manishprajat123@gmail.com";
input_str.match(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
)
  ? console.log("Email validated!!")
  : console.log("Email not correct!!");
