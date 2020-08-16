function steamrollArray(arr) {
    let resultArray = [];
    for (let i = 0; i < arr.length; i++) {
        resultArray.push(arr[i]);
    }

    let i = 0;
    while (i < resultArray.length) {
        while (Array.isArray(resultArray[i]))
            resultArray.splice(i, 1, ...resultArray[i]);
        i++;
    }
    return resultArray;
}

steamrollArray([1, [2], [3, [[4]]]]);
console.log(steamrollArray([[["a"]], [["b"]]]));
