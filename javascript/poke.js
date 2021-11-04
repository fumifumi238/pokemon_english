import { pokeName } from "./data/poke_name.js";
import { items } from "./data/poke_item.js";
import { moves } from "./data/poke_move.js";
import { abilities } from "./data/poke_ability.js";
import { nature } from "./data/poke_nature.js";

const names = [pokeName, items, moves, abilities, nature];
const ids = ["pokeName", "items", "moves", "abilities", "nature"];
for (let i = 0; i < names.length; i++) {
  selectName(names[i], ids[i]);
}

function selectName(names, ids) {
  let id = document.getElementById(ids);
  for (let key in names) {
    let option = document.createElement("option");
    option.value = key;
    id.appendChild(option);
  }
}

selectNumber();
function selectNumber() {
  let numbers = document.getElementsByClassName("num");
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    for (let j = 31; j >= 0; j--) {
      let option = document.createElement("option");
      option.value = j;
      option.textContent = j;
      numbers[i].appendChild(option);
    }
  }
}

const inputName = document.getElementById("inputName");
inputName.addEventListener("change", function () {
  if (pokeName[inputName.value] !== undefined) {
    const target = document.getElementById("resultName");
    target.textContent = pokeName[inputName.value];
  }
});

const inputItem = document.getElementById("inputItem");
inputItem.addEventListener("change", function () {
  if (items[inputItem.value] !== undefined) {
    const target = document.getElementById("resultItem");
    target.textContent = items[inputItem.value];
  }
});
