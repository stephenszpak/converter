
var button = document.getElementById("converter");

button.addEventListener("click", determineConverter);

function toCelsius (input) {
	return input * 9 / 5 + 32;
};

function toFahrenheit (input) {
	return (input - 32) * 5 / 9;
};

function determineConverter (clickEvent) {
	var input = document.getElementById("inputBox").value;
	if(document.getElementById("c").checked){
		document.getElementById("converted").innerHTML = "<div>" +toFahrenheit(input) + "</div>"
	}
	else if(document.getElementById("f").checked){
		document.getElementById("converted").innerHTML = "<div>"+ toCelsius(input) + "</div>";
	}
};
