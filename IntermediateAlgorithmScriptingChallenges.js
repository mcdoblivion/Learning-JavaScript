function fearNotLetter(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < str.length; i++) {
        if (alphabet.indexOf(str.substring(0, i + 1)) == -1)
            return alphabet[alphabet.indexOf(str.substring(0, i)) + i];
    }
    return undefined;
}

fearNotLetter("abce");
console.log(fearNotLetter("abce"));
