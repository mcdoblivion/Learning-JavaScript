function chunkArrayInGroups(arr, size) {
    let newArr = [];
    while (arr.length > 0) {
        let temp = [];
        for (let j = 0; j < size; j++) {
            if(arr.length > 0) temp.push(arr.shift());
        }
        newArr.push(temp);
    }
    return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));