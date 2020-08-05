function titleCase(str) {
    str = str.toLowerCase();
    let arr = str.split(" ");
    let newStr = "";
    for (let i = 0; i < arr.length; i ++) {
        newStr = newStr + arr[i][0].toUpperCase() + arr[i].substring(1) + " ";
    }
    return newStr.trim();
}

titleCase("I'm a little tea pot");
console.log(titleCase("I'm a little tea pot"));