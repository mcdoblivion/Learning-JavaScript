let sampleWord = "astronaut";
let pwRegex = /(?=^\D\w{5,})(?=.*\d{2,}.*)/ig; // Change this line
let result = pwRegex.test(sampleWord);
