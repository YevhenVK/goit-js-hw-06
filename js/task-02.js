const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
 

const ingredienEl = document.querySelector("#ingredients");
console.log(ingredienEl);

const veg = ingredients.map((option) => {
  const ulElements = document.createElement("li");
  ulElements.classList.add("item");
  ulElements.textContent = option;

  return ulElements;
});

console.log(veg);
ingredienEl.append(...veg);