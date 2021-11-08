function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const button = document.querySelector(".change-color");
const span = document.querySelector("span");

button.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomHexColor();
  span.textContent = getRandomHexColor();
  console.log("Button was clicked and changed a background-color");
});

// const span = document.querySelector(".color");

// button.addEventListener("click", () => {
//   span.textContent = getRandomHexColor();
// })


// запускать рандом функцию,
//   записывать результат запуска в переменную,
//     и уже переменную добавлять как цвет на фон и в спан