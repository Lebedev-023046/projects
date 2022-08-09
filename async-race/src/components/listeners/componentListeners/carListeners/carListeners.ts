import { deleteCarListFunc, selectCarListFunc } from './carListenersFuncs'

const body = document.querySelector('body')

export const garageListeners = (): void => {
    if (body instanceof HTMLElement) {
        body.addEventListener('click', async (event: MouseEvent) => {
            if (event.target instanceof Element) {
                if (event.target.classList.contains('select-btn')) {
                    selectCarListFunc(event)
                }
                if (event.target.classList.contains('delete-btn')) {
                    deleteCarListFunc(event)
                }
            }
        })
    }
}