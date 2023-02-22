const data = [
  {
    name: "Manish",
    weight: 50,
  },
  {
    name: "Rahul",
    weight: 81,
  },
  {
    name: "Dhruv",
    weight: 40,
  },
  {
    name: "Virat",
    weight: 20,
  },
];

//sort array of object according to weight
data.sort((a, b) => {
  return a.weight - b.weight;
});
console.log(data);

//sort array of object according to name
data.sort((a, b) => {
  return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
});
console.log(data);

// ==========================================================
let arr = [1, 2, 3, 4, 5];
//In js also support to use -ve indices
console.log(arr.at(2)); //3
console.log(arr.at(-2)); //4

// =============================================================
//Join all array element by #
console.log(arr.join("#"));

//  for … of – for-of loop can be used to get the values from an array.
//  for … in – for-in loop can be used to get the keys from an array.

let num = [10, 20, 30, 40];

for (let i in num) {
  console.log(i); //it give indices or keys
}
for (let i of num) console.log(i); //it give elements or value

// ==========================================

let str = "manish";
console.log(str.startsWith("m"));
console.log(str.endsWith("k"));

let str2 = "Please give Rs 1000";
console.log(str2.slice(str2.length - 4));
// console.log(typeof str2.slice(str2.length - 4)); //string

console.log(typeof Number.parseInt(str2.slice(str2.length - 4)));

// ===========================

let text = "manohar";
text[2] = "N"; //String cannot changed
console.log(text); //it print original string with no error

// Notes:- String is immutable, we can't change them

// ====================

// string literal vs string object

let x = "hello";
let y = "hello";

console.log(x === y); //true bcoz using string literal store in string pool area. here x and y belong to same location

// console.log(x, y);
// x = x + " India";
// console.log(x, y);

let x1 = new String("Aliens");
let y1 = new String("Aliens");

//Whenever we create string string object it create two copies of string one inside string pool area one in heap area. and in heap area new object for every string in but in string pool area, if the same string already present then it not create new string in pool area.

console.log(x1 === y1); //false

// =================================
// array method splice():- adding new elements

// splice(index where you want insert new ElementInternals, how many element we want to delete, elements)
//it return deleted values

let nums = [10, 20, 30, 40, 50];

nums.splice(1, 3, 11, 12, 13);
console.log(nums);

nums.splice(1, 0, 11, 12, 13); //I want no delete any element and add this new element
console.log(nums);

let del_items = nums.splice(1, 2, 11, 12, 13); //2 element deleted from index 1
console.log(del_items);

// =============================

let arr1 = [1, 2, 3, 4, 5];

// for-each loop used when calculating expression on existing element and map used when we want to return new array

// =====================================================================

/**
 * Higher order Methods / functions
 * It is a function that accept functions as parameter and or returns a function. called higher order function.
 * Thats why map(), filter and reduce() called as higher order Methods.
 */

let newArr = arr.map((value) => {
  console.log(value);
  return value * 10;
});
console.log(newArr);

// let newArr = arr.map((value, index, array) => {
//     console.log(value);
//     return value * 10;
//   });
//   console.log(newArr);

//same above use with for-each

// filter()
//filters an array with values that passes a test. create a new array
let arr2 = [12, 24, 36, 48, 60];
let res = arr2.filter((element) => {
  return element > 30;
});
console.log(res);

//reduce()
//reduce an array to a single value
let arr3 = [1, 2, 3, 4, 5, 1, 2, 3];
let res1 = arr3.reduce((x, y) => {
  return x + y;
  // 1+2 = 3
  // 3+3 = 6
  // 6+4 = 10
  // 10+5 = 15
  // 15+1 = 16
  // 16+2 = 18
  // 18+3 = 21
  //return last single value i.e 21
});
console.log(res1);

//factorial of an number using recursive
let a = 6;
function fact(num) {
  if (num == 0 || num == 1) return 1;
  return num * fact(num - 1);
}
console.log(fact(a));

//using iterative way of factorial of a number
{
  let res = 1;
  let result = (num) => {
    for (let i = 1; i <= num; i++) {
      res *= i;
    }
    return res;
  };
  console.log(result(a));
}

//factorial using reduce()
{
  let arr = [1, 2, 3, 4, 5, 6];
  let n = arr.reduce((x, y) => {
    return x * y;
  });
  console.log(n);
}
// ====================================
//Array destructuring
//Order that variable are declared are important

/***
 * Destructuring
 * Destructuring Assignment is a JavaScript expression that allows to unpack values from arrays, or properties from objects, into distinct variables data can be extracted from arrays, objects, nested objects and assigning to variables.
 */

let arrayNew = ["manish", "rahul", "prekshit"];

let p1 = arrayNew[0];
let p2 = arrayNew[1];
console.log(p1, p2);

var [per1, per2] = arrayNew;

/**
 * per1  stores arrayNew[0]
 * per2 stores  arrayNew[1]
 *
 * if array element are less than variables it assign in undefined
 */
console.log(per1, per2);
console.log(per1, per2);

p1 = arrayNew[0];
p2 = arrayNew[2];

var [per1, , per2] = arrayNew; //per1-> arr[0], space -> arr[1]. per2-> arr[2]
console.log(per1, per2);

// ==========================
// clone an array
/* et arr10 = ["mansih", "rahul", "virat"];
let arr11 = arr10;
arr10[1] = "dhruv";
console.log(arr10, arr11);  //It changes in both array 
 */

// 2nd way
//this is also best to use
/* let arr10 = ["manish", "rahul", "virat"];
let arr11 = arr10.slice(0);
console.log(arr11);
arr10[1] = "dhruv";
console.log(arr10); */

//3rd using concate
/* 
let arr10 = ["mansih", "rahul", "virat"];
let arr11 = [].concat(arr10);
arr11[1] = "siro";
console.log(arr11); */

//4 way
// using spread operator
//new and more used way
let arr10 = ["mansih", "rahul", "virat"];
let arr11 = [...arr10];
console.log(arr11);

//merge 2 or more arrays
let arr12 = ["sirohi", "mount", "abu", "pali"];
// let temp1 =[...arr12];
// let temp = [...arr10, ...arr12];
let temp = [...arr10, ...arr12, "Hello", "123"];
console.log(temp);

//spreading string
//for spreading requires a iterable object.
// let newstring = 12345678910;  //This is not working bcoz it not iterable

let newstring = "12345678910";
// console.log([...newstring].toString());
console.log([...newstring]); //spread into characters

//spread operator in Object case

/**
 * Spread operator
 * make deep copies of js objects
 * takes iterable(array, string, obj) and expand it into individual elements
 * coping all elements from one array or object to another
 */
let obj1 = {
  key1: "value1",
  key2: "value2",
};
let obj2 = {
  key3: "value3",
  key4: "value4",
};

//clone object into other object

let obj3 = { ...obj1 };
console.log(obj3);

//cloning both object data into other object
obj3 = { ...obj1, ...obj2 };
console.log(obj3);

//adding new key
obj3 = { ...obj1, ...obj2, key10: "value10" }; //key10 added into obj3
console.log(obj3);

//converting string into key-value pair
obj3 = { ..."hello" };
obj3 = { ...["hy", "I", "am", "manish"] };
console.log(obj3);

// ================================

//swap two numbers
var a1 = 10,
  b1 = 20;
[a1, b1] = [b1, a1];
console.log(a1, b1);

// ==================================

// destructuring with object

const person = {
  name: "mayur kumar",
  age: 20,
};
// const personName = person.name;
// const personAge = person.age;
// console.log(personName, personAge);

//we can do same above work in shortcut way
//must to use key same as object
const { name, age } = person;
console.log(name, age);

//If I want to change key
const { name: firstName, age: personAge } = person;
console.log(firstName, personAge);

const person1 = {
  name1: "mayur kumar",
  age1: 20,
  salary: "1000K",
  department: "IT",
};

//If we want ro name and age stored in seperate variable and remaining properties are in single variable
const { name1, age1, ...restProps } = person1;
console.log(restProps); //remaining elements are in restProps

let numbers1 = [3, 2, 7, 53, 12, 3];
console.log(Math.min(...numbers1));
console.log(Math.max(...numbers1));

// ========================================

//Lexical Scope
//the available data and variables where the function is defined, determines our available variables.

//The Global lexical environment is the first lexical environment where we write our code, and wherever we create a function, We create a new lexical environment inside that function.

/***
 * In js, whenever we create a function, that created a new world for us inside that function.
 * Execution context tells us which lexical environment is currently running
 *
 */

function myFun() {
  const myVar = "inside myFun";
  function myfun1() {
    // var myVar = "inside myfun1";
    console.log(myVar);
  }
  myfun1();
}
myFun();

// ==============================
// callback function
//callback keyword is convention when we pass function as a argument
function myFun(name) {
  console.log("Inside my fun");
  console.log(`My name is ${name}`);
}
function myFun1(callback) {
  //callback refers to our callback function
  console.log("Hello I am in myFun1");
  // callback();
  callback("Manish"); //call myFun()
}
myFun1(myFun); //myFun is callback fun bcoz we pass function as an argument of myFun1
