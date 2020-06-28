let username = "Z97";
let userCheck = /^[a-z]([a-z]+\d*|[\d][\d])$/i; // Change this line
let result = userCheck.test(username);
console.log(username.match(userCheck));