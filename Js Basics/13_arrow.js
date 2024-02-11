const user ={
    username: "Ritik",
    price : 799,
    welcomeMsg : function(){
        console.log(`${this.username}, welcome to the site`);
        console.log(this);
    }
    
}
user.welcomeMsg()
user.username = "Sam"
user.welcomeMsg()
console.log(this);

function one() {
    console.log(this); 
}
one()

// arrow function   
const two = () =>{
    console.log(this);
}
two()

// implicit arrow func
const four  = (c,d) => (c+d)

console.log(four(4,3))

const three = (a,b) =>{
    return a+b
}
three(2,3)

