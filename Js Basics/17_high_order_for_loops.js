/**************** FOR OF LOOP ******************/

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// For of does not work on objects

/*for (const [key, value] of myObject) {
     console.log(key, ':-', value);  
}*/



/********************FOR IN LOOP *******************/

console.log(" /******* FOR IN CONTENT  *******/");
const myObject2 = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject2) {
    console.log(`${key} shortcut is for ${myObject2[key]}`);
}

// this type doesn't work 
//for (const [key,value] in myObject2) {
//    console.log(`${key} shortcut is for ${value}`);
//}
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(key);
    console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// For in doesn't work for map 

// for (const key in map) {
//     console.log(key);
// }



/***************       FOR EACH LOOP       *******************/


const coding = ["js", "ruby", "java", "python", "cpp"]

// callback as simple func
 coding.forEach( function (val){
     console.log(val);
 } )

 // callback as arrow func
coding.forEach( (item) => {
    console.log(item);
} )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} )