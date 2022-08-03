import { ICars } from '../../interfaces/cars'

export const newCarBody = () => {
    const body: ICars = {
        name: (document.querySelector('.input-text-create') as HTMLInputElement).value,
        color: (document.querySelector('.input-color-create') as HTMLInputElement).value
    }
    return body
}




