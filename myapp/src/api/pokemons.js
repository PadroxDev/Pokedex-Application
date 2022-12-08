export const getAll = async () => {
    const response = await fetch(
        'http://localhost:4444/pokemon/list', {
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

export const insert = async (name, number, types, imgUrl) => {
    const response = await fetch(
        'http://localhost:4444/pokemon/insert', {
            method: 'POST',
            body: JSON.stringify({name, number, types, imgUrl}),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }
    );
    return response.ok;
}

export const update = async (name, updated) => {
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

export const delete_by_name = async (name) => {
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

delete_by_name()