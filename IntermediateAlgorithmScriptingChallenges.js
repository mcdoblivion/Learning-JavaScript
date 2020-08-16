function truthCheck(collection, pre) {
    for (let i = 0; i < collection.length; i++) {
        if (collection[i].hasOwnProperty(pre)) {
            if (!Boolean(collection[i][pre])) return false;
        } else return false;
    }
    return true;
}

truthCheck(
    [
        { user: "Tinky-Winky", sex: "male" },
        { user: "Dipsy", sex: "male" },
        { user: "Laa-Laa", sex: "female" },
        { user: "Po", sex: "female" },
    ],
    "sex"
);
