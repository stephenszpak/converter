function toCelsius () {
	//will use if the radio button is clicked
	//try to make a nested if 
	if(document.getElementById("c").checked){


	}
}

function toFahrenheit () {
	if(document.getElementById("f").checked){

	}

}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  console.log("event", clickEvent);
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);


//function convert(degree) {
//     if (degree == "C") {
//         F = document.getElementById("c").value * 9 / 5 + 32;
//         document.getElementById("f").value = Math.round(F);
//     } else {
//         C = (document.getElementById("f").value -32) * 5 / 9;
//         document.getElementById("c").value = Math.round(C);
//     }
// }