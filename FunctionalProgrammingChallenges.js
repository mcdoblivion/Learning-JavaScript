const squareList = (arr) => {
    // Only change code below this line
    let positiveIntegerArr = arr.filter(
        (realNumber) => Number.isInteger(realNumber) && realNumber > 0
    );
    let squareArr = positiveIntegerArr.map((number) => number * number);
    return squareArr;
    // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
