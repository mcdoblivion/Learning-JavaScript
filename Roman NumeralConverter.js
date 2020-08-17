let basicNumberToRoman = {
    0: "",
    1: "I",
    10: "X",
    100: "C",
    1000: "M",
    2: "II",
    20: "XX",
    200: "CC",
    2000: "MM",
    3: "III",
    30: "XXX",
    300: "CCC",
    3000: "MMM",
    4: "IV",
    40: "XL",
    400: "CD",
    4000: "MMMM",
    5: "V",
    50: "L",
    500: "D",
    5000: "MMMMM",
    6: "VI",
    60: "LX",
    600: "DC",
    6000: "MMMMMM",
    7: "VII",
    70: "LXX",
    700: "DCC",
    7000: "MMMMMMM",
    8: "VIII",
    80: "LXXX",
    800: "DCCC",
    8000: "MMMMMMMM",
    9: "IX",
    90: "XC",
    900: "CM",
    9000: "MMMMMMMMM",
};

function convertToRoman(num) {
    let thousands = Math.floor(num / 1000) * 1000;
    let hundreds = Math.floor((num % 1000) / 100) * 100;
    let tens = Math.floor((num % 100) / 10) * 10;
    let units = num % 10;

    return (
        basicNumberToRoman[thousands] +
        basicNumberToRoman[hundreds] +
        basicNumberToRoman[tens] +
        basicNumberToRoman[units]
    );
}

convertToRoman(36);
console.log(convertToRoman(36));
