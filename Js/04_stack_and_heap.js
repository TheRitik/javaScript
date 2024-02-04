// Primitive datatypes always stored in Stack. At time of assigning a copy of original 
// variable assign to new variable. Change in new variable can't affect the origianl values
// Non Primitive datatypes stored in Heap. Changes in new variable affect original values

// Stack gives copy and heap gives reference

let name = "RitikKumar"

let anotherName = name 
anotherName = "Ritik"
console.log(name);
console.log(anotherName);

let obj = {
    name: "ritik",
    age : 18,
}
let anotherObj = obj
anotherObj.age = 22
console.log(obj.age);
console.log(anotherObj.age);