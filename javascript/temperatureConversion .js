function convertTemperature(option, temp) {
    switch (option) {
        case "CtoF":
            if (temp >= 0 && temp <= 100) {
                return (temp * 9/5) + 32;
            } else {
                return "Celsius value should be between 0 and 100";
            }
        case "FtoC":
            if (temp >= 32 && temp <= 212) {
                return (temp - 32) * 5/9;
            } else {
                return "Fahrenheit value should be between 32 and 212";
            }
        default:
            return "Invalid option";
    }
}

console.log(convertTemperature("CtoF", 25)); // 77
console.log(convertTemperature("FtoC", 98)); // 36.67
