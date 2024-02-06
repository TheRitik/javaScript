function sayMyName(){
    console.log("R");
    console.log("I");
    console.log("T");
    console.log("I");
    console.log("K");
}
sayMyName()

function add(number1,number2){
    console.log(number1+number2);
}

add(2,3)
add(2,"4")
add(2,"a")
add("4",2)

const myArr = [10,20,30,40]
function returnFirstValue (getArray){
    return getArray[0];
}

console.log(returnFirstValue(myArr));