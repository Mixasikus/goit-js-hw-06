const controlFontSize = document.getElementById('font-size-control');
const textEl = document.getElementById("text");
controlFontSize.addEventListener('input', onInputControl);

function onInputControl() {
    const size = controlFontSize.value;
    textEl.style.fontSize = size + "px";
    console.log(size);
}