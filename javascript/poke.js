import pokeName from './poke_name.js'
console.log(pokeName)
for(let i=0;i<4;i++){
  option = document.createElement('option');
  option.value = `${i}`;
  console.log(option)
  example.appendChild(option);
}
