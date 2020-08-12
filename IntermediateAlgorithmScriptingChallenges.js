function spinalCase(str) {
    let words = str
        .replace(/([a-z])([A-Z])/g, "$1_$2")
        .toLowerCase()
        .split(/[\W | _]+/);
    return words.join("-");
}

spinalCase("This Is Spinal Tap");
console.log(spinalCase("thisIsSpinalTap"));
