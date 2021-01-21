let inputRef = document.querySelector("#validation-input");

function inputRefBlur() {
  if (inputRef.value.length === Number(inputRef.dataset.length)) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }
}

inputRef.addEventListener("input", inputRefBlur);
