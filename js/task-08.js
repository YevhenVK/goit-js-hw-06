const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();  //  Страница не перезагружаеться
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    //   return console.log("Alert! Все поля должны быть заполнены!");
      return alert("Все поля должны быть заполнены");
  }

  console.log(`Email: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset(); // Очистка значения полей формы 
}
