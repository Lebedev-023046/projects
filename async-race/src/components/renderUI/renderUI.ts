import { renderGarage } from "../garage/garage"
import { renderWinners } from "../winners/winners"

export const render = () => {
    const html = `
    <div class="wrapper">
        <header class="header">
            <button class="btn toGarage">To Garage</button>
            <button class="btn toWinners">To Winners</button>
        </header>
        <div class="garage">
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
    </div>`

    const body = document.querySelector('body')
    if (body instanceof HTMLElement) {
        body.innerHTML = html
    }
    
}
