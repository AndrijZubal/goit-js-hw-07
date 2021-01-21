let inputEl = document.querySelector("#name-input");
let outputEl = document.querySelector("#name-output");

function changeName(event) {
  outputEl.textContent = inputEl.value ? event.target.value : "незнакомец";
  // inputEl.value
  //   ? (outputEl.textContent = event.target.value)
  //   : (outputEl.textContent = "незнакомец");
}
inputEl.addEventListener("input", changeName);
