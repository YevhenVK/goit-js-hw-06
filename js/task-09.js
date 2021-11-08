function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeColorByClick = document.querySelector(".change-color");
const spanColorByClick = document.querySelector("span");

changeColorByClick.addEventListener("click", onBackgroundColorChange);
 
function onBackgroundColorChange() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = `${color}`;
  spanColorByClick.textContent = `${color}`;
}