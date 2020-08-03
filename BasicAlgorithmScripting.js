function reverseString(str) {
    let arr = str.split('');
    str = '';
    for(let i = arr.length - 1; i >= 0; i--){
        str += arr[i];
    }
    return str;
}

reverseString("hello");
console.log(reverseString("123"));