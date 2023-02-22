//strict Mode
//Make easier to write secure code
//always use in beginner for best practice and secure code
//easier to avoid accidental errors

"use strict";

let hasDriverLicence = false;

const passTest = true;

if (passTest) hasDriverLicence = true;
if (hasDriverLicence) console.log("I can drive");

// const interface = 'Audio'  //interface is reserved keyword

// const private = 544;

// const if = 23;

// function
//function declaration
function greet(apples, oranges) {
  console.log(`I have ${apples} apples and ${oranges} oranges for juice`);

  const fruits = "mango";
  return fruits;
}

console.log(greet(5, 10));

// function expression
// a function with no name called anonymous function or lambda function

//function expression:- produce value
// const price1 = foodPrice(200);  // Hoisted but we can't access price1 because it placed in temporal deadzone

const foodPrice = function (price) {
  return 1000 - price;
};
const price1 = foodPrice(200);
console.log(price1);

// ===================================================

const calAge1 = function (birthYear) {
  return 2023 - birthYear;
};

//  3. Arrow function
//one liner code and one parameter
const calAge2 = (birthYear) => 2023 - birthYear;

const age1 = calAge2(2002);
console.log(age1);

//multiple line code
const retirementYears = (birthYear) => {
  const age = 2023 - birthYear;
  const retirement = 60 - age;

  return retirement;
};
console.log(retirementYears(1983));

//multiple parameters

const retirementYears1 = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retirement = 60 - age;

  return `${firstName} retire in ${retirement}`;
};

console.log(retirementYears1(1981, "Manish"));
console.log(retirementYears1(2008, "Raju"));

//which function we can use either arrow or regular
// Arrow function do not have their own this.

var variable = "Global Level Variable";
let myObject = {
  variable: "Object Level Variable",
  arrowFunction: () => {
    console.log(this.variable);
  },
  regularFunction() {
    console.log(this.variable);
  },
};
myObject.arrowFunction();
myObject.regularFunction();

// ===========================================================

// Arrays

// array is collection of similar type or homogineus element but in js we use same type or not smae values

const friends = ["dhruv", "kamal", "manohar", 12];
console.log(friends);
console.log(friends[1]);
friends[2] = "Keyur";
console.log(friends);

//using array function

const year = new Array(1991, 2002, 2003, 2008, "manish");
console.log(year);

console.log(friends.length);

//Array Methods
const fruits = ["kiwi", "banana", "mango"];
fruits.push("orange");
console.log(fruits);

fruits.unshift("pineapple"); // add new element at beginning
console.log(fruits);

fruits.pop(); //last  deleted
console.log(fruits);

fruits.shift(); //first deleted
console.log(fruits);

console.log(fruits.indexOf("banana")); //return index of banana

//Es6 method :-
console.log(fruits.includes("banana")); //true or false
console.log(fruits.includes("apple"));

// =====================================================================

//Object

//Combine key-value pair values
//object literal
//array used for structure data and object for unstructured data;
//order not matter
const person = {
  firstName: "Manish",
  lastName: "Prajapati",
  newAge: 21,
  study: "final year",
  marks: [14, 24, 22, 44, 55, 33, 23],
};

//getting property we use dot(.) operator or bracket([])

console.log(person.marks[3]); //
console.log(person["firstName"]); //we can put any expression inside bracket

const nameKey = "Name";

console.log(person["first" + nameKey]); // person[firstName]
console.log(person["last" + nameKey]);

//above line code not work with . dot operator
// console.log(person.'first' + nameKey);

/* const prompt=require("prompt-sync")({sigint:true}); 

const interestedIn = prompt("What do you want to know about manish? Choose between firstName, lastName, newAge, marks: ");

console.log(person.interestedIn); //undefined

console.log(person[interestedIn]);  //give property

if(person[interestedIn])
    console.log(person[interestedIn]);  //give property
else
    console.log("Wrong request");
 */

// ===================
// add value in Object

person.location = "India";
person["email"] = "mkprajapat123@gmail.com";

console.log(person);

// ============================================================================

// Object Methods
// Note:- only function expression allowed inside object

const students = {
  name: "Manish",
  age: 21,
  marks: 100,

  result: function (marks) {
    // function is a value
    if (marks >= 40) return "Pass";
    else if (marks >= 20) return "Pass by Grade";
    else return "Fail";
  },
};
console.log(students.name);
console.log(students.result(80));
console.log(students["result"](19));

//This keyword
//In object case this refers to local object

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,

  //  calAge : function(birthYear){
  //     return 2037-birthYear;
  //  },

  //If we know jonas birthyear then we directly access from jonas object using this keyword

  //  calAge : function(){
  //      return 2037-this.birthYear; //this refer jonas object birthYear
  //   },

  //If multiple function calling same function then same computation done multiple time so we optimize DRY principle
  calAge: function () {
    this.age1 = 2037 - this.birthYear;
    return this.age1;
  },
};
// console.log(jonas.age1);  // 46

console.log(jonas.calAge()); //this will be of jonas object
console.log(jonas.calAge());

//we directly access age1 variable no need to calling function agin and agin
console.log(jonas.age1);
console.log(jonas.age1);
console.log(jonas.age1);
console.log(jonas.age1);

//getting all keys
console.log(Object.keys(jonas));
//getting all values of keys
console.log(Object.values(jonas));

// ============================
// Arrays is  also object
let cities = ["sirohi", "pali", "mount"];

console.log(Object.keys(cities)); // array indices
console.log(Object.values(cities)); //indices value

// we can change const array value
// const array define a constant reference to an array, due to this we still change the elements of a constant array

const a1 = ["a", "b", "c"];
const a2 = ["d", "e", "f"];

// a1=['a','3','g']  //This not allowed in const array because we cannot reassign reference of const array

a1[1] = "d";
console.log(a1);

// loops :- FOllOW DRY
// for , do-while, while

const score = [100, 130, 80, 45, [12, 34]];
const type = [];

// for(let i = 0; ; i++){   // this run infinite
//     console.log(score[i]);
// }
console.log(typeof score[4]); //object
console.log(score.length); //5

for (let i = 0; i < score.length; i++) {
  console.log(score[i], typeof score[i]);

  // type[i] = typeof(jonas[i]);
  type.push(typeof score[i]);
}
console.log(type);

// ========================================================================
let x = 10;
let y = (x++, x + 1);

console.log(x, y);
