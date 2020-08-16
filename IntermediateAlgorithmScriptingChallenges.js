function addTogether(...arr) {
    if (!arr.every((element) => typeof element === "number")) return undefined;
    return arr.length === 2
        ? arr[0] + arr[1]
        : (num) => (Number.isInteger(num) ? arr[0] + num : undefined);
}

addTogether(2, 3);
console.log(addTogether(2)([3]));
