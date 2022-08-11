import { renderGarage } from './garage/renderGarage';
import { renderWinners } from './winners/renderWinners';

export const render = (): void => {
    const html = `
    <div class="wrapper">
        <header class="header">
            <button class="btn to-garage">To Garage</button>
            <button class="btn to-winners">To Winners</button>
        </header>
        <div class="garage" style="display: block">
            ${renderGarage()}
        </div>
        
        <div class="winners" style="display: none">
            ${renderWinners()}
        </div>
        <main class="main"></main>
        <footer class="footer">
            <button class="btn prev">PREV</button>
            <button class="btn next">NEXT</button>
        </footer>
    </div>`;

    const body = document.querySelector('body');
    if (body instanceof HTMLElement) {
        body.innerHTML = html;
    }
};
