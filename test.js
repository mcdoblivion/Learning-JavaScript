// Only change code below this line
var arr = [];
function countdown(n) {
    if (n < 1) {
        return [];
    } else {
        const countArr = countdown(n - 1);
        countArr.unshift(n);
        return countArr;
    }
}
// Only change code above this line
