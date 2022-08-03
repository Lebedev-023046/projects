import { ICars } from '../../interfaces/cars'

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






