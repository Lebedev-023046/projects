import { insertCarData, newCarBody, updateCarBody } from './listenerFunctions'
import { createCar, deleteCar, getCar, updateCar } from '../api/api'
import { renderGarage, updateState } from '../garage/garage'
import { ICars } from '../../interfaces/cars'

const body = document.querySelector('body')

export const listeners = () => {
    if (body instanceof HTMLElement) {
        body.addEventListener('click', async (event: MouseEvent) => {
            if (event.target instanceof Element) {
                if (event.target.classList.contains('create-btn')) {
                    await createCar(newCarBody())
                    await updateState()
                    const garage = document.querySelector('.garage')
                    if (garage instanceof HTMLElement) {
                        garage.innerHTML = renderGarage()
                    }   
                }
                if (event.target.classList.contains('update-btn')) {
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
                if (event.target.classList.contains('select-btn')) {
                    const updateBtn = document.querySelector('.update-btn')
                    const updateClr = document.querySelector('.input-text-update')
                    const updateName = document.querySelector('.input-color-update')
                    
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
                if (event.target.classList.contains('delete-btn')) {
                    const id: number = +event.target.id.split('delete-car-')[1]
                    await deleteCar(id)
                    await updateState()
                    const garage = document.querySelector('.garage')
                    if (garage instanceof HTMLElement) {
                        garage.innerHTML = renderGarage()
                    }
                }
            }
        })
    }
}