export const getAllPokedex = async () => {
    const response = await fetch(
        'http://localhost:4444/pokedex/list', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    );
    const pokemons = await response.json();
    return pokemons;
}

export const getPokedexByName = async (name) => {
    const response = await fetch(
        'http://localhost:4444/pokedex/query?name=' + name, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    );
    const pokemon = await response.json();
    return pokemon;
}

export const insertPokedex = async (name, number, types, imgUrl, shiny) => {
    const response = await fetch(
        'http://localhost:4444/pokemon/insert', {
            method: 'POST',
            body: JSON.stringify({name, number, types, imgUrl, shiny}),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }
    );
    return response.ok;
}

export const updatePokemon = async (name, updated) => {
    const response = await fetch(
        'http://localhost:4444/pokemon/update', {
            method: 'POST',
            body: JSON.stringify({name, updated}),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }
    );
    return response.ok;
}

export const deletePokemonByName = async (name) => {
    const response = await fetch(
        'http://localhost:4444/pokemon/delete_by_name', {
            method: 'DELETE',
            body: JSON.stringify({name}),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    );
    return response.ok;
}