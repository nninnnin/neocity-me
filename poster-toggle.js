// poster.toggle.js

const toggle1 = document.getElementById("toggle-layer-1");
const layer1 = document.getElementById("layer1");

const toggle2 = document.getElementById("toggle-layer-2");
const layer2 = document.getElementById("layer2");

const toggle3 = document.getElementById("toggle-layer-3");
const layer3 = document.getElementById("layer3");

toggle1.addEventListener("click", () => {
	toggle1.classList.toggle("active");
	layer1.classList.toggle("hidden");
});

toggle2.addEventListener("click", () => {
	toggle2.classList.toggle("active");
	layer2.classList.toggle("hidden");
});

toggle3.addEventListener("click", () => {
	toggle3.classList.toggle("active");
	layer3.classList.toggle("hidden");
});
