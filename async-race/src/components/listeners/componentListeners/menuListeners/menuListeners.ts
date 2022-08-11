import { createCarListFunc, generateCarsFunc, updateCarListFunc } from './menuListenersFuncs';

const body = document.querySelector('body');

export const menuListeners = (): void => {
    if (body instanceof HTMLElement) {
        body.addEventListener('click', async (event: MouseEvent) => {
            if (event.target instanceof Element) {
                if (event.target.classList.contains('create-btn')) {
                    createCarListFunc();
                }
                if (event.target.classList.contains('update-btn')) {
                    updateCarListFunc();
                }
                if (event.target.classList.contains('generate-btn')) {
                    generateCarsFunc();
                }
            }
        });
    }
};
