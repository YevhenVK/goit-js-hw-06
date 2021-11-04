let valueEl = Number(document.querySelector('#value').textContent);

let counterValue = document.querySelector('#value');

const dekrBtn = document.querySelector('#counter').firstElementChild;
const inkrBtn = document.querySelector('#counter').lastElementChild;

inkrBtn.addEventListener('click', event => {
  console.log("Add new member");
  valueEl += 1;

  counterValue.innerText = valueEl;
});

dekrBtn.addEventListener('click', event => {
  console.log("Remove member");
  valueEl -= 1;

  counterValue.innerText = valueEl;
//   console.log("counterValue", counterValue);
});
