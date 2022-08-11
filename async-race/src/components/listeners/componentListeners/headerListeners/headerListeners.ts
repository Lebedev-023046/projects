import { toGaragePressBtn, toWinnersPressBtn } from './headerListenersFuncs';

const body = document.querySelector('body');

export const headerListeners = (): void => {
    if (body instanceof HTMLElement) {
        body.addEventListener('click', async (event: MouseEvent) => {
            if (event.target instanceof Element) {
                if (event.target.classList.contains('to-garage')) {
                    toGaragePressBtn();
                }
                if (event.target.classList.contains('to-winners')) {
                    toWinnersPressBtn();
                }
            }
        });
    }
};
