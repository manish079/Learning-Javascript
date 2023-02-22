// math object

console.log(Math.PI);

console.log(Math.round(3.7)); //4
console.log(Math.round(3.5)); //3

console.log(Math.floor(3.9)); //3
console.log(Math.ceil(3.9)); //4

console.log(Math.max(10, 20));
console.log(Math.min(10, 20));

console.log(Math.pow(2, 3));
console.log(2 ** 3);

console.log(Math.sqrt(25)); //5
console.log(Math.sqrt(36)); //6

console.log(Math.abs(-343)); //343

console.log(Math.floor(Math.random() * 10)); //0 to 9

console.log(Math.floor(Math.random() * 100)); //0 to 99

console.log(Math.trunc(4.6)); //return value of before decimal //work like floor
console.log(Math.trunc(-87.9)); //work like ceil

//best way to generate random number between two numbers
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
console.log(getRandom(10, 20));
