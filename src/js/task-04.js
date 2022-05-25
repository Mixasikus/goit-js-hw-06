let counterValue = 0;

const decrementBtnClick = document.querySelector('button[data-action="decrement"]');
const incrementBtnClick = document.querySelector('button[data-action="increment"]');
const spanEl = document.querySelector("#value");

decrementBtnClick.addEventListener("click", () => {
  spanEl.textContent = counterValue -= 1;
});

incrementBtnClick.addEventListener("click", () => {
  spanEl.textContent = counterValue += 1;
});


