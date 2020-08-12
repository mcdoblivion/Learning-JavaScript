function translatePigLatin(str) {
    let characters = str.split("");
    let consonants = "ueoai";
    if (consonants.indexOf(characters[0]) >= 0) return str + "way";

    let consonant = [];
    let i = 0;
    while (consonants.indexOf(characters[i]) < 0) {
        consonant.push(characters.shift());
        if (i == characters.length) break;
    }
    characters.push(...consonant);
    return characters.join("") + "ay";
}

translatePigLatin("consonant");
console.log(translatePigLatin("rhythm"));