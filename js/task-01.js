const elCategories = document.querySelectorAll("ul#categories li.item");
console.log(`Number of categories: ${elCategories.length}`);

elCategories.forEach((category) => {
  console.log(`Category: ${category.querySelector("h2").textContent}`);
  console.log(`Elements: ${category.querySelectorAll("li").length}`);
});
