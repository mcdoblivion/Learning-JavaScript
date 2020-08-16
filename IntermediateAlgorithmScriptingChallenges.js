function smallestCommons(arr) {
    let [min, max] = arr.sort((a, b) => a - b);

    let gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    let lcm = (a, b) => (a * b) / gcd(a, b);

    let currentLCM = min;
    while (min < max) {
        currentLCM = lcm(currentLCM, ++min);
    }
    return currentLCM;
}

smallestCommons([1, 5]);
