let valueEl = document.querySelector('#value');
let counterValue = 0;

const decrBtn = document.querySelector('#counter').firstElementChild;
const incrBtn = document.querySelector('#counter').lastElementChild;

incrBtn.addEventListener('click', () => {
  console.log("Add new member");
  counterValue += 1;
  valueEl.textContent = counterValue;
});

decrBtn.addEventListener('click', () => {
  console.log("Remove member");
  counterValue -= 1;
  valueEl.textContent = counterValue;
//   console.log("counterValue", counterValue);
});


