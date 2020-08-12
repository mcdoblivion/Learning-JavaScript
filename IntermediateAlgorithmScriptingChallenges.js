function whatIsInAName(collection, source) {
    var arr = [];
    // Only change code below this line
    arr = collection.filter((element) => {
        let properties = Object.keys(source);
        for (let i = 0; i < properties.length; i++) {
            if (!element.hasOwnProperty(properties[i])) return false;
            else if (element[properties[i]] != source[properties[i]])
                return false;
        }
        return true;
    });
    // Only change code above this line
    return arr;
}

whatIsInAName(
    [
        { first: "Romeo", last: "Montague" },
        { first: "Mercutio", last: null },
        { first: "Tybalt", last: "Capulet" },
    ],
    { last: "Capulet" }
);
