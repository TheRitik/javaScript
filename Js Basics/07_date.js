let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toJSON());

let newDate = new Date(2023,11,23)
console.log(newDate.toDateString());

let newDate1 = new Date("2023-01-21")
//console.log(newDate1.toDateString());

let timeStamp = Date.now();
//console.log(timeStamp);
//console.log(newDate1.getTime());
console.log(Math.floor(Date.now()/1000));

