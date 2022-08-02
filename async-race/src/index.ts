import './styles/main.scss'
import { renderWinners } from  './components/winners/winners'
import { renderMenu } from './components/garage/garage'

const body = document.querySelector('body')
const main = document.querySelector('body')

const renderBaseHTMLStructure = (): void => {
    if (body instanceof HTMLElement) {
        body.innerHTML = `
        <div class="wrapper">
            <header class="header">
                <button class="btn toGarage">To Garage</button>
                <button class="btn toWinners">To Winners</button>
            </header>
            <main class="main"></main>
            <footer class="footer">
                <button class="btn prev">PREV</button>
                <button class="btn next">NEXT</button>
            </footer>
        </div>
        `
    }
}

renderBaseHTMLStructure()


const toWinners = <HTMLElement>document.querySelector('.toWinners')
const toGarage = <HTMLElement>document.querySelector('.toGarage')

toWinners?.addEventListener('click', renderWinners)
toGarage?.addEventListener('click', renderMenu)