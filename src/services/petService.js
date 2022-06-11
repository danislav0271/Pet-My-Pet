const baseUrl = 'http://localhost:3030'

export const getAll = async () => {
    let response = await fetch(`${baseUrl}/data/pets`);

    let pets = await response.json();

    return pets;
};

export const create = async (petData) => {
    let response = await fetch(`${baseUrl}/data/pets` , {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(petData)
    });

    let result = await response.json();

    return result;
};

export const getOne = (petId) => {
    return fetch(`${baseUrl}/data/pets/${petId}`).then(res => res.json());
}