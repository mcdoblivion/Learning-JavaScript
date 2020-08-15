function pairElement(str) {
    let characters = str.split("");
    return characters.map((char) => {
        if (char == "A") return ["A", "T"];
        else if (char == "T") return ["T", "A"];
        else if (char == "C") return ["C", "G"];
        else if (char == "G") return ["G", "C"];
    });
}

pairElement("GCG");
