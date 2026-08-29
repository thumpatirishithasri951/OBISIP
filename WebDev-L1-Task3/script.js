const temperatureInput = document.getElementById("temperature");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const convertBtn = document.getElementById("convertBtn");
const clearBtn = document.getElementById("clearBtn");
const result = document.getElementById("result");
const error = document.getElementById("error");

function convertTemperature() {
    const temperature = parseFloat(temperatureInput.value);
    const from = fromUnit.value;
    const to = toUnit.value;

    error.textContent = "";

    if (temperatureInput.value.trim() === "" || isNaN(temperature)) {
        result.textContent = "Result will appear here";
        error.textContent = "Please enter a valid temperature.";
        return;
    }

    let celsius;

    if (from === "celsius") {
        celsius = temperature;
    } else if (from === "fahrenheit") {
        celsius = (temperature - 32) * 5 / 9;
    } else if (from === "kelvin") {
        celsius = temperature - 273.15;
    }

    let converted;

    if (to === "celsius") {
        converted = celsius;
    } else if (to === "fahrenheit") {
        converted = (celsius * 9 / 5) + 32;
    } else if (to === "kelvin") {
        converted = celsius + 273.15;
    }

    if (to === "kelvin" && converted < 0) {
        result.textContent = "Invalid temperature";
        error.textContent = "Temperature cannot be below absolute zero.";
        return;
    }

    result.textContent = `${converted.toFixed(2)}° ${getUnitSymbol(to)}`;
}

function getUnitSymbol(unit) {
    if (unit === "celsius") {
        return "C";
    }

    if (unit === "fahrenheit") {
        return "F";
    }

    return "K";
}

function clearConverter() {
    temperatureInput.value = "";
    fromUnit.value = "celsius";
    toUnit.value = "fahrenheit";
    result.textContent = "Result will appear here";
    error.textContent = "";
}

convertBtn.addEventListener("click", convertTemperature);
clearBtn.addEventListener("click", clearConverter);