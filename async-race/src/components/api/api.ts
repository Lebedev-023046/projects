export const getCars = async (page: number, limit=7) => {
    const response = await fetch(`http://127.0.0.1:3000/garage?_page=${page}&_limit=${limit}`)
    return {
        items: await response.json(),
        count: response.headers.get('X-Total-Count')
    }
}

export const getCar = async (id: number) => {
    return (await fetch(`http://127.0.0.1:3000/garage/${id}`)).json()
}

export const createCar = async (body: object) => {
    return await fetch(`http://127.0.0.1:3000/garage`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const updateCar = async (body: object, id: number) => {
    return await fetch(`http://127.0.0.1:3000/garage/${id}`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const deleteCar = async (id: number) => {
    return await fetch(`http://127.0.0.1:3000/garage/${id}`, {
        method: 'DELETE',
    })
}