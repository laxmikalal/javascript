const accountId = 12345;
let accountEmail = "laxmi@gmail.com"
var accountPassword = 12345;
accountCity = "Mumbai";
// accountId =22; // not allowed
accountEmail = "chandu@gmail.com"
accountPassword = 3456;
accountCity = "Delhi"
let accountState // this is undefined

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use var
Because of issue in block scope and functional scope
*/
console.log(accountId);
