let score = "33abs"

let score1 = null
console.log(typeof score);

let valueInNumber = Number(score)
let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber);
console.log(valueInNumber);  //Not a number NaN

console.log(valueInNumber1);


/*****           OPERATIONS         *****/

let value = 3
let negValue = -value

/*console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);   // power
console.log(2/2);
console.log(2%2);*/

let str1 = "Hello"
let str2 = " Ritik"
console.log(str1 + str2 );

/*console.log("1"+2);
console.log(1+"2");
console.log("1"+2+3);    // bcoz treats all elements as string
console.log(1+2+"3");*/

console.log("2">1); // automatically convert into number 

/*console.log(null == 0); // false
console.log(null >= 0); // true : comparison convert null to a number and treats null as 0 */


// === does not convert 
// console.log("2" === 2); //false 

const bigNumber = 23142353145324513453452345345n


// Reference (Non Primitive)
// Object, Array, Function

const heros = ["Shaktiman","Naagraj"]

let myobj = {
    age: 14,
    name: "ritik",
}

let func = function(){
    console.log("Hello");
}

console.log(typeof bigNumber);
console.log(typeof func);
console.log(typeof myobj);