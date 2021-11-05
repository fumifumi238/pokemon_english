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

const inputNature = document.getElementById("inputNature");
inputNature.addEventListener("change", function () {
  if (nature[inputNature.value] !== undefined) {
    const target = document.getElementById("resultNature");
    target.textContent = nature[inputNature.value];
  }
});

const inputAbility = document.getElementById("inputAbility");
inputAbility.addEventListener("change", function () {
  if (abilities[inputAbility.value] !== undefined) {
    const target = document.getElementById("resultAbility");
    target.textContent = abilities[inputAbility.value];
  }
});

const inputMoves = document.getElementById('inputMoves');
const moveCount = inputMoves.childElementCount;
console.log(moveCount)
for(let i=0;i<moveCount;i++){
  inputMoves.children[i].addEventListener("change",function(){
      if (moves[inputMoves.children[i].value] !== undefined) {
        const target = document.getElementById(`resultMove${i+1}`);
        target.textContent = `- ${moves[inputMoves.children[i].value]}`;
      }
  })
}


const copyButton = document.getElementById('copyButton');
copyButton.addEventListener('click',function(){
  const result = document.getElementById('result')
  const resultCount = result.childElementCount;
  let text = ""
  console.log(resultCount)
  for(let i=0;i<resultCount;i++){
    console.log(result.children[i].textContent)
    text += result.children[i].textContent + "\n";
  }
  navigator.clipboard.writeText(text).then(
    function () {
      // コピーに成功した場合の処理
      document.querySelector("#copyCompleted").textContent =
        "コピーしました";
    },
    function () {
      // コピーに失敗した場合の処理
            document.querySelector("#copyCompleted").textContent =
              "コピーできませんでした";
    }
  );;
})

// TODO
const inputEvs = document.getElementById('inputEvs');
const evsCount = inputEvs.childElementCount;
for(let i=0;i<evsCount;i++){
  inputEvs.children[i].addEventListener('change',function(){
      console.log(inputEvs.children[i].value);
  })
}
