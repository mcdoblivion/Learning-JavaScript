function uniteUnique(...arr) {
    let concatAll = arr.reduce(
        (concatArr, element) => concatArr.concat(element),
        []
    );

    let result = [];
    for (let i = 0; i < concatAll.length; i++) {
        if (result.indexOf(concatAll[i]) == -1) result.push(concatAll[i]);
    }
    return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
