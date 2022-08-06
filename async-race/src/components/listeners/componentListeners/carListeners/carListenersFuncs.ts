import { ICars } from '../../../../interfaces/cars'
import { getCar, deleteCar } from '../../../api/api'
import { renderGarage, updateState } from '../../../renderUI/garage/renderGarage'
import { insertCarData } from '../../listenerFunctions'


export const selectCarListFunc = async (event: MouseEvent) => {
    const updateBtn = document.querySelector('.update-btn')
    const updateClr = document.querySelector('.input-text-update')
    const updateName = document.querySelector('.input-color-update')
    if (event.target instanceof Element) {
        const id: number = +event.target.id.split('select-car-')[1]
        const currentCar: ICars = await getCar(id)
        if (updateBtn instanceof HTMLElement && updateClr instanceof HTMLElement && updateName instanceof HTMLElement) {
            updateBtn.dataset.id = String(id)
            updateBtn.removeAttribute('disabled') 
            updateClr.removeAttribute('disabled') 
            updateName.removeAttribute('disabled') 
        }
        insertCarData(currentCar.name, currentCar.color) 
    }   
}

export const deleteCarListFunc = async (event: MouseEvent) => {
    if (event.target instanceof Element) {
        const id: number = +event.target.id.split('delete-car-')[1]
        await deleteCar(id)
        await updateState()
        const garage = document.querySelector('.garage')
        if (garage instanceof HTMLElement) {
            garage.innerHTML = renderGarage()
        }
    }
}