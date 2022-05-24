const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const dishElPotat = document.createElement("li");
dishElPotat.classList.add("item");
dishElPotat.textContent = ingredients[0];

const dishElMushrooms = document.createElement("li");
dishElMushrooms.classList.add("item");
dishElMushrooms.textContent = ingredients[1];

const dishElGarlic = document.createElement("li");
dishElGarlic.classList.add("item");
dishElGarlic.textContent = ingredients[2];

const dishElTomat = document.createElement("li");
dishElTomat.classList.add("item");
dishElTomat.textContent = ingredients[3];

const dishElHerbs = document.createElement("li");
dishElHerbs.classList.add("item");
dishElHerbs.textContent = ingredients[4];

const dishElCondiments = document.createElement("li");
dishElCondiments.classList.add("item");
dishElCondiments.textContent = ingredients[5];

const ingredientsEl = document.querySelector("ul");
ingredientsEl.append(dishElPotat, dishElMushrooms, dishElGarlic, dishElTomat, dishElHerbs, dishElCondiments);
console.log(ingredientsEl);
