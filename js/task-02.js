const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const elIngredients = document.querySelector("ul#ingredients");

const elLiIngredients = ingredients.map((elem) => {
  const elIngredient = document.createElement("li");
  elIngredient.textContent = elem;
  elIngredient.classList.add("item");
  return elIngredient;
});

elIngredients.append(...elLiIngredients);
