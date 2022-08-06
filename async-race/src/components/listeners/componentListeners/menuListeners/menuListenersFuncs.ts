import { newCarBody, updateCarBody } from '../../listenerFunctions'
import { createCar, updateCar, getCar, deleteCar } from '../../../api/api'
import { renderGarage, updateState } from '../../../renderUI/garage/renderGarage'


export const createCarListFunc = async () => {
    await createCar(newCarBody())
    await updateState()
    const garage = document.querySelector('.garage')
    if (garage instanceof HTMLElement) {
        garage.innerHTML = renderGarage()
    }
}

export const updateCarListFunc = async () => {
    const updateBtn = document.querySelector('.update-btn')
    if (updateBtn instanceof HTMLElement) {
        await updateCar(updateCarBody(), +updateBtn.dataset.id!)
    }
    await updateState()
    const garage = document.querySelector('.garage')
    if (garage instanceof HTMLElement) {
        garage.innerHTML = renderGarage()
    }
}