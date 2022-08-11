const body = document.querySelector('body');
import { renderSortedView } from './winnerListenersFuncs';

export const winnerListeners = (): void => {
    const sortBy = ['time', 'wins', 'id']
    if (body instanceof HTMLElement) {
        body.addEventListener('click', async (event: MouseEvent) => {
            if (event.target instanceof Element) {
                if (event.target.classList.contains('time')) {
                    renderSortedView(sortBy[0]);
                }
                if (event.target.classList.contains('winners')) {
                    renderSortedView(sortBy[1]);
                }
                if (event.target.classList.contains('id')) {
                    renderSortedView(sortBy[2]);
                }
            }
        });
    }
};
