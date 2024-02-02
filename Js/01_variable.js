const accountId = 14345
let accountEmail = "ritik@google.com"
var accountPassword = "12345"
accountCity  = "Ghaziabad"
// accountId = 100   {NOT ALLOWED}
accountEmail = "ritikemail.com"
accountPassword = "23451"
accountCity = "Dhampur"

/*
Prefer not to use var 
bcoz of issue in block scope and functional scope
 */

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity])