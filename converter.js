var button = document.getElementById("converter");

button.addEventListener("click", determineConverter);

function toCelsius(input) {
    return input * 9 / 5 + 32;
};

function toFahrenheit(input) {
    return (input - 32) * 5 / 9;
};

function determineConverter(clickEvent) {
    var input = document.getElementById("inputBox").value;
    if (document.getElementById("c").checked) {
        if (input > 90) {
            document.getElementById("converted").innerHTML = "<span class='red'>" + toFahrenheit(input) + "</span>";
        } else if (input < 32) {
            document.getElementById("converted").innerHTML = "<span class='blue'>" + toFahrenheit(input) + "</span>";
        } else {
            document.getElementById("converted").innerHTML = "<span>" + toFahrenheit(input) + "</span>";
        }
    } else {
        if (input > 32) {
            document.getElementById("converted").innerHTML = "<span class='red'>" + toCelsius(input) + "</span>";
        } else if (input < 0) {
            document.getElementById("converted").innerHTML = "<span class='blue'>" + toCelsius(input) + "</span>";
        } else {
            document.getElementById("converted").innerHTML = "<span>" + toCelsius(input) + "</span>";
        }
    }
};

