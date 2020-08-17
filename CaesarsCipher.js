function rot13(str) {
    return str.replace(/\w/g, (char) =>
        String.fromCharCode(((char.charCodeAt(0) - 65 + 13) % 26) + 65)
    );
}

rot13("SERR PBQR PNZC");
console.log(rot13("SERR PBQR PNZC"));
