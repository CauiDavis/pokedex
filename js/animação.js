let url = []
const pokemonContainer = document.querySelector("#box");
const pokemonCount = 251;

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
    card.classList.add("container");

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const id = pokemon.id.toString().padStart(1, '0');
    const pokemonTypes = pokemon.types.map((type) => type.type.name);

    const pokemonInnerHTML = `
        <h2>${name}</h2>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${name}">
        <h3>#${id}</h3>
        <small><span class="${pokemonTypes[0]}">${pokemonTypes[0]}</span ><span class="${pokemonTypes[1]}">${pokemonTypes[1]}</</small>
    `
    card.innerHTML = pokemonInnerHTML;
    pokemonContainer.appendChild(card);
}
fetchPokemons();
