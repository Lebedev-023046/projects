import { newCarBody, updateCarBody, updateGarageState } from '../../utils'
import { createCar, updateCar, getCar, deleteCar } from '../../../api/api'
import { renderGarage } from '../../../renderUI/garage/renderGarage'
import { getRandomName, getRandomColor} from '../../utils'


export const createCarListFunc = async (): Promise<void> => {
    await createCar(newCarBody())
    await updateGarageState()
    const garage = document.querySelector('.garage')
    if (garage instanceof HTMLElement) {
        garage.innerHTML = renderGarage()
    }
}

export const updateCarListFunc = async (): Promise<void> => {
    const updateBtn = document.querySelector('.update-btn')
    if (updateBtn instanceof HTMLElement) {
        await updateCar(updateCarBody(), +updateBtn.dataset.id!)
    }
    await updateGarageState()
    const garage = document.querySelector('.garage')
    if (garage instanceof HTMLElement) {
        garage.innerHTML = renderGarage()
    }
}

export const generateCarsFunc = async (): Promise<void> => {
    const garage = document.querySelector('.garage')
    if (garage instanceof HTMLElement) {
        for (let i=0; i<100; i++) {
            await createCar({name : getRandomName(), color: getRandomColor()})
            await updateGarageState()
            garage.innerHTML = renderGarage()
        }
    }
}