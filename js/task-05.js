const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

const addInputFn = () => {
    return inputEl.value.trim() === "" ? outputEl.textContent = "Anonymous" : outputEl.textContent = inputEl.value;
}

inputEl.addEventListener("input", addInputFn);