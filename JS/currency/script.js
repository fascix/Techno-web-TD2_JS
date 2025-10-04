let btn = document.querySelector('input[type="button"]');
let euros = document.querySelectorAll('input[name="currency"]')[0];
let usd = document.querySelectorAll('input[name="currency"]')[1];
let aud = document.querySelectorAll('input[name="currency"]')[2];

window.addEventListener("load", function () {
	document.querySelectorAll('input[type="number"]').forEach(function (input) {
		input.value = 0;
	});
});

// Version 1 :
/*
btn.addEventListener("click", function () {
	usd.value = euros.value * 1.1;
	aud.value = euros.value * 1.5;
	
	euros.value = usd.value * 0.91;
	aud.value = usd.value * 1.36;

	euros.value = aud.value * 0.67;
	usd.value = aud.value * 0.74;
});
*/

// Version 2 :

btn.style.display = "none";

euros.addEventListener("input", function () {
	// de l'Euros
	usd.value = this.value * 1.1; // vers USD
	aud.value = this.value * 1.5; // vers AUD
});

usd.addEventListener("input", function () {
	// de l'USD
	euros.value = this.value * 0.91; // vers EUR
	aud.value = this.value * 1.36; // vers USD
});

aud.addEventListener("input", function () {
	// de l'AUD
	euros.value = this.value * 0.67; // vers EUR
	usd.value = this.value * 0.74; // vers AUD
});
