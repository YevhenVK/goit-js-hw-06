// const textInput = document.querySelector("input");

// textInput.addEventListener("blur", () => {
//     if (textInput.value.length >= textInput.dataset.length) {
//     textInput.classList.add('valid');
//     textInput.classList.remove('invalid');
//   } else {
//     textInput.classList.remove('valid');
//     textInput.classList.add('invalid');
//   }
// });


document.getElementById("validation-input").onblur = function() {
  console.log(this.value.length);
  if (this.getAttribute('data-length') != this.value.length) { 
    this.classList.add('invalid');
    this.classList.remove('valid');
  } else {
    this.classList.add('valid');
    this.classList.remove('invalid');
  }
};