let counterValue = 0;
function increment() {
  counterValue += 1;
  document.querySelector(`#value`).textContent = counterValue;
}
function decrement() {
  counterValue -= 1;
  document.querySelector(`#value`).textContent = counterValue;
}
const decrementBtn = document.querySelector('[data-action="decrement"]');
console.log(decrementBtn);
decrementBtn.addEventListener("click", decrement);
console.log("D");

const incrementBtn = document.querySelector('[data-action="increment"]');
incrementBtn.addEventListener("click", increment);
console.log("I");
