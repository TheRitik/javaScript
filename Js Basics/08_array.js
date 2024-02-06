const arr = [0,"ritik",23,'c']
console.log(arr[0]);

const arr2  =  new Array(1,2,3,45)

// Array Method
/*
arr2.push(34)
console.log(arr2);
arr2.pop()
console.log(arr2);
*/

arr2.unshift(9)
console.log(arr2);
arr2.shift()
console.log(arr2);

const arr3 = arr2.slice(1,3)      // doesn't affect original array
console.log(arr3);         
console.log(arr2);

const arr4 = arr2.splice(1,3)     // affect original array
console.log(arr4);
console.log(arr2)

const marvel_heros = ["thor","ironman","captain","spiderman"]

const dc_heros = ["Superman","Aquaman","wonder woman"]

//marvel_heros.push(dc_heros)  // push second array as a element to first array
console.log(marvel_heros);

    const heros = marvel_heros.concat(dc_heros) // add two array and make a new array
console.log(heros);

const all_heros = [...marvel_heros, ...dc_heros] // add two or more arrays by spreading it.
console.log(all_heros);

const arr5 = [1,3,[2,3,4],12,34,5,[23,5,34,64,3]]

const real_arr = arr5.flat(Infinity)

console.log(real_arr);

console.log(Array.isArray("Ritik")); // check passing parameter is arr or not
console.log(Array.from("Ritik")); // make array from passing parameters

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));




