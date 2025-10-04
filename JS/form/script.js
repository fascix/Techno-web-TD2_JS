document.querySelector("#wiki").href =
	"https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal";

document.querySelector("#ok_btn").addEventListener("click", function () {
	let valeur_texte = document
		.querySelector("input[type=text]")
		.value.toLowerCase();
	if (valeur_texte === "oui" || valeur_texte === "non") {
		// c'est ok
	} else {
		alert("Il faut mettre Oui ou Non dans le formulaire texte ! ");
	}
});

document.getElementById("c1").nextElementSibling.textContent = "HP";
document.getElementById("c2").nextElementSibling.textContent = "Casque";
document.getElementById("c3").nextElementSibling.textContent = "Bluetooth";

document.querySelectorAll('input[name="choix"]').forEach(function (input) {
	input.addEventListener("click", function () {
		let volumeText = document.getElementById("volume_label");
		if (this.value === "1") volumeText.textContent = "Volume HP";
		if (this.value === "2") volumeText.textContent = "Volume Casque";
		if (this.value === "3") volumeText.textContent = "Volume Bluetooth";
	});
});

let range = document.querySelector("input[type=range]");
range.max = 100;
console.log(range.max);

let affichage = document.querySelector("#Volume p");

range.addEventListener("input", function () {
	affichage.textContent = this.value;
});

document.querySelector("label[for='checkbox']").textContent = "Mute";

document
	.querySelector("input[type=checkbox]")
	.addEventListener("change", function () {
		let volumeDiv = document.getElementById("Volume");
		if (this.checked) {
			volumeDiv.style.display = "none";
			range.style.display = "none";
		} else {
			volumeDiv.style.display = "";
			range.style.display = "";
		}
	});

let liens_images = document.querySelector("header .content");
let img_uphf = document.createElement("img");
img_uphf.src =
	"https://upload.wikimedia.org/wikipedia/commons/b/bd/UPHF_logo.svg";
img_uphf.width = 200;
liens_images.appendChild(img_uphf);

document.querySelectorAll("section h1, header	h1").forEach(function (title) {
	title.addEventListener("click", function () {
		let content = this.nextElementSibling;
		if (content.style.display === "block") {
			content.style.display = "none";
		} else {
			content.style.display = "block";
		}
	});
});

let dateInput = document.getElementById("dateInput");

if (dateInput) {
	dateInput.addEventListener("change", function () {
		if (this.value) {
			console.log("Date choisie :", this.value);
		} else {
			console.log("Aucune date sélectionnée");
		}
	});
}

let ProgressBar = document.querySelector("progress");

let MeterBar = document.querySelector("meter");

setInterval(function () {
	if (ProgressBar.value < 100) ProgressBar.value += 5;
	if (MeterBar.value < 100) MeterBar.value += 0.1;
}, 1000);
