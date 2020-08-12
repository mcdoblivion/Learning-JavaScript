function diffArray(arr1, arr2) {
    let copy1 = arr1.slice();
    let copy2 = arr2.slice();
    for (let i = 0; i < copy1.length; i++) {
        if (copy2.indexOf(copy1[i]) >= 0) {
            copy2.splice(copy2.indexOf(copy1[i]), 1);
            copy1.splice(i--, 1);
        }
    }
    return copy1.concat(copy2);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
console.log(
    diffArray(
        ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
        ["diorite", "andesite", "grass", "dirt", "dead shrub"]
    )
);
