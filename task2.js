const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const items = ingredients.map((item) => {
  //   console.log(item);
  const li = document.createElement("li");
  li.textContent = item;
  return li;
});
console.log(items);
document.querySelector("#ingredients").append(...items);
