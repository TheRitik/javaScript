if(true){
    let a =10;
    var b =20;
    const c = 40;
}
 // console.log(a);  this can't access a 
console.log(b);  // b is accessible outside its scope
//console.log(c); // c is not accessible outside its scope

function one() {
    const name = "Ritik"
    function two() {
        const website = "GitHub"
        console.log(name);
    }
    //console.log(website);
    two();
}
one();

if(true){
    const name = "Ritik"
    if(true){
        const website = "gitHub";
        console.log(name+website);
    }
}

/*********INTERESTING ***********/


// Method1 
addOne(4) // normally declared func can accessible before its function
function addOne(num){
    return num + 1;
}
// addOne(4)

// Method 2 

// addTwo(5) // this can't be accessible before function initialling
const addTwo = function (num) {
    return num + 2 ;
}
addTwo(5);


