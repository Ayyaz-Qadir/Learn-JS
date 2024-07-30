// let, const and var video

const accountId = 1973923;
let accountEmail = "abc@cde.com";
var accountPassword = "12345";
accountCity = "Lahore";
let accountState;  // not assigned value it will show undefine

// accountId = 2 // conts changing not allowed
accountEmail = "def@gmail.com";
accountPassword = "67890";
accountCity = "Karachi";

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);