// Singleton makes from constructor method
// Object.create


// object literals
const JsUser = {
    name:"Ritik", // key always store as string so you don't have to mention "name".
    age: 20,
    email:"ritik@google.com",
    "location":"Ghaziabad",
    "college name": "AKGEC",
    
}
console.log(JsUser.name); // you can't access ."name" 
console.log(JsUser["email"]); // so you have go with matrix notation 
console.log(JsUser.location);
console.log(JsUser["college name"]);

const mySym =  Symbol("Key1")

const obj = {
    [mySym] :"newKey",
}
console.log(obj[mySym]);

JsUser.email = "ritik@email.com"
console.log(JsUser);
//Object.freeze(JsUser)

JsUser.email = "ritik@ms.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log(`Hello JsUser, ${this.name} `);
}
console.log(JsUser.greeting());



