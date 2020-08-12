// Only change code below this line
function urlSlug(title) {
    let lowerCase = title.toLowerCase().trim();
    let arr = lowerCase.split(/\s+/);
    return arr.join("-");
}
// Only change code above this line
console.log(urlSlug(" Winter Is  Coming"));
