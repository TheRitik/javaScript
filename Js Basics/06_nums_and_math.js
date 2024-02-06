/*
const score = 400

const balance = new Number (200)
console.log(balance);

console.log(balance.toString());
console.log(balance.toFixed(2));    //value after point

const otherNum = 34.773243
console.log(otherNum.toPrecision(2)); // to round off a decimal number

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));
*/


/********************* MATH ************/

console.log(Math);
console.log(Math.abs(-5));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));

console.log(Math.random()); //Its lie between 0 to 1

const min = 1
const max = 2

console.log(Math.floor(Math.random()* (max-min +1)) + min)