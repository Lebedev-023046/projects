import { ICars } from '../../interfaces/cars';
import { Isuccess } from '../../interfaces/drive';
import { IParams } from '../../interfaces/params';
import { IGetWinners, IWinners } from '../../interfaces/winners';

export const getCars = async (page: number, limit = 7): Promise<{ items: ICars[]; count: string | null }> => {
    const response = await fetch(`http://127.0.0.1:3000/garage?_page=${page}&_limit=${limit}`);
    return {
        items: await response.json(),
        count: response.headers.get('X-Total-Count'),
    };
};

export const getCar = async (id: number): Promise<ICars> => {
    return (await fetch(`http://127.0.0.1:3000/garage/${id}`)).json();
};

export const createCar = async (body: object): Promise<ICars> => {
    return (
        await fetch(`http://127.0.0.1:3000/garage`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        })
    ).json();
};

export const updateCar = async (body: object, id: number): Promise<ICars> => {
    return (
        await fetch(`http://127.0.0.1:3000/garage/${id}`, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        })
    ).json();
};

export const deleteCar = async (id: number): Promise<ICars> => {
    return (
        await fetch(`http://127.0.0.1:3000/garage/${id}`, {
            method: 'DELETE',
        })
    ).json();
};

const getSortOrder = (sort: string | undefined, order: string | undefined) => {
    if (sort && order) {
        return `&_sort=${sort}&_order=${order}`
    }
    return ''
}

export const getWinners = async ({page, limit = 10, sort, order}: IGetWinners): Promise<{ items: IWinners[]; count: string | null }> => {
    const response = await fetch(`http://127.0.0.1:3000/winners?_page=${page}&_limit=${limit}${getSortOrder(sort, order)}`);
    const items = await response.json();

    return {
        items: await Promise.all(
            items.map(async (winner: IWinners) => ({
                ...winner,
                car: await getCar(winner.id),
            }))
        ),
        count: response.headers.get('X-Total-Count'),
    };
};

export const createWinner = async (body: object): Promise<IWinners> => {
    return (
        await fetch(`http://127.0.0.1:3000/winners`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        })
    ).json()
}

export const updateWinner = async (body: object, id: number): Promise<ICars> => {
    return (
        await fetch(`http://127.0.0.1:3000/winners/${id}`, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        })
    ).json();
};

export const deleteWinner = async (id: number): Promise<ICars> => {
    return (
        await fetch(`http://127.0.0.1:3000/winners/${id}`, {
            method: 'DELETE',
        })
    ).json();
};

export const startEngine = async (id: number): Promise<IParams> => {
    return (
        await fetch(`http://127.0.0.1:3000/engine?id=${id}&status=started`, {
            method: 'PATCH',
        })
    ).json();
};

export const stopEngine = async (id: number): Promise<IParams> => {
    return (
        await fetch(`http://127.0.0.1:3000/engine?id=${id}&status=stopped`, {
            method: 'PATCH',
        })
    ).json();
};

export const drive = async (id: number): Promise<Isuccess> => {
    const result = await fetch(`http://127.0.0.1:3000/engine?id=${id}&status=drive`, {
        method: 'PATCH',
    });
    return result.status === 200 ? { ...(await result.json()) } : { success: false };
};
