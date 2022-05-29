const nameInputEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");
console.log(nameInputEl, nameOutputEl);

nameInputEl.addEventListener("input", (e) => {
    nameOutputEl.textContent = e.target.value;
    
});
