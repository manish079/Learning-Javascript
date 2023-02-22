const firstName = 'Manish';
const job = 'Programmer';
const birth = 2002;
const year = 2023;

const man = "I'm "+ firstName+", a "+(year-birth)+ ' years old'+'!'; console.log(man);

// Above way is writing string very hectick for complex string

// So ES6 new way introduce is template literals or string template(a string written in tiled sign `str` known as template literals)
// features
// 1. We can write multiple line
//    let text=`hello,
//               How are your, 
//               please take your
//               sheet`

//2. Quotes inside string
    // let text = `Hy dear! I am "Manish"`

const name1 = `I'm ${firstName}, a ${year-birth} old ${job}`;
console.log(name1)


console.log('Just a regualr message...');


// ==============================================================

//Type conversion and Corecion
const inputYear = '1991';
console.log(Number(inputYear));
console.log(inputYear + 22);


console.log(Number("Manish"));
console.log(typeof(NaN));   //Invalid Number

console.log(String(32));
console.log(typeof(String(32)));

console.log(Number(23), 44);

// ===============================================================

//type corecion
console.log('I am ' + 21 + ' years old');
console.log('23' - '10' - '3');
console.log('23' / '2');
console.log(typeof('23'/'2'));  //Number
// when a string consist artihmatic operator then its type is NUmber
console.log("manish"/"kumar");//NaN
console.log(typeof("manish"/"kumar"));  //Number


let n = '1' + 1; //automatically '11'
n = n-1;
console.log(n) //10;

console.log('10'-'4'-'3'-2+'5'); // 
// 10 converted into number also 4 and 3
//firstly solved '10'-'4'-3' this expression is give 1 
//Then 1+'5'  // here + is concatenate so ans will be 15

console.log('10'-4);  //6
console.log('10'-'4'); //6
console.log('10'+4);   //104

console.log(typeof('10'-'4'-'3'-2));  //Type is Number
console.log(typeof('10'-'4'-'3'-2+'5'));  //Type is String

console.log('43'+34+6);  //43346
console.log(4+3+'34'); // 734 
console.log(4+'34'+3); // 4343

//Note If after string litteral if + then next expression append into string 



// ================================================
// truthy and falsy values
// 5 falsy values in js
// 0, "", null, undefined, NaN
//apart from this are all truthy values

console.log(Boolean(0));
console.log(Boolean(1)); //1 truthy
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean({})); //empty object
console.log(Boolean("Manish"));

// const money = 12;  //truthy value  
const money = 0;  
if(money)
    console.log("Don't spend");
else
    console.log("You sould get job");


let height;  //undefiend bydefult
if(height)
    console.log("Height is defined");
else
    console.log("Hoeight not defined");


 //Ternary operator
const x = 20>30?console.log("20 bigger"):console.log("20 is smaller");;


// ================================================

// Equality operator == vs ===
// === strict operator and == loose operator
const age = 18
const newAge = '18';

if(age === newAge) console.log("You should give vote vote");

// =============================================================
/* const fav = prompt("Enter age")  //by default take string as an input

console.log(typeof fav);

if(fav == 23)
    console.log("This number is amazing");
if(fav === 23)
    console.log("This number is super amazing");

    const fav1 = Number(prompt("Enter your age"))  //Age converted into Number 

    console.log(typeof fav1);  //Number
 */


//   != loose version and !== strict version

var a = 10
var b = 10
var c = '10';

if(a!=c)
    console.log("1st block");
else if(a!==c) //also checking type of values
    console.log("2nd block");
else
    console.log("None");



    // ==============================================================

    //Boolean Logic or Logical Operator
    // and, or, not

    
const hasDriverLicence = true;
const hasGoodVision = false;

console.log(hasDriverLicence && hasGoodVision);

console.log(hasDriverLicence || hasGoodVision);

console.log(!hasDriverLicence || hasGoodVision);





//switch statement
var order='Aloo';
switch(order){
    case 'pizza':console.log("You order pizza");
    break;
    case 'burger':
        console.log("You order burger");
        break;
    default:
        console.log("You order Sandvich");
}

//while
let i =1;
const table=16;
while(i<=10){
    console.log(`${i}*${table} =  `+i*table);
    i++;
}

//do-while

console.log("\n");

let i1=1;

do{
    console.log(i1 + "*" + 5 + " = ", i1*5);
    i1++;
}
while(i1<=10);

//
// *
// * *
// * * *
// * * * *

let rows = 5;
let col = 5;
let star="";
for(let i = 1; i<=rows; i++){
    for(let j=1; j<=i; j++){
        star = star.concat("* ");
    }
    star = star.concat("\n");
}
console.log(star);

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5


let num = 1;

for(let i=1; i<=5; i++){
    num=1;
    for(let j=1; j<=i; j++){
        star = star.concat(num+" ")
        num++;
    }
    star= star.concat("\n");
}
console.log(star+"\n");


// *       *
// **     **
// ***   ***
// **** ****
// *********




// =============================================================

// statement vs expression
// expression :- is piece of code that produce output. ex 3+4, 11, true&&false&&!false, "manishprajapat"

//statements:-  bigger piece of code that execute and does not produce output. It like complete sentence. statements can also be a expression
// A statement is a group of expressions and/or statements that you design to carry out a task or an action.

// if(23 > 2)
//     const str = '23 is bigger';  // is a statement


// let multiply  = function fun(firstNumber, secondNumber){  //This is statement
//     return firstNumber * secondNumber;  //This is expression
// }


// ==================================================================================================

// Don't break the web

//How to use modern javascript today

// During development:- Simply use the latest Google Chrome!

// During Production:- Use Babel to transpile and polyfill your code(converting back to ES5 to ensure browser compatibility for all users)

