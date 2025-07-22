const accountId = 14453
let accountEmail = "arya1234@gmail.com"
var accountPassword ="12345"
accountCity = "Jaipur"
// accountId =2 // not allowed 
accountEmail ="abcd@abcd.com"
accountPassword="1223442"
accountCity="Berhampore"
let accountState;
console.log(accountId)
/* Prefer not to use var because of issue in the block scope and
functional scope*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])