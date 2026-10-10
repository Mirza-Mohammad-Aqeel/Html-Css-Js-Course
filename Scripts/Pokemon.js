
const enterpokemon = document.getElementById("enteredpokemon");

function getPokemonInfo() {

    try {
        const user_pokemon = enterpokemon.value.toLowerCase();
        const response = fetch(`https://pokeapi.co/api/v2/pokemon/${user_pokemon}`);


        if (!response.ok) {
            throw new Error(`Failed to retrive Information about ${user_pokemon}`)
        }

        const data = response.json();
        const pokemon_id = data.id;
        const imagepokemon = data.sprites.front_default;
        const imageelement = document.getElementById("pokeimage");

        imageelement.src = imagepokemon;
        imageelement.style.display = "block";

    }
    
    catch (error) {
        console.error(error);
    }
    
}