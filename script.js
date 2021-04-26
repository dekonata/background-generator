var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.getElementById("random-btn");

function setGradient() {
		body.style.background = 
		"linear-gradient(to right, "
		+ color1.value
		+ ", "
		+ color2.value
		+ ")";

		css.textContent = body.style.background + ";";
}

function generateRandomRgbValue() {
	color = "("
	for(i=0; i<3; i++) {
		colorNumber = Math.floor(Math.random() * 255);
		if (i < 2) {
			color = color + String(colorNumber) + ",";
		} else { 
			color = color + String(colorNumber) + ")";
		}
	}
	return color
}

function setRandomGradient() {
	body.style.background = 
		"linear-gradient(to right, rgb"
		+ generateRandomRgbValue()
		+ ", rgb"
		+ generateRandomRgbValue()
		+ ")";
	console.log(body)

		css.textContent = body.style.background + ";";
}


setGradient()

color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)

randomBtn.addEventListener("click", setRandomGradient)
