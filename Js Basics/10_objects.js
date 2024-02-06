// singleton objects , const obj = new Object()
// non singletom objects,  const obj = {}

const tinderUser = {}
tinderUser.name = "sam"
tinderUser.id = "23skdf3"
tinderUser.isLoggedIn  = false

console.log(tinderUser);

const regularUser = {
    email: "gmail.com",
    fullName : {
        userFullName:{
            firstName:"Ritik",
            lastName : "Pal",
        }
    }
}
console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {
    1:"a",
    2:"b",
}
const obj2 ={
    3:"c",
    4:"d",
}


// to add two or more objects
//const obj3 = {obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2) // assign(target,source1,source2,.......) , so we take an empty obj as a target, other wise it will change source1 
const obj3 = {...obj1,...obj2}
console.log(obj3);

const user =[
    {
        id: 3,
        name : "ritik",
    },
    {
        id: 3,
        name : "ritik",
    },
    {
        id: 3,
        name : "ritik",
    },
    {
        id: 3,
        name : "ritik",
    },
    
]
console.log(user[1].id);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('name'));


const engg = {
    branch: "ece",
    session:"2024",
}

// engg.branch not need you can destructure your obj
//const {branch } = engg
// or 
const {branch : b} = engg
console.log(b);

