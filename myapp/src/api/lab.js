export const getLabData = async () => {
    const response = await fetch(
        'http://localhost:4444/lab/list', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    );
    const data = await response.json();
    return data;
}

export const setLabData = async ( param, labData ) => {
    const response = await fetch(
        'http://localhost:4444/lab/update?param='+param, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: {...labData}
        }
    )
}