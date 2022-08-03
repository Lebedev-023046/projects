import { newCarBody } from './listenerFunctions'
import { createCar } from '../api/api'
import { renderGarage, updateState } from '../garage/garage'

export const listeners = () => {
    document.querySelector('.create-btn')?.addEventListener('click', async () => {
        console.log('Click')
        await createCar(newCarBody())
        await updateState()
        const garage = document.querySelector('.garage')
        if (garage instanceof HTMLElement) {
            garage.innerHTML = renderGarage()
        }
    })
}