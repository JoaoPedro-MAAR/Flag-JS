import flags from './model/flags.js';

const busca = document.querySelector('.row')

for (let flag of flags) {
  console.log(flag.name)
  busca.insertAdjacentHTML('beforeend',`<div class="flag col-2 my-2 text-center">
<img src="${flag.image}" alt="${flag.name}">
<p>${flag.name}</p>`)
}


