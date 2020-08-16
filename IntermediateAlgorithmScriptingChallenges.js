function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    return arr.map((element) => {
        element.orbitalPeriod = Math.round(
            2 *
                Math.PI *
                Math.sqrt(Math.pow(earthRadius + element.avgAlt, 3) / GM)
        );
        delete element.avgAlt;
        return element;
    });
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
