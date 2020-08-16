function sumFibs(num) {
    if (num == 1) return 2;
    let fibonacci = [1, 1];
    let sum = 2;
    while (true) {
        let nextNum =
            fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
        if (nextNum > num) break;

        fibonacci.push(nextNum);
        if (nextNum % 2 == 1) sum += nextNum;
    }
    return sum;
}

sumFibs(4);
