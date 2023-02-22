// ES6- for-in and for-of

let cities = ["sirohi", "abu", "pali", "mount"];

for (let i = 0; i < cities.length; i++) {
  console.log(cities[i]);
}

// for-in gives index number of an array
for (let elements in cities) {
  console.log(elements);
  //   console.log(cities[elements]);
}

//for-of gives value of an index

for (let elements of cities) {
  console.log(elements);
}

//for-each
//calls a function for each element in the array
//passes callback function for each element of array together with current element, index, array
//we cannot use break inside for-each bcoz of the callback function
//1st call back func calls for array value index 0
//and element consist current value, index is current index, array
cities.forEach(function (element, index, array) {
  console.log(element + "index : " + index);
});

cities.forEach((element, index, array) => {
  console.log(element + " index: " + index);
});

//arrow function not use this

// ====================================

// Array Methods
let friends = ["mohit", "dhruv", "kamal", "chirag"];

// =======Searching and filter in an array
//Returns the first(least) index of an element within the array equal to an element, or -1 if none is found. It search the element from the 0th index number

//foreword search
console.log(friends.indexOf("dhruv")); //1
console.log(friends.indexOf("dh")); //-1

// ============================================
//Returns the last index of an element within the array equal to an element, or -1 if none is found. It search the element from the 0th index number

// backword search
console.log(friends.lastIndexOf("chirag"));
console.log(friends.lastIndexOf("manish")); //-1

// ============================================
//includes
//check array element present in array or not

console.log(friends.includes("dhruv")); //true
console.log(friends.includes("manish")); //false

// search from index
console.log(friends.includes("dhruv", 2)); //false
console.log(friends.includes("dhruv", 1)); //true

//Note:- include method is case sensitive dhruv and Dhruv both different things
console.log(friends.includes("Dhruv"));

// ==========================================
//find method
//If element not found return undefined
//return value of the first element that passes a test
//executes a function for each array element
//it return value
let scores = [10, 40, 23, 44, 100, 87, 65];

const found = scores.find((element) => element > 20);
console.log(found);

const found1 = scores.find((element) => element === 20);
console.log(found1);
//return 1st satisfied element

// ==================================
//return -1 if not present
//it return index
//both same things findIndex and find()

//call back calls one by one element
//once condition satisfy it return

//callback
function run(element, index, array) {
  return element > 40;
}
console.log(scores.findIndex(run));

//shorter way
// let run = scores.findIndex((score) => {
//   return score > 40;
// });
// console.log(run); //index of 40

// =============================
/* traversal of an array
searching and filter in an array
how to sort and compare an array
how to IntersectionObserverEntry, add, replace, delete element in array (CRUD)
Map(), Reduce(), filter() */

// =========================================

// filter()
//use for filtering data
//filter fruits whose length is equal to 5 or more
let fruites = ["banana", "kiwi", "mango", "carrot", "orange"];

const result = fruites.filter((fruit) => fruit.length >= 5);

console.log(result);

//callback passed and index and array optional also one more passed here this
function isBigEnough(value, index, array) {
  //   return index > 2; //return valaue whose index from more to 2

  return value > 20;
}
const filtered = [12, 54, 32, 76, 55, 34, 2, 12, 23].filter(isBigEnough);

console.log(filtered);

//Prime numbers all
const arr = [-2, -1, -0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function isPrime(num) {
  for (let j = 2; num > j; j++) {
    if (num % j == 0) {
      return false;
    }
  }
  return num > 1; //true
}

console.log(arr.filter(isPrime));

let arr1 = [
  "manish",
  "rahul",
  "neha",
  "simran",
  "raj",
  "anushka",
  "vishaka",
  "srishti",
];

//one by one array element calls filterNames()
function filterNames(names, query) {
  return names.filter((element) => element.includes(query));
}
console.log(filterNames(arr1, "sh"));
console.log(filterNames(arr1, "is"));

// ====================================

// sort();

console.log(arr1.sort()); //ascending order

//descending sort
console.log(arr1.reverse());

const numberArray = [40, 1, 5, 200];
console.log(numberArray.sort()); // 1, 200,40,5

//above int array not sorted correclty bcoz in js sort converting number array into string accroding to UTF-16 so here 40 converted in fourty, one, five, two hundread and sort according this sequence

//If we want to sort according number we use compare function

// To compare numbers instead of strings, the compare function can subtract b from a. The following function will sort the array in ascending order (if it doesn't contain Infinity and NaN):

const numberArray1 = [40, 200, 4, 5, 80];
// console.log(numberArray1.sort());
function compareNumbers(a, b) {
  console.log(`comparing ${a},${b}`);
  return a - b;

  //   return a > b ? 1 : a === b ? 0 : -1
}

// a < b => -1
// a > b => 1
// a == b => 0

console.log(numberArray1.sort(compareNumbers));

const person = [
  { name: "manish", value: 21 },
  { name: "krishna", value: 51 },
  { name: "vivek", value: 11 },
  { name: "sameer", value: 23 },
  { name: "sahul", value: 18 },
  { name: "akshay", value: 34 },
];

// person.forEach(function (element, index, array) {
//   console.log(element);
// });

//sort according to value
person.sort((a, b) => {
  console.log(`comparing ${a.value} , ${b.value}`);
  return a.value - b.value;
});

console.log(person);

//sort according key or name

person.sort((a, b) => {
  return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
});

console.log(person);

// ===================

// splice():- It do all CRUD operation in just use of single splice();

let bb = [34, 2, 4, 3, 5, 7, 8];

// delete bb[2]; //it reserve empty space to undefined. element not shifted at deleted element position.
// console.log(bb.at(2)); //undefined
// console.log(bb);

//splice given a facility to we can add element and delete element in middle also
//splice return array of deleted elements

// bb.splice(2, 1);
// bb.splice(2); //deleted all element from index 2
// console.log(bb);
// console.log(bb.at(2));

console.log(bb.splice(1, 3, 10, 20));
console.log(bb);

const month = ["jan", "march", "april", "july", "september"];

// const newMonth = month.splice(4, 0, "Dec"); // add dec at index 4 and without deleting any element
// const newMonth1 = month.splice(4, 1, "Dec");

//delete
// const newMonth1 = month.splice(4, 1, "Dec"); //update

// console.log(month);

//update data

const indexOfMonth = month.indexOf("march");

//means value presented
if (indexOfMonth != -1) {
  const updateMonth = month.splice(indexOfMonth, "December");
  console.log(month);

  console.log(updateMonth);
} else {
  console.log("No valid output");
}

// -===================
// Map(), reduce(), filter()
// It also calling callback function for every element
//map and for-each almost same both use for show data
//Returns a new array containing the result of calling a function on every element in this array
//It return new array without mutating the original array
//better to use map instead of for-each
//(currELe, index, array) is callback
const array1 = [1, 4, 9, 16, 25];

// let newArr = array1.filter((currElement, index, array) => {
//   return currElement > 9;
// });

let newArr = array1.map((currElement, index, array) => {
  return currElement > 9;
});
console.log(array1);
console.log(newArr);

// map vs for-each
//map create new array but for-each no it changes in original array

let newArr1 = array1.map((currEle, index, arr) => {
  return `Index no = ${index} and the value is ${currEle} belong to ${arr}`;
});
console.log(newArr1);

let newArr2 = newArr.forEach((currEle, index, arr) => {
  return `Index no = ${index} and the value is ${currEle} belong to ${arr}`;
});
console.log(newArr2);

// for-each return undefined and map return new array

//map() is chainable. means we can attach reduce(), sort(), filter() and so after performing a map() method on the array
//but same thing we cannot do with forEach() bcoz it returns undefined.
//map() used in API calling

const myArr = [1, 2, 3, 4, 5];

myArr.forEach((ele, index, arr) => (myArr[index] = ele * ele));

console.log(myArr);

const myArr1 = [1, 2, 3, 4, 5];

// myArr1.map((ele, index, arr) => (myArr1[index] = ele * ele), this);
// console.log(myArr1);

// ===
console.log(
  myArr1.map((ele) => ele * ele).reduce((total, value) => total + value)
); //return 55

// myArr1.forEach((ele) => ele * ele).reduce((total, value) => total + value); //cannot read property 'reduce' of undefiend

/*ex:- find the sqquare root  of each element int an array
let arr = [25,36,49,64,81] */

let squareArr = [25, 36, 49, 64, 81];

let arrSqr = squareArr.map((currEle) => {
  return Math.sqrt(currEle);
});
console.log(arrSqr);

// ex 2. multiple each element by 2 and return only those elemens which are greater than 10

let arrayA = [2, 3, 4, 6, 8];

/* let arrayTemp = arrayA
  .map((currEle) => currEle * 2)
  .filter((currEle) => currEle > 10).; //this called chaining method */

let arrayTemp = arrayA
  .map((currEle) => currEle * 2)
  .filter((currEle) => currEle > 10)
  .reduce((accumulator, currEle, index, array) => {
    //I want also do sum of whose greater than to 10
    return accumulator + currEle;
  }); //this called chaining method

console.log(arrayTemp);

// ========================

// Reduce()
//used where we want to single value, like sum, average, %age
//flatten an array means to convert the 3d or 2d array into a single dimension array
//reduce() method executes a reducer function(that we provided) on each element  of the array, resulting in single output value

//the reducer function takes four arguments
//Accumulator
//Current value
//current index
//source array

let arrA = [3, 5, 7];

let sum = arrA.reduce((accumulator, currEle, index, arr) => {
  // console.log(accumulator);
  return accumulator + currEle; //each time sum stored in accumulator
});
console.log(sum);

// 8 is initial value of our is 8

let sum1 = arrA.reduce((accumulator, currEle, index, arr) => {
  // console.log(accumulator);
  return accumulator + currEle; //each time sum stored in accumulator
}, 8);
console.log(sum1);

// ==========================================
const moreArr = [
  ["Rajasthan", "Jaipur"],
  ["Utter Pardesh", "Lacknow"],
  ["Asam", "Gangtock", ["Maharasta", "Mumbai"]],
];

let flattenArr = moreArr.reduce((accum, currVal) => {
  return accum.concat(currVal);
});
console.log(flattenArr);
//ES21 introduce new feature. So we now not use more reduce()
