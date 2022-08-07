import { ICars } from '../../interfaces/cars'
import { getCars } from '../api/api'
import globalState from '../globalState/globalState'

const carNames = [
    'Audi',
    'BMW',
    'Ford',
    'Honda',
    'Hyundai',
    'Kia',
    'Lada',
    'Mazda',
    'Toyota',
    'Volkswagen',
  ];

  const models = [
    'Polo',
    'Golf',
    'Passat',
    'A8',
    'A6',
    'Sportback',
    'Q5',
    'X5',
    'X3',
    'Transit',
  ];

export const updateGarageState = async () => {
    const { items, count } = await getCars(globalState.garagePage)
    globalState.cars = items
    globalState.carsCount = count
}

export const newCarBody = () => {
    const body: ICars = {
        name: (document.querySelector('.input-text-create') as HTMLInputElement).value,
        color: (document.querySelector('.input-color-create') as HTMLInputElement).value
    }
    return body
}

export const updateCarBody = () => {
    const body: ICars = {
        name: (document.querySelector('.input-text-update') as HTMLInputElement).value,
        color: (document.querySelector('.input-color-update') as HTMLInputElement).value
    }
    return body
}

export const insertCarData = (name: string, color: string) => {
    (document.querySelector('.input-color-update') as HTMLInputElement).value = color,
    (document.querySelector('.input-text-update') as HTMLInputElement).value = name
}

export const getRandomName = function () {
    const name = carNames[Math.floor(Math.random() * carNames.length)]
    const model = models[Math.floor(Math.random() * models.length)]
    return `${name} ${model}`
}

export const getRandomColor = function () {
    const letters = '0123456789ABCDEF';
    let color = ''
    for (let i=0; i<6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)]
    }
    return `#${color}`;
}






