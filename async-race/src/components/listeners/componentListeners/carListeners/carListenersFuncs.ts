import { ICars } from '../../../../interfaces/cars'
import { getCar, deleteCar, deleteWinner } from '../../../api/api'
import { renderGarage } from '../../../renderUI/garage/renderGarage'
import { renderWinners } from '../../../renderUI/winners/renderWinners'
import { insertCarData, updateWinnerState } from '../../utils'
import { updateGarageState } from '../../utils'
import { renderSortedView } from '../winnerListeners/winnerListenersFuncs'


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

export const deleteCarListFunc = async (event: MouseEvent): Promise<void> => {
    if (event.target instanceof Element) {
        const id: number = +event.target.id.split('delete-car-')[1]
        await deleteCar(id)
        await deleteWinner(id)
        await updateGarageState()
        await updateWinnerState()
        const garage = document.querySelector('.garage')
        const winners = document.querySelector('.winners')
        if (garage instanceof HTMLElement && winners instanceof HTMLElement) {
            garage.innerHTML = renderGarage()
            winners.innerHTML = renderWinners()
        }
    }
}