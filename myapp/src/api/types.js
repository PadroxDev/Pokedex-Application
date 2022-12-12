export const getAllTypes = async () => {
    const response = await fetch(
        'http://localhost:4444/types/list', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    );
    const types = await response.json();
    return types;
}

export const insertType = async (name, color) => {
    const response = await fetch(
        'http://localhost:4444/types/insert', {
            method: 'POST',
            body: JSON.stringify({name, color}),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }
    );
    return response.ok;
}

export const updateType = async (name, updated) => {
    const response = await fetch(
        'http://localhost:4444/types/update', {
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

export const deleteTypeByName = async (name) => {
    const response = await fetch(
        'http://localhost:4444/types/delete_by_name', {
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

export const findTypeByName = async (name) => {
    const response = await fetch(
        'http://localhost:4444.types/find_by_name', {
            method: 'GET',
            body: JSON.stringify({name}),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    );
    console.log("Ok ?", response.ok);
    return await response.json();
}