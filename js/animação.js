let url = []
const pokemonContainer = document.querySelector("#box");
const pokemonCount = 251;
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
}
const mainTypes = Object.keys(colors);

async function fetchPokemons() {
    for (let i = 1; i <= pokemonCount; i++) {
        await getPokemon(i);
    }
}
async function getPokemon(id) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    createPokemonCard(data);
}

function createPokemonCard(pokemon) {
    const card = document.createElement("div");
    card.classList.add("conteiner");

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const id = pokemon.id.toString().padStart(1, '0');
    const pokemonTypes = pokemon.types.map((type) => type.type.name);

    const pokemonInnerHTML = `
        <h2>${name}</h2>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${name}">
        <h3>#${id}</h3>
        <small><span>${pokemonTypes[0]}</span class="${pokemonTypes[0]}"><span>${pokemonTypes[1] !== undefined ? pokemonTypes[1] : ''}</</small>
    `
    card.innerHTML = pokemonInnerHTML;
    pokemonContainer.appendChild(card);
}
fetchPokemons();
