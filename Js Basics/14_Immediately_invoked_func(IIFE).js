// iife is used to reduce global scope polution 

(function one (){
    console.log("One");
})();

const two = (() =>{
    console.log("two");
})();
// this type of function can't deal with IIFE

(()=>{
    console.log("three");
})()