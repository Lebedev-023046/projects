import { getCars, getWinners } from '../api/api';

const { items: cars, count: carsCount } = await getCars(1);
const { items: winners, count: winnersCount } = await getWinners({ page: 1 });

export default {
    garagePage: 1,
    cars,
    carsCount,

    winnersPage: 1,
    winners,
    winnersCount,

    animation: {
        id: {
            id: 0,
        },
    },

    sort: '',
    order: 'asc'
};
