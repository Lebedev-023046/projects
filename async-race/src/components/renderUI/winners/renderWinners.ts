import globalState from '../../globalState/globalState'
import { renderCarImg } from '../garage/renderCar'

const body = document.querySelector('body')

const winners = (): string[]  => {
    let winnersArr: string[] = []
    globalState.winners.forEach((elem, index) => {
        winnersArr.push(`
        <tr>
            <td>${index + 1}</td>
            <td class="winners-car-img" valign="bottom">${renderCarImg(elem.car.color)}</td>
            <td>${elem.car.name}</td>
            <td>${elem.wins}</td>
            <td>${elem.time}</td>
        </tr>
        `)
    })
    return [...winnersArr]
}

export let renderWinners = ()  =>   `
    <div class "wrapper">
        <h1 class "winners-number">Winners #${globalState.winnersCount}</h1>
        <h2 class "pages-number">Page  #${globalState.winnersPage}</h2>
        <table class="winners-table">
            <thead>
                <tr>
                    <th>Number</th>
                    <th>Car</th>
                    <th>Name</th>
                    <th>Wins</th>
                    <th>Best time (seconds)</th>
                </tr>
            </thead>
            <tbody>
            ${winners()}
            </tbody>
        </table>
    </div>
    `


