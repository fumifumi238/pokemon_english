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

renderText("inputName", "resultName", pokeName);
renderText("inputItem", "resultItem", items);
renderText("inputNature", "resultNature", nature);
renderText("inputAbility", "resultAbility", abilities);
function renderText(inputId, resultId, data) {
  const input = document.getElementById(inputId);
  input.addEventListener("change", function () {
    const inputValue = data[input.value];
    if (inputValue !== undefined) {
      const result = document.getElementById(resultId);
      result.textContent = inputValue;
    }
  });
}

const inputMoves = document.getElementById("inputMoves");
const moveCount = inputMoves.childElementCount;
console.log(moveCount);
for (let i = 0; i < moveCount; i++) {
  inputMoves.children[i].addEventListener("change", function () {
    let inputValue = moves[inputMoves.children[i].value];
    if (inputValue !== undefined) {
      const target = document.getElementById(`resultMove${i + 1}`);
      target.textContent = `- ${inputValue}`;
    }
  });
}

const copyButton = document.getElementById("copyButton");
copyButton.addEventListener("click", function () {
  const result = document.getElementById("result");
  const resultCount = result.childElementCount;
  let text = "";
  console.log(resultCount);
  for (let i = 0; i < resultCount; i++) {
    text += result.children[i].textContent + "\n";
  }
  let copiedMessage = document.querySelector("#copiedMessage");
  navigator.clipboard.writeText(text).then(
    function () {
      copiedMessage.textContent = "コピーしました";
      setTimeout(function () {
        copiedMessage.textContent = "";
      }, 1000);
    },
    function () {
      copiedMessage.textContent = "コピーできませんでした";
    }
  );
});

renderEvsIvs("inputEvs", "resultEvs", 0, 252);
renderEvsIvs("inputIvs", "resultIvs", 0, 31);
function renderEvsIvs(inputId, resultId, min, max) {
  const input = document.getElementById(inputId);
  const result = document.getElementById(resultId);
  const count = input.childElementCount;
  for (let i = 0; i < count; i++) {
    input.children[i].addEventListener("change", function () {
      const value = input.children[i].value;
      if (Number(value) >= min && Number(value) <= max) {
        result.children[i].textContent = value;
      }
    });
  }
}

sumEvs()
function sumEvs(){
    const inputEvs = document.getElementById('inputEvs');
    const count = inputEvs.childElementCount;
    inputEvs.addEventListener("change",function(){
      let sum = 508;
      for(let i=0;i<count;i++){
        let value = Number(inputEvs.children[i].value);
        sum -= value;
      }
      document.getElementById("sumEvs").textContent = `残り: ${sum}`;
    })
}
