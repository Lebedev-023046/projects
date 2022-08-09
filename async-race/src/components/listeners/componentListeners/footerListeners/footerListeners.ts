import { nextPressBtn, prevPressBtn } from "./footerListenersFuncs"


const body = document.querySelector('body')

export const footerListeners = (): void => {
    if (body instanceof HTMLElement) {
        body.addEventListener('click', async (event: MouseEvent) => {
            if (event.target instanceof Element) {
                if (event.target.classList.contains('prev')) {
                    prevPressBtn()
                }
                if (event.target.classList.contains('next')) {
                    nextPressBtn()
                }
            }
        })
    }
}