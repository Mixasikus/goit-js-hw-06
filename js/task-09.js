const bodyEl = document.querySelector("body");
const buttonChangeEl = document.querySelector(".change-color");
const bgColorText = document.querySelector(".color");

buttonChangeEl.addEventListener("click", getRandomHexColor);

function getRandomHexColor() {
  bodyEl.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  bgColorText.textContent = bodyEl.style.backgroundColor;
}
