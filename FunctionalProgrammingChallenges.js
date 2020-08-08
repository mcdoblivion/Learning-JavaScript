// The global variable
var bookList = [
    "The Hound of the Baskervilles",
    "On The Electrodynamics of Moving Bodies",
    "Philosophiæ Naturalis Principia Mathematica",
    "Disquisitiones Arithmeticae",
];

// Change code below this line
function add(bookList, bookName) {
    let copyBookList = [];
    for (let i = 0; i < bookList.length; i++) {
        copyBookList.push(bookList[i]);
    }
    copyBookList.push(bookName);
    return copyBookList;
    // Change code above this line
}

// Change code below this line
function remove(bookList, bookName) {
    let copyBookList = [];
    for (let i = 0; i < bookList.length; i++) {
        copyBookList.push(bookList[i]);
    }
    let index = copyBookList.indexOf(bookName);
    if (index >= 0) {
        copyBookList.splice(index, 1);
    }
    return copyBookList;
}

var newBookList = add(bookList, "A Brief History of Time");
var newerBookList = remove(bookList, "On The Electrodynamics of Moving Bodies");
var newestBookList = remove(
    add(bookList, "A Brief History of Time"),
    "On The Electrodynamics of Moving Bodies"
);

console.log(bookList);
