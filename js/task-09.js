function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const button = document.querySelector(".change-color");

button.addEventListener("click", () => {
  console.log("Button was clicked and changed a background-color");
  document.body.style.backgroundColor = getRandomHexColor();
});
