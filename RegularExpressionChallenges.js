let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;
switch (result) {
    case 0:
        console.log("zero");
        break;
    case 1:
        console.log("one");
    case 2:
        console.log("two");
        break;
    case 3:
        console.log("three");
    case 4:
        console.log("four");
        break;
    case 5:
        console.log("five");
    case 6:
        console.log("six");
        break;
    case 7:
        console.log("seven");
    case 8:
        console.log("eight");
    case 9:
        console.log("nine");
}
