function destroyer(arr, ...valueToRemove) {
    return arr.filter(element => valueToRemove.indexOf(element) < 0);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
