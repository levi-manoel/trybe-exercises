const pokemonInput = document.querySelector('#pokemonName');
const pokemonInputBtn = document.querySelector('#submitPokemon');
const clearBtn = document.querySelector('#clearBtn');
const pokemonList = document.querySelector('#pokemonList');

function append(data) {
  const ul = document.querySelector('ul');

  const li = document.createElement('li');
  const divNome = document.createElement('div');
  const divImage = document.createElement('div');
  const img = document.createElement('img');

  divNome.innerHTML = data.name;
  img.src = data.imageUrl;
  divImage.appendChild(img);

  li.appendChild(divNome);
  li.appendChild(divImage);
  li.className = 'pokemon';

  ul.appendChild(li);
}

function pokemonFromApiToModel (pokemonFromApi) {
  const pokemonName = pokemonFromApi.name.charAt(0).toUpperCase() + pokemonFromApi.name.slice(1);
  return {
    name: pokemonName,
    imageUrl: pokemonFromApi.sprites.front_default,
  };
}

function requestPokemon(pokemonName) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())
    .then((data) => append(pokemonFromApiToModel(data))
    );
}

pokemonInputBtn.addEventListener('click', (event) => {
  event.preventDefault;
  const pokemonName = pokemonInput.value.toLowerCase();
  requestPokemon(pokemonName);
})

clearBtn.addEventListener('click', (event) => {
  event.preventDefault;
  pokemonList.innerHTML = ' ';
})
