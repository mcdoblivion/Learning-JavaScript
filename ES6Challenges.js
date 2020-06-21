// Only change code below this line
class Thermostat {
    constructor(fahrenheitTemperature) {
        this.fahrenheitTemperature = fahrenheitTemperature;
    }

    get temperature() {
        return ((this.fahrenheitTemperature - 32) * 5) / 9;
    }

    set temperature(celsiusTemperature) {
        this.fahrenheitTemperature = celsiusTemperature * 1.8 + 32;
    }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
