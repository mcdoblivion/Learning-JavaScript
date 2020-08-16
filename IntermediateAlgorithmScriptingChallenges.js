function dropElements(arr, func) {
    while (true) {
        if (func(arr[0])) break;
        else arr.shift();
    }
    return arr;
}

dropElements([1, 2, 3], function (n) {
    return n < 3;
});
