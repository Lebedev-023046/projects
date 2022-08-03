import { getCars } from '../api/api'

const { items: cars, count: carsCount } = await getCars(1)


export default {
    garagePage: 1,
    cars,
    carsCount,
}