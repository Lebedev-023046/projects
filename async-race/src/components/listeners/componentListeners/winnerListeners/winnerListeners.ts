const body = document.querySelector('body')
import { renderSortedView } from './winnerListenersFuncs'

export const winnerListeners = (): void => {
    if (body instanceof HTMLElement) {
        body.addEventListener('click', async (event: MouseEvent) => {
            if (event.target instanceof Element) {
                if (event.target.classList.contains('time')) {
                    renderSortedView('time')
                }
                if (event.target.classList.contains('winners')) {
                    renderSortedView('wins')
                }
                if (event.target.classList.contains('id')) {
                    renderSortedView('id')
                }

            }
        })
    }
}