import { start, stop } from './animationListenersFuncs';

const body = document.querySelector('body');

export const animationListeners = (): void => {
    if (body instanceof HTMLElement) {
        body.addEventListener('click', async (event: MouseEvent) => {
            if (event.target instanceof HTMLElement) {
                if (event.target.classList.contains('start-engine-button')) {
                    start(event);
                }
                if (event.target.classList.contains('stop-engine-button')) {
                    stop(event);
                }
            }
        });
    }
};
