function palindrome(str) {
    // Remove character is not an word character and transform to lower case
    let newStr = str.replace(/\W|_/g, "").toLowerCase();
    // Reverse string an check if it change or not
    return newStr === newStr.split("").reverse().join("");
}

palindrome("eye");
console.log(palindrome("abbA"));
