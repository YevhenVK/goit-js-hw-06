const refs = {
  input: document.querySelector("input"),
  buttonCreate: document.querySelector("button[data-create]"),
  buttonDelete: document.querySelector("button[data-destroy]"),
  boxes: document.querySelector("div#boxes"),
};
let number = 0;


refs.input.addEventListener("blur", getNumber);
refs.buttonCreate.addEventListener("click", onClickCreate);
refs.buttonDelete.addEventListener("click", onClickDelete);


function onClickCreate() {
  createColors(number);
}

function onClickDelete() {
  destroyColors();
}

function createColors(amount) {
  const boxes = [];
  const step = 10;
  let size = 30;
  for (let i = 1; i <= amount; i += 1) {
    let box = `<div class="box" style = "width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}"></div>`;
    boxes.push(box);
    size += step;
  }
  const output = boxes.join("");
  refs.boxes.insertAdjacentHTML("beforeend", output);
}

function destroyColors() {
  refs.boxes.innerHTML = "";
}

function getNumber(e) {
  number = Number(e.currentTarget.value);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}