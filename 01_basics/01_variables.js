const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Pathardi"
let accountState;

// accountId = 2

accountEmail = "hc@hc.com";
accountPassword = "21212121";
accountCity = "Pune";

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);