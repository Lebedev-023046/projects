import { getCars } from '../api/api'

const { items: cars, count: carsCount } = await getCars(1)


export default {
    cars,
    carsCount,
}